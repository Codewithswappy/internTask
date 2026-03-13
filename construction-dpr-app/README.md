# Construction Field Management App

A responsive React.js web application implementing core screens from the Construction Field Management App, including Login, Project List, and Daily Progress Report (DPR) Form.

## Tech Stack Used
- React (v19.2.0)
- Vite (v7.3.1)
- Tailwind CSS (v4.2.1)
- React Router DOM (v7.13.1) for client-side routing
- Zustand (v5.0.11) for state management
  > **Note on State Management Choice**: While the requirements suggested using Context API or Redux, I chose to implement Zustand. It avoids the unnecessary re-renders often associated with React Context, while providing a much cleaner, more modern approach to global state management without the heavy boilerplate of Redux. This ensures optimal performance and maintainability.
- Tabler Icons React (v3.40.0) for UI icons
- Flux Toast (v1.0.4) for success and error notifications
- Motion (v12.36.0) for animated transitions

## How to Clone and Run Locally

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd construction-dpr-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

### Login Credentials
To test the application, please use the following mock credentials on the Login screen:
- Email: `test@test.com`
- Password: `123456`

## Features Implemented

1. **Login Screen**
   - Mock authentication
   - Input validation with appropriate error messages on failed attempts
   - Redirection to the Project List upon successful login

2. **Project List Screen**
   - Displays a list of projects with details like Project Name, Status badge, Start Date, and Location
   - Clean card-based UI with status color indicators
   - Navigation to the DPR form for a specific project by clicking its card
   - Search and filter projects by status

3. **DPR Form Screen**
   - Fields including selected Project, Date (date picker), Weather (dropdown), Work Description (textarea), and Worker Count (number input)
   - Photo upload functionality with preview thumbnails for up to 3 images from the local machine
   - Full form validation for all inputs
   - Success toast confirmation upon submission
   - Navigation button to return to the Project List

4. **Responsive Design**
   - Mobile-first approach adapting seamlessly to tablet and desktop screens
   - Complete absence of horizontal scrolling across breakpoints


## Features Not Implemented
- Backend API integration (currently uses mock data and local storage for persisting submitted DPR forms)


## Known Issues or Limitations
- Uploaded photos in the DPR form generate local blob URLs for preview purposes only; they do not persist across different browser sessions or devices since there is no backend storage.
- The project list uses static, hard-coded data as per the initial task requirements.


## Code Organization
- `src/components/`: Reusable, modular UI components.
- `src/pages/`: Core application screens (Login, Project List, DPR Form).
- `src/constants/`: Hardcoded mock data and application constants.
- `src/hooks/`: Custom custom React hooks to manage specific behaviors (e.g., form validation).
- `src/utils/`: Helper functions.
- `src/router/`: Client-side routing setup using React Router v6.