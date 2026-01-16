# MyResume - Personal Portfolio Website

This is a personal portfolio and resume website for Eric John Kenneth Briones. It is a static website built with HTML, CSS, and JavaScript, and it includes a contact form that uses a Vercel serverless function.

## Features

*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **Dynamic Content:** The website uses JavaScript to dynamically display content, such as the portfolio and skills sections.
*   **Contact Form:** The contact form uses a Vercel serverless function to send messages without a traditional backend.
*   **Animations:** The website uses AOS for scroll animations and Typed.js for the hero section's typed text effect.

## Deployment

This project is configured for deployment on Vercel.

### Vercel KV Setup

To store and retrieve contact form messages, this project uses Vercel KV. You will need to create a KV database and link it to your project.

1.  **Create a KV Database:**
    *   Go to the "Storage" tab in your Vercel project.
    *   Click "Create Database" and select "KV".
    *   Follow the prompts to create the database. Choose a name (e.g., `redis-yellow-messages`) and a region.

2.  **Connect to Project:**
    *   After creating the database, click "Connect Project".
    *   Select your project and click "Connect".
    *   This will automatically add the required environment variables (`KV_REST_API_URL`, `KV_REST_API_TOKEN`, etc.) to your project's settings.

3.  **Update `vercel.json` (Optional but Recommended):**
    *   For local development with `vercel dev`, you can pull the environment variables into your local environment.
    *   Run the following command to link your local project and pull the variables:
        ```bash
        vercel link
        vercel env pull .env.development.local
        ```
    *   The `vercel.json` in this project is pre-configured to work with the Vercel KV integration. No changes are needed in `vercel.json` if you have connected the project in the Vercel dashboard.

### Manual Deployment

1.  Make sure you have the Vercel CLI installed: `npm install -g vercel`
2.  Run the `vercel` command in the project's root directory.

The website will be deployed and you will be provided with a URL.

## Development

To run the website locally, you can use the Vercel CLI:

1.  Install the Vercel CLI: `npm install -g vercel`
2.  Follow the **Vercel KV Setup** steps above to link your project and pull down environment variables.
3.  Run `vercel dev` in the project's root directory.

This will start a local development server that can connect to your Vercel KV store.

## Technologies Used

*   **HTML, CSS, JavaScript**
*   **Bootstrap:** For the responsive layout and UI components.
*   **Vercel:** For hosting and serverless functions.
*   **@vercel/kv:** For the contact form message store.
*   **AOS:** For scroll animations.
*   **Typed.js:** For the typed text effect.
*   **Isotope:** For the filterable portfolio.
*   **GLightbox:** For the portfolio popups.
*   **Swiper:** For the testimonials slider.