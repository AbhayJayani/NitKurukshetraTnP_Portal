# NIT Kurukshetra Training & Placement Portal

Welcome to the official Training and Placement Portal for the National Institute of Technology, Kurukshetra (NITKKR). This full-stack web application streamlines the campus placement process for students, recruiters, and administrators, providing a seamless and modern experience for all users.

---
##Demo
https://github.com/user-attachments/assets/136be815-a3d0-4992-a699-2cc138c362de

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Placement Highlights](#placement-highlights)
- [Developers](#developers)
- [License](#license)

---

## About the Project

This portal is designed to:

- Help students discover and apply for job opportunities.
- Enable recruiters to post jobs and manage applications.
- Provide the T&P Cell with tools to manage the placement process efficiently.

The portal is tailored for NIT Kurukshetra, reflecting its branding and placement excellence.

---

## Key Features

- Student, recruiter, and admin authentication
- Job listings, search, and application tracking
- Company registration and job posting
- Resume and document uploads
- Real-time notifications and status updates
- Employer dashboard for managing job postings
- Responsive design for mobile and desktop
- Modern, responsive UI with NITKKR branding

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Cloud Storage:** Cloudinary (for file uploads)
- **Authentication:** JWT
- **State Management:** Redux Toolkit

---

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd ./Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` folder (see [Environment Variables](#environment-variables)).
4. Start the backend server:
   ```bash
   npm run dev
   ```
   You should see:
   ```
   Server is running on port 5011
   MongoDB connected...
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ./Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Environment Variables

Create a `.env` file in the `Backend` directory with the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5011
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

---

## Placement Highlights

- **Placement Rate:** 90%+ for B.Tech and M.Tech students
- **Highest Package:** ₹62 LPA (2023-24)
- **Average Package:** ₹13.5 LPA (2023-24)
- **Top Recruiters:** Microsoft, Amazon, Google, Infosys, TCS, L&T, and more

NIT Kurukshetra has a legacy of excellent placements, with leading companies visiting the campus every year.

---

## Developers

- **Abhay Singh** (NIT Kurukshetra)
- **Prince** (NIT Kurukshetra)

---

## License

This project is licensed under the MIT License.

---

> _For any queries or contributions, feel free to open an issue or submit a pull request!_
