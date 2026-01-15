# MyResume - Portfolio & Resume

A responsive portfolio website built with Bootstrap 5, featuring 3D art, web projects, and Coursera certificates. Now fully optimized for Vercel deployment.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Portfolio**: Display images, 3D art, and certificates with Isotope filtering
- **Contact Form**: Vercel serverless function integration for message handling
- **Message Display**: View submitted messages in real-time on the Messages section
- **3D Art Showcase**: Portfolio section for 3D modeling and rendering work
- **Certificates**: Display Coursera certificates with proper image rendering
- **Smooth Animations**: AOS (Animate on Scroll) and Typed.js effects

## Project Structure

```
MyResume-1.0.0/
├── index.html                 # Main portfolio page
├── portfolio-details.html      # Portfolio detail page
├── package.json               # Node.js dependencies for Vercel
├── vercel.json               # Vercel configuration
├── .gitignore                # Git ignore rules
├── api/
│   └── contact.js            # Serverless contact form handler
├── assets/
│   ├── css/
│   │   ├── main.css          # Bootstrap template styles
│   │   ├── custom.css        # Custom project styles
│   │   └── responsive.css    # Responsive & mobile optimizations
│   ├── js/
│   │   ├── main.js           # Template main script
│   │   └── custom.js         # Custom form & effects
│   ├── img/
│   │   ├── portfolio/        # Personal photos & hero images
│   │   ├── masonry-portfolio/# Portfolio items (3D, projects, certificates)
│   │   ├── icons/            # Skill icons
│   │   └── testimonials/     # Testimonial images
│   └── vendor/               # Bootstrap, AOS, GLightbox, etc.
└── forms/
    └── contact.php           # Legacy PHP (not used on Vercel)

```

## Deployment to Vercel

### Prerequisites
- GitHub account (for version control)
- Vercel account (https://vercel.com)

### Steps

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/myresume.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**:
   - Visit https://vercel.com/new
   - Import your GitHub repository
   - Select the project root directory
   - Vercel will auto-detect the static files
   - Click "Deploy"

4. **Set Environment Variables (Optional)**:
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add `CONTACT_EMAIL` if you want to customize the receiving email

5. **Custom Domain** (Optional):
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain and follow DNS instructions

## Local Development

### Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Run locally with Vercel environment
vercel dev
```

The site will be available at `http://localhost:3000`

### Without Vercel CLI

Simply open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

## Contact Form

The contact form now uses a Vercel serverless function (`/api/contact`) to handle submissions:

- **Validation**: Email format and required fields are validated on the backend
- **Messages**: Submitted messages appear in the "Messages" section in real-time
- **Response**: Users receive immediate feedback (success/error)

### Customizing the Contact Email

To receive email notifications, integrate with a service like:
- **SendGrid**: Add SendGrid API key to environment variables
- **Vercel KV**: Use Vercel's Key-Value storage
- **Nodemailer**: Configure SMTP settings

Update `api/contact.js` with your preferred solution.

## Responsive Design

The site includes mobile-first responsive design with:
- Optimized touch targets (min 44px) for accessibility
- Proper viewport meta tag for mobile devices
- Responsive images and flexible layouts
- Reduced font sizes and spacing on small screens
- Fixed positioning optimizations to prevent layout shifts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Credits

- **Template**: MyResume Bootstrap Template by BootstrapMade
- **Author**: Eric John Kenneth Briones
- **Built With**: Bootstrap 5, AOS, GLightbox, Isotope, Swiper, Typed.js

## License

MIT License - See LICENSE file for details

## Questions & Support

For issues or questions:
- Email: briones.eric2003@gmail.com
- LinkedIn: https://www.linkedin.com/in/eric-john-kenneth-briones-233204330
- GitHub: https://github.com/EricJKBriones
