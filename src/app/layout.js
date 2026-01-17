import Script from 'next/script';
import AppInitializer from '@/components/AppInitializer'; // Import the new component

export const metadata = {
  title: 'Index - MyResume Bootstrap Template',
  description: 'Eric John Kenneth Briones - Portfolio & Resume',
  keywords: 'portfolio, resume, 3d-art, web-development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

        {/* Favicons */}
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Vendor CSS Files */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* Main CSS File */}
        <link href="/assets/css/main.css" rel="stylesheet" />
        <link href="/assets/css/custom.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
      </head>
      <body className="index-page">
        <AppInitializer /> {/* Add the initializer component */}
        {children}

        {/* Preloader is in the original HTML, but it's removed by JS. 
            We can keep it here, or move its logic entirely to the AppInitializer if needed. */}
        <div id="preloader"></div>

        {/* Vendor JS Files - These are needed for the initializer to work */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/typed.js/typed.umd.js" strategy="lazyOnload"></Script>
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive"></Script>
        
        {/* main.js and custom.js are no longer needed as their logic is moved into components */}
      </body>
    </html>
  );
}