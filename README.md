# Jobsy - Professional Social Network

A modern social networking platform built with the MERN stack, designed for professional networking and content sharing.

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Heroicons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

## 📋 Features

- **User Authentication** - Register, login, logout with JWT cookies
- **Post Creation** - Create and share posts
- **Post Feed** - View all posts from users
- **User Profiles** - Visit user profiles and view their posts
- **Responsive Design** - Modern UI with Tailwind CSS
- **Protected Routes** - Authentication-based route protection

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### 1. Clone Repository
```bash
git clone <repository-url>
cd jobsy
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create `.env` file in server directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Start frontend development server:
```bash
npm run dev
```

### 4. Access Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 📁 Project Structure

```
jobsy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   └── App.jsx         # Main app component
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/        # Route handlers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── config/             # Database configuration
│   └── server.js           # Server entry point
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users/me` - Get current user info
- `GET /api/users/:id` - Get user by ID

### Posts
- `GET /api/posts/all` - Get all posts
- `GET /api/posts/user/:userId` - Get posts by user
- `POST /api/posts/create` - Create new post
- `GET /api/posts/post/:id` - Get post by ID

## 🔐 Environment Variables

### Server (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobsy
JWT_SECRET=your_secret_key
```




