# Sketch Artist Website

## Overview
The **Sketch Artist Website** is a React.js-based portfolio platform for showcasing digital and hand-drawn sketches. This website provides an interactive and visually appealing experience for users to browse and appreciate the artist's work.

## Features
- 🎨 **Gallery Section**: Display artwork in a responsive and organized layout.
- 🖌️ **Categories**: Filter sketches based on different styles or themes.
- 📜 **About Page**: Introduce the artist with a biography and artistic journey.
- 📩 **Contact Form**: Allow users to connect with the artist for commissions or inquiries.
- 🔥 **Animations & Transitions**: Smooth UI interactions with CSS and libraries like Framer Motion.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Animations**: Framer Motion / AOS (Animate on Scroll)
- **Hosting**: Vercel / Netlify (Optional)

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/sketch-artist-website.git
   cd sketch-artist-website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The website will be available at `http://localhost:5173/`.

## Folder Structure
```
/sketch-artist-website
│-- /src
│   │-- /components   # Main pages like Home, Gallery, About, Contact   
│   │-- /assets      # Images and icons
│   │-- App.js       # Main application file
│   │-- index.js     # Entry point
│-- public          # Static assets
│-- package.json    # Project dependencies and scripts
```

## Deployment
To deploy the project on **Vercel**, run:
```sh
vercel deploy
```
For **Netlify**, use:
```sh
netlify deploy
```

## Contribution
Feel free to fork the repository and submit a pull request with improvements or new features.

## License
This project is licensed under the [MIT License](LICENSE).

