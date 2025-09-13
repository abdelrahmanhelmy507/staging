# Aurmenu Landing Page & Related Pages

This is a comprehensive React component structure for the Aurmenu product landing page and all related pages. The implementation includes a complete landing page with multiple sections, product details pages, package pages, contact forms, and service pages.

## Features

### Landing Page Components
- **Header/Navigation**: Responsive navigation with dropdown menus for packages, services, and contact
- **Hero Section**: Eye-catching hero section with call-to-action buttons
- **About Section**: Overview of Aurmenu with feature cards
- **Features Section**: Detailed features grid with icons and descriptions
- **Products Add-ons Sidebar**: Interactive sidebar showcasing available add-ons
- **Pricing Section**: Comprehensive pricing plans with feature comparisons
- **Footer**: Complete footer with links, contact info, and social media

### Additional Pages
- **Product Details Pages**: Individual pages for each add-on product
- **Package Pages**: Detailed pages for each pricing package (Start, Progress, Excellence, Professional)
- **Contact Pages**: Customer contact and agents/distributors contact forms
- **Service Pages**: Support center, training & education, and careers pages

## Required NPM Packages

To run this project, you need to install the following packages:

```bash
# Core React packages
npm install react react-dom

# React Router for navigation
npm install react-router-dom

# React Bootstrap for UI components
npm install react-bootstrap bootstrap

# React Icons for all icons
npm install react-icons

# Phone number input component
npm install react-phone-number-input

# Additional dependencies (if not already installed)
npm install axios
npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend
```

## Installation Commands

```bash
# Install all required packages at once
npm install react react-dom react-router-dom react-bootstrap bootstrap react-icons react-phone-number-input axios i18next react-i18next i18next-browser-languagedetector i18next-http-backend

# Or install individually
npm install react
npm install react-dom
npm install react-router-dom
npm install react-bootstrap
npm install bootstrap
npm install react-icons
npm install react-phone-number-input
npm install axios
npm install i18next
npm install react-i18next
npm install i18next-browser-languagedetector
npm install i18next-http-backend
```

## File Structure

```
src/components/Store/aurmenu/
├── Aurmenu.jsx                    # Main landing page component
├── AurmenuHeader.jsx              # Navigation header
├── AurmenuHero.jsx                # Hero section (existing)
├── AurmenuAbout.jsx               # About section (existing)
├── AurmenuFeatures.jsx            # Features section
├── AurmenuSidebar.jsx             # Products add-ons sidebar
├── aurmenuPricing.jsx             # Pricing section (existing)
├── AurmenuFooter.jsx              # Footer component
├── aurmenu.css                    # Comprehensive CSS styles
├── ContactPages/
│   ├── CustomerContact.jsx        # Customer contact form
│   └── AgentsContact.jsx          # Agents & distributors contact
├── ProductDetails/
│   └── ProductDetailsPage.jsx     # Dynamic product details page
├── PackagePages/
│   └── PackagePage.jsx            # Dynamic package details page
├── ServicePages/
│   ├── SupportCenter.jsx          # Support center page
│   ├── TrainingEducation.jsx      # Training & education page
│   └── Careers.jsx                # Careers page
└── README.md                      # This file
```

## Routing Structure

The following routes should be configured in your main routing file:

```jsx
// Main landing page
/aurmenu

// Product details pages
/aurmenu/product/order-receiver
/aurmenu/product/notifications-device
/aurmenu/product/qr-printing
/aurmenu/product/nfc-devices
/aurmenu/product/marketing-solutions
/aurmenu/product/more-addons

// Package pages
/aurmenu/package/start
/aurmenu/package/progress
/aurmenu/package/excellence
/aurmenu/package/professional

// Contact pages
/aurmenu/contact/customer
/aurmenu/contact/agents

// Service pages
/aurmenu/support
/aurmenu/training
/aurmenu/careers
```

## Key Features

### Responsive Design
- Fully responsive design that works on desktop, tablet, and mobile
- Bootstrap grid system for consistent layout
- Mobile-first approach with breakpoints

### Accessibility
- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader friendly
- High contrast colors and readable fonts

### User Experience
- Smooth hover effects and transitions
- Loading states for forms
- Form validation with user feedback
- Clear call-to-action buttons
- Intuitive navigation structure

### Form Validation
- Real-time form validation
- Phone number validation using react-phone-number-input
- Email validation
- Required field validation
- User-friendly error messages

### Internationalization Ready
- Arabic text support (RTL)
- Structured for easy translation
- i18next integration ready

## Usage

1. Import the main component:
```jsx
import Aurmenu from './components/Store/aurmenu/Aurmenu';
```

2. Use in your routing:
```jsx
<Route path="/aurmenu" element={<Aurmenu />} />
```

3. Import individual pages for routing:
```jsx
import ProductDetailsPage from './components/Store/aurmenu/ProductDetails/ProductDetailsPage';
import PackagePage from './components/Store/aurmenu/PackagePages/PackagePage';
import CustomerContact from './components/Store/aurmenu/ContactPages/CustomerContact';
// ... other imports
```

## Styling

The project uses a comprehensive CSS file (`aurmenu.css`) that includes:
- Modern card-based design
- Smooth animations and transitions
- Consistent color scheme
- Responsive breakpoints
- Hover effects and interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Notes

- All components are functional components using React hooks
- Uses React Router for navigation
- Bootstrap components for consistent UI
- React Icons for all iconography
- Form handling with validation
- Responsive design principles
- Production-ready code structure

## Future Enhancements

- Add animations library (Framer Motion)
- Implement state management (Redux/Context)
- Add unit tests
- Implement lazy loading
- Add PWA features
- Integrate with backend APIs
