# Modern Website Project

A responsive, modern website built with HTML5, CSS3, and JavaScript. This project features a clean design, interactive elements, and form validation.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Interactive image slider
- Contact form with validation
- Mobile-friendly navigation
- Google Maps integration
- Social media integration

## Project Structure

```
modern-website/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── contact.js
└── images/
    ├── hero-bg.jpg
    ├── slide1.jpg
    ├── slide2.jpg
    ├── slide3.jpg
    ├── about-image.jpg
    ├── team1.jpg
    ├── team2.jpg
    └── team3.jpg
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd modern-website
   ```

3. Add your images to the `images` folder:
   - hero-bg.jpg (for the hero section background)
   - slide1.jpg, slide2.jpg, slide3.jpg (for the image slider)
   - about-image.jpg (for the about section)
   - team1.jpg, team2.jpg, team3.jpg (for team member photos)

4. Open `index.html` in your web browser to view the website locally.

## Deployment

### Option 1: GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/modern-website.git
   git push -u origin main
   ```
3. Go to your repository settings
4. Scroll down to the "GitHub Pages" section
5. Select the main branch as the source
6. Your website will be available at `https://yourusername.github.io/modern-website`

### Option 2: Netlify

1. Create a Netlify account
2. Click "New site from Git"
3. Choose your repository
4. Configure build settings (not needed for static sites)
5. Click "Deploy site"
6. Your website will be available at `https://your-site-name.netlify.app`

### Option 3: Vercel

1. Create a Vercel account
2. Click "New Project"
3. Import your repository
4. Configure project settings (not needed for static sites)
5. Click "Deploy"
6. Your website will be available at `https://your-site-name.vercel.app`

## Customization

### Colors
The website uses CSS variables for colors. You can modify them in the `:root` section of `style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --light-background: #f3f4f6;
    --border-color: #e5e7eb;
}
```

### Images
Replace the images in the `images` folder with your own images. Make sure to maintain the same file names or update the image paths in the HTML files.

### Content
Edit the HTML files to update the content, including:
- Text content
- Team member information
- Contact information
- Social media links

## Browser Support

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

