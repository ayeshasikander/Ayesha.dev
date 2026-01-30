# Ayesha's Portfolio Website

A modern, responsive portfolio website built with React and Chakra UI. Features smooth animations, interactive components, and a professional design to showcase skills, projects, and experience.

## 🚀 Features

- **Modern UI/UX** - Clean and professional design with Chakra UI
- **Responsive Design** - Mobile-first approach for all devices
- **Smooth Animations** - Framer Motion and Lottie animations for engaging interactions
- **Project Showcase** - Display portfolio projects with detailed information
- **Contact Form** - EmailJS integration for direct communication
- **Skill Progress Tracking** - Visual representation of technical skills
- **Dark/Light Theme** - Custom theme support
- **Fast Performance** - Optimized with React best practices

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3
- **Styling**: Chakra UI, SASS
- **Animations**: Framer Motion, Lottie React
- **UI Components**: Ant Design, Rsuite, React Icons
- **Routing**: React Router v6
- **Email Service**: EmailJS
- **Carousel**: Swiper
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Ayesha.dev
```

2. Install dependencies:

```bash
npm install
```

## 🚀 Getting Started

### Development

Run the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) and reload when you make changes.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the minified and optimized production-ready code.

### Run Tests

Launch the test runner:

```bash
npm test
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── cards/          # Card components (ProjectCard, ProfileCard, etc.)
│   ├── slider/         # Carousel and slider components
│   ├── cube/           # 3D cube component
│   ├── modal/          # Modal components
│   └── loading/        # Loading states
├── sections/           # Page sections
│   ├── about/          # About section
│   ├── heroSection/    # Hero banner
│   ├── service/        # Services/experience section
│   ├── skill/          # Skills section
│   └── testimonial/    # Testimonials section
├── pages/              # Full page components
│   ├── main/           # Home page
│   ├── portfolio/      # Portfolio page
│   ├── contact/        # Contact page
│   └── errorScreen/    # 404 page
├── layout/             # Layout components
│   ├── header/         # Navigation header
│   ├── footer/         # Footer
│   └── sidebar/        # Sidebar navigation
├── routes/             # Routing configuration
├── style/              # Global styles and theme
├── assets/             # Images, icons, and animations
└── constantData/       # Static data and constants
```

## 🎨 Customization

### Theme

Modify the theme in `src/style/theme.js` to customize colors and styling.

### Content

Update portfolio projects and skills in `src/constantData/projectDetail.js`.

### Styles

Global styles use SCSS. Component-specific styles are located in `src/style/`.

## 📧 Email Setup

To enable the contact form, update your EmailJS credentials in the contact component with your service ID and template ID.

## 📝 Available Scripts

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm start`     | Start development server on port 3000           |
| `npm run build` | Build optimized production bundle               |
| `npm test`      | Run test suite in watch mode                    |
| `npm run eject` | Eject from Create React App (one-way operation) |

## 🌐 Deployment

The built app can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

Ensure the `_redirects` file in the public folder is included for proper routing on platforms like Netlify.

## 📄 License

This project is private and belongs to Ayesha.

## 👤 Author

**Ayesha**

---

**Built with ❤️ using React and Chakra UI**
