# TechCorp - Modern Company Website

A comprehensive React.js company website featuring interactive elements, error handling demonstrations, forms, and modern CSS styling.

## 🚀 Features

### Pages
- **Home Page**: Welcome section with styled text, CSS animations, theme switcher, and interactive buttons
- **About Page**: Company information with various interactive buttons demonstrating different functionalities
- **Products Page**: Product showcase with error-triggering buttons for development testing
- **Services Page**: Service offerings with request forms and interactive selection
- **Contact Page**: Multiple contact forms including main contact, newsletter signup, and feedback forms

### Interactive Elements
- ✅ **Interactive Buttons**: Various buttons that perform different actions (counters, alerts, console logs, etc.)
- ⚠️ **Error Handling Demo**: Buttons that safely trigger different types of JavaScript errors for testing
- 📝 **Forms with Validation**: Multiple forms with submit functionality and validation
- 🎨 **CSS Text Styling**: Showcase of various CSS text effects and animations
- 🌙 **Theme Switching**: Dark, light, and blue theme options
- 📱 **Responsive Design**: Mobile-friendly layout that works on all devices

### Technical Features
- React Router for navigation
- Modern CSS with gradients, animations, and transitions
- Form validation and error handling
- Responsive grid layouts
- CSS animations and hover effects
- Theme switching functionality

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd CompanySite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to `http://localhost:3000` manually

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎯 What You Can Test

### Home Page (`/`)
- Click the interactive counter button
- Try the theme switcher (Default, Dark, Blue)
- Observe CSS text animations and effects
- Test responsive design by resizing the window

### About Page (`/about`)
- **Show Welcome Message** - Displays a welcome message
- **Increment/Decrement Counter** - Updates a live counter
- **Trigger Animation** - Animates the page title
- **Random Team Member** - Shows random team member info
- **Change Background** - Changes the page background color
- **Show Alert** - Displays browser alert
- **Log to Console** - Logs message to browser console
- **Reset All** - Clears all interactions

### Products Page (`/products`)
- **Error Testing Buttons** (all safely handled):
  - TypeError demonstration
  - ReferenceError demonstration
  - SyntaxError demonstration
  - RangeError demonstration
  - Custom error demonstration
  - Network error simulation
  - Promise rejection handling
  - Stack overflow simulation (limited for safety)
- **Product Management**: Remove products from the grid

### Contact Page (`/contact`)
- **Main Contact Form**: Full contact form with validation
- **Newsletter Signup**: Email subscription form
- **Feedback Form**: Rating and feedback submission
- All forms include proper validation and success/error messages

### Services Page (`/services`)
- **Service Selection**: Click on service cards to select them
- **Information Request**: Fill out forms for selected services
- **Interactive Service Cards**: Hover effects and selection states

## 🎨 CSS Features Demonstrated

### Text Styling Effects
- Gradient text
- Shadow effects
- Outlined text
- Neon glow animation
- Typewriter animation
- 3D rotating text
- Underlined text with animations

### Interactive Elements
- Hover transformations
- Button animations with gradients
- Card hover effects
- Loading animations
- Slide-in animations
- Pulse effects
- Floating elements

### Layout Features
- CSS Grid layouts
- Flexbox alignment
- Responsive design patterns
- Mobile-first approach
- Theme switching with CSS variables

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 🌙 Theme Support

Three built-in themes:
- **Default**: Light theme with blue accents
- **Dark**: Dark theme with contrasting elements
- **Blue**: Blue-based color scheme

## 🔧 Development Notes

### Error Handling
All error demonstrations in the Products page are safely contained within try-catch blocks and won't crash the application. They're designed for testing error handling and logging functionality.

### Form Validation
Forms include:
- Required field validation
- Email format validation
- Real-time feedback
- Success/error state management

### Performance Considerations
- CSS animations use transform properties for optimal performance
- Images and assets are optimized
- Component state management is efficient
- No unnecessary re-renders

## 🚀 Deployment

To build for production:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment to any static hosting service.

## 📧 Support

For questions or issues with the website functionality, check the browser console for any error messages or use the contact forms within the application.

---

**Enjoy exploring the TechCorp website!** 🎉
