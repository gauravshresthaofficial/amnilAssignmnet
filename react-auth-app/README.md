# React Authentication App

A modern authentication system built with React, React Router, and Tailwind CSS. Features login, registration, and protected routes.

## Features

- ✅ User registration & login
- ✅ Protected routes
- ✅ Form validation

## Tech Stack

- **Frontend**: React 19
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Mock API**: JSON Server

## Installation

1. Clone the repository:

   ```bash
   git clone --no-checkout https://github.com/gauravshresthaofficial/amnilAssignmnet.git
   cd amnilAssignment
   git sparse-checkout init --cone
   git sparse checkout set react-auth-app
   git checkout main
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── Home.jsx        # Protected dashboard
│   ├── Login.jsx       # Login form
│   └── Registration.jsx # Signup form
├── context/
│   └── AuthContext.js  # Authentication state management
├── utils/
│   ├── api.js          # API calls
│   └── validation.js   # Form validation
├── Routes/
│   ├── ProtectedRoute.js # Auth guard
│   └── PublicRoute.js  # Redirect if authenticated
└── App.jsx             # Main router
```

## Key Components

### AuthContext

Manages global authentication state with:

- User session persistence
- Login/logout functionality
- Loading states

```javascript
const { isAuthenticated, user, login, logout } = useAuth();
```

### Protected Routes

```jsx
<ProtectedRoute>
  <Home /> {/* Only accessible when authenticated */}
</ProtectedRoute>
```

### Public Routes

```jsx
<PublicRoute>
  <Login /> {/* Redirects if already logged in */}
</PublicRoute>
```

## API Integration

The app connects to a mock JSON server with:

```javascript
// API endpoints
fetchUsers(); // GET /users
addUser(); // POST /users
```

## Form Validation

Client-side validation for:

- Required fields
- Email format
- Password strength (min 6 chars)
- Username requirements

## Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gauravshresthaofficial) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gauravshresthaofficial/) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:imgauravshrestha@gmail.com) [![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://www.shresthagaurav.com/)

</div>
