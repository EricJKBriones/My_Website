/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, error);
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    fetch(action, {
      method: 'POST',
      body: JSON.stringify(formObject),
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        // The API sends back a JSON error response. Let's try to parse it.
        return response.json().then(errorBody => {
          // Construct a more detailed error message
          let errorMessage = `API Error: ${errorBody.message || 'Unknown error'}`;
          if (errorBody.debug_info) {
            errorMessage += ` | Details: KV URL Set: ${errorBody.debug_info.kv_url_set}, KV Token Set: ${errorBody.debug_info.kv_rest_api_token_set}`;
          }
          throw new Error(errorMessage);
        }).catch(() => {
          // If parsing JSON fails, fall back to the original error.
          throw new Error(`Server returned ${response.status} ${response.statusText}. Could not parse error response body.`);
        });
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() === 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action);
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
