# Construction DPR App

A Daily Progress Report (DPR) management system for construction projects built with React and Vite.

## Features

- User authentication with simple login
- Project listing with search and filter functionality
- Daily Progress Report form with validation
- Image upload for progress documentation
- Responsive design for mobile and desktop
- Local storage for data persistence

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons
- **Routing**: React Router DOM
- **Notifications**: Flux Toast
- **State Management**: React Hooks (no external state library)

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd construction-dpr-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Login
- Email: `test@test.com`
- Password: `123456`

### Creating a DPR
1. Navigate to the Projects page after login
2. Click on any project card to open the DPR form
3. Fill in all required fields:
   - Project (auto-selected)
   - Date
   - Weather conditions
   - Work description (minimum 10 characters)
   - Worker count
   - Progress photos (optional, max 3 images)
4. Submit the form

### Project Management
- View all projects on the main dashboard
- Search projects by name or location
- Filter projects by status (Active, Pending, Completed)
- Click on project cards to create DPR entries

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BackButton.jsx
│   ├── Button.jsx
│   ├── FormComponents.jsx
│   ├── ImageUpload.jsx
│   └── ProjectCard.jsx
├── pages/              # Page components
│   ├── DPRForm.jsx
│   ├── Login.jsx
│   └── Projects.jsx
├── constants/          # Application constants
│   ├── app.js
│   ├── forms.js
│   ├── projects.js
│   └── index.js
├── utils/             # Utility functions
│   ├── utils.js
│   └── index.js
├── hooks/             # Custom React hooks
│   └── useFormValidation.js
└── router/            # Routing configuration
    └── AppRouter.jsx
```

## Form Validation

The application includes comprehensive form validation:

- **Required fields**: All form fields except images are required
- **Date validation**: Cannot be more than 7 days in the future
- **Text validation**: Description must be 10-500 characters
- **Number validation**: Worker count must be 1-1000
- **File validation**: Images must be under 5MB, accepted formats: JPEG, PNG, WebP, GIF

## Data Storage

The application uses browser localStorage to persist:
- DPR reports
- User preferences

Data is automatically saved when forms are submitted and persists across browser sessions.

## Responsive Design

The application is fully responsive with breakpoints:
- Mobile: 375px and up
- Tablet: 640px and up
- Desktop: 1024px and up
- Large screens: 1280px and up

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

### Code Organization

- **Components**: Reusable UI components with consistent naming
- **Pages**: Route-level components
- **Constants**: Application-wide constants and configuration
- **Utils**: Helper functions and utilities
- **Hooks**: Custom React hooks for state management

### Styling

- Tailwind CSS for utility-first styling
- Custom components with consistent design system
- Mobile-first responsive approach

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.js` or kill the process using the port
2. **Dependencies not installing**: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Images not displaying**: Check file format and size limits (max 5MB)

### Development Tips

- Use browser developer tools to debug responsive design
- Check browser console for any JavaScript errors
- Ensure localStorage is enabled in your browser

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.