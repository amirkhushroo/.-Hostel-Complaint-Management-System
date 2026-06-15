# Hostel Complaint Management System

## Project Overview

The Hostel Complaint Management System is a MERN Stack web application designed to help hostel students register complaints and allow administrators to manage and resolve them efficiently.

Students can submit complaints related to electricity, water supply, internet connectivity, cleaning, furniture, and other hostel issues. Administrators can view all complaints, update their status, and track complaint resolution.

This project demonstrates full-stack web development using React, Node.js, Express.js, and MongoDB.

---

## Features

### Student Module

* Submit hostel complaints
* Select complaint category
* Enter room number
* Provide complaint description
* View complaint status

### Admin Module

* View all complaints
* Update complaint status
* Delete complaints
* Monitor complaint records

---

## Technology Stack

### Frontend

* React.js
* Axios
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Tools Used

* Visual Studio Code
* Postman
* Git
* GitHub

---

## Project Structure

Hostel-Complaint-System

├── client

│ ├── src

│ │ ├── pages

│ │ │ ├── Student.jsx

│ │ │ └── Admin.jsx

│ │ ├── App.jsx

│ │ └── main.jsx

│

└── server

├── config

│ └── db.js

├── models

│ └── Complaint.js

├── controllers

│ └── complaintController.js

├── routes

│ └── complaintRoutes.js

├── .env

└── server.js

---

## Database Schema

Each complaint contains:

* Student Name
* Room Number
* Complaint Type
* Description
* Status
* Created Date

Default complaint status:

Pending

---

## API Endpoints

### Create Complaint

POST

/api/complaints

### Get All Complaints

GET

/api/complaints

### Update Complaint Status

PUT

/api/complaints/:id

### Delete Complaint

DELETE

/api/complaints/:id

---

## Installation

### Clone Repository

git clone <repository-url>

### Backend Setup

cd server

npm install

npm run dev

### Frontend Setup

cd client

npm install

npm run dev

---

## MongoDB Configuration

Create a .env file inside the server folder.

PORT=5000

MONGO_URI=your_mongodb_connection_string

---

## Future Enhancements

* Student Login System
* Admin Authentication
* Complaint Tracking Dashboard
* Search and Filter Complaints
* Email Notifications
* Complaint Analytics
* Responsive Mobile Design

---

## Learning Outcomes

This project helped in understanding:

* React Components
* State Management
* REST APIs
* CRUD Operations
* MongoDB Database Integration
* Express Routing
* Frontend and Backend Communication
* Git and GitHub Version Control

---

## Conclusion

The Hostel Complaint Management System provides an efficient platform for managing hostel-related issues. It simplifies the complaint registration process for students and enables administrators to track and resolve complaints effectively.

---

## Author

Amir Khushroo

B.Tech CSE (Data Science & AI)

