# SmartLab Equipment Manager - Project Plan

## 1. Project Overview

Build a full-stack web application to manage laboratory equipment.

The application allows lab administrators to:

* View equipment statistics through a dashboard
* Add new equipment
* Update existing equipment details
* Delete equipment with confirmation
* Search equipment by name
* Filter equipment by type and status
* Monitor equipment operational status

The goal is to build a scalable and user-friendly equipment management system with a clear separation between frontend, backend, and database layers.

## 2. Technology Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Responsive Design

Tailwind CSS is selected to build a clean, responsive user interface efficiently across desktop and mobile devices.

### Backend

* Node.js
* Express.js

The backend will expose REST APIs for equipment management and handle database communication.

### Database

* MySQL

MySQL is selected because equipment management data has a structured relational format. It provides reliable CRUD operations, data validation, and is widely used in production applications.

### Deployment

* Frontend: GitHub Pages
* Backend: Render / Railway

## 3. Application Architecture

```
React + Tailwind CSS
          |
          |
        Axios
          |
          |
 Node.js + Express.js
          |
          |
        MySQL
```

The frontend communicates with the backend using REST APIs. The backend manages business logic and database operations.

## 4. Database Design

Database:

```
cadmech_equipment
```

Table:

```
equipment
```

The database schema follows the structure provided in the assessment requirements.

### Equipment Table Fields

| Field          | Type                           | Description                    |
| -------------- | ------------------------------ | ------------------------------ |
| id             | INT AUTO_INCREMENT PRIMARY KEY | Unique equipment identifier    |
| name           | VARCHAR(255)                   | Equipment name                 |
| type           | ENUM                           | Equipment category             |
| status         | ENUM                           | Current equipment status       |
| location       | VARCHAR(255)                   | Equipment location             |
| serial_number  | VARCHAR(100) UNIQUE            | Unique equipment serial number |
| description    | TEXT                           | Additional equipment details   |
| installed_date | DATE                           | Equipment installation date    |
| created_at     | TIMESTAMP                      | Record creation timestamp      |
| updated_at     | TIMESTAMP                      | Record update timestamp        |

### Equipment Types

* CNC Machine
* IoT Sensor
* Automation Trainer
* PLC Module
* Hydraulic System
* Pneumatic System
* Electrical Panel

### Equipment Status

* Active
* Under Maintenance
* Decommissioned

## 5. API Planning

### Equipment APIs

```
GET     /api/equipment
```

Retrieve all equipment records.

Supports:

* Search by name
* Filter by type
* Filter by status

```
GET     /api/equipment/:id
```

Retrieve a single equipment record.

```
POST    /api/equipment
```

Create a new equipment record.

```
PUT     /api/equipment/:id
```

Update an existing equipment record.

```
DELETE  /api/equipment/:id
```

Delete an equipment record.

### Dashboard API

```
GET     /api/stats
```

Returns summary statistics:

* Total equipment count
* Active equipment count
* Under maintenance count
* Decommissioned equipment count

## 6. Frontend Components

Planned React component structure:

```
src/
|
├── components/
|
├── Dashboard
├── EquipmentList
├── EquipmentForm
├── SearchFilter
└── DeleteConfirmation
```

Component Responsibilities:

### Dashboard

* Display equipment summary cards
* Show equipment statistics

### EquipmentList

* Display equipment table/grid
* Provide edit and delete actions

### EquipmentForm

* Add new equipment
* Edit existing equipment
* Validate form fields

### SearchFilter

* Search equipment by name
* Filter by type and status

### DeleteConfirmation

* Confirm before removing equipment

## 7. Development Timeline

### Day 1: Project Setup and Backend Foundation

* Understand starter code
* Setup backend environment
* Configure MySQL database
* Create database schema
* Establish backend structure

### Day 2: Backend Development

* Implement CRUD APIs
* Add validation
* Implement search functionality
* Implement filtering
* Create dashboard statistics API
* Test APIs

### Day 3: Frontend Development

* Setup React components
* Configure Tailwind CSS
* Build dashboard UI
* Create equipment listing
* Create add/edit forms
* Connect frontend with backend APIs

### Day 4: UI Improvements and Testing

* Implement responsive design
* Improve user experience
* Add loading states
* Add error handling
* Perform complete application testing

### Day 5: Deployment and Documentation

* Deploy frontend using GitHub Pages
* Deploy backend using Render/Railway
* Complete SUBMISSION.md
* Final testing and bug fixes

## 8. Technical Decisions and Assumptions

### Database Decision

MySQL is selected instead of SQLite because:

* Relational data structure fits equipment management requirements
* SQL concepts are commonly used in production applications
* Easier explanation during technical discussions

### Frontend Styling Decision

Tailwind CSS is added because:

* Helps create responsive layouts quickly
* Provides reusable utility-based styling
* Improves development speed during the assessment timeline

### API Design Decision

REST API architecture is used because:

* Frontend and backend remain independent
* APIs are easy to test and maintain
* Follows common industry practices

## 9. Git Commit Strategy

The project will follow small and meaningful commits to maintain a clear development history.

Planned commits:

* Add project planning document
* Setup backend server
* Configure MySQL database connection
* Add database schema
* Implement equipment CRUD APIs
* Add API validation and error handling
* Implement search and filter APIs
* Add dashboard statistics API
* Setup React component structure
* Configure Tailwind CSS
* Create dashboard UI
* Create equipment management UI
* Connect frontend with backend APIs
* Improve responsive design
* Prepare application for deployment
* Update submission documentation
