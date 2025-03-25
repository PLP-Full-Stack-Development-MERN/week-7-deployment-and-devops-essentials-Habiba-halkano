# MERN Blog Platform

A full-stack blog platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring modern deployment practices and robust monitoring.

## Project Overview

This blog platform is a full-featured application that allows users to:
- Read and create blog posts
- Manage content through an admin panel
- Comment on posts
- Search and filter content
- Responsive design for all devices

## Tech Stack

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- Winston & Morgan for logging
- PM2 for process management

### Frontend
- React.js
- Material-UI for components
- Redux for state management
- Sentry for error tracking
- Axios for API calls

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mern-blog-platform.git
cd mern-blog-platform
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:
Create `.env` files in both backend and frontend directories with the following variables:

Backend (.env):
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SENTRY_DSN=your_sentry_dsn
```

### Running the Application

1. Start the backend:
```bash
cd backend
npm run dev
```

2. Start the frontend:
```bash
cd frontend
npm start
```

## Deployment

### Backend Deployment (Render)
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Configure environment variables
4. Set build command: `npm install`
5. Set start command: `npm start`

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with default settings

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration:
- Automated testing on every push
- Linting and code quality checks
- Build verification
- Deployment to staging/production environments

## Monitoring and Security

### Monitoring
- Winston & Morgan for backend logging
- Sentry for frontend error tracking
- Render dashboard for server monitoring
- Performance metrics tracking

### Security Measures
- HTTPS for all communications
- Environment variables for sensitive data
- JWT-based authentication
- Input validation and sanitization
- Rate limiting
- CORS configuration

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 