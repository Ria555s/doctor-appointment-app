# Doctor-Appointment Web Application

## Introduction
This is a simple and efficient Doctor Appointment web application built with the help of ChatGPT. It allows patients to schedule appointments, manage their personal and medical information, and view details in an organized dashboard. Designed with usability in mind, this system helps streamline the process of booking and managing doctor visits.

## To run this project on your local machine, follow these steps:
Clone the project repository from GitHub: git clone
Install the project dependencies by running: npm inatall
Ensure you have MongoDB installed and running on your local machine.
Start the application node app.js This application will start and listen on port 3000. You can access the API through the provided endpoints.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Getting Started
Clone the Repository
git clone https://github.com/Ria555s/doctor-appointment-app.git

Install Dependencies

Frontend: npm install inside /client

Backend: npm install inside /server

Start Development Servers

Frontend: npm run dev

Backend: node server.js

Access the App
Visit http://localhost:5000 to use the app.


# Tech Stack:
Frontend: React (Vite), Tailwind CSS, Axios, JavaScript, HTML

Backend: Node.js, Express.js

Database: MongoDB

API Testing: Postman

UI: Responsive layout with reusable components

# Overview

The Doctor Appointment System includes several RESTful API endpoints to manage patient data and appointments. Below is a high-level summary:
## Patient
* GET /patients — Retrieve a list of all patients.
* POST /patients — Add a new patient
## Doctor
* GET /doctors — List all doctors.
## Appointments
* GET /appointments — View all appointments.
* POST /appointments — Create a new appointment.
