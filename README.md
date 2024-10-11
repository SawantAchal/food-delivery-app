# Food Delivery Application

## Overview

This project is a food delivery application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes an admin panel for managing food items and a frontend for users to place orders. 
**Live Link** - https://food-delivery-app-frontend-xekx.onrender.com/

## Features

- **Admin Panel**: Manage food items, view orders, and handle user accounts.
- **User Interface**: Browse food items, place orders, and view order history.
- **Authentication**: User login and registration.
- **Responsive Design**: Mobile and desktop-friendly interfaces.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios (for API requests), JWT (for authentication)

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB

### Backend Setup

1. Clone the repository: git clone https://github.com/SawantAchal/food-delivery-app.git

2. Navigate to the backend directory:cd backend
3. Install dependencies:npm install
4. Create a .env file in the backend directory with the following variables:
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   PORT=4000
5. Start the server:npm start

### Frontend Setup

1. Navigate to the frontend directory:cd frontend
2. Install dependencies: npm install
3. Start the development server: npm start

## Usage

1. Ensure the backend server is running.
2. Open the frontend in your browser at http://localhost:5173/
3. Use the admin panel to manage food items and view orders.
4. As a user, browse food items, place orders, and view order history.

## API Endpoints

### Authentication

- **POST** /api/user/register - Register a new user
- **POST** /api/user/login - Log in an existing user

### Food Items

- **GET** /api/food/list - Get all food items
- **POST** /api/food/add - Add a new food item
- **DELETE** /api/food/remove - Delete a food item

### Orders

- **GET** /api/order/getorderofuser - Get all orders
- **POST** /api/order/userorder - Place a new order

## Acknowledgements

- Inspiration from various food delivery applications
- Libraries and frameworks used in this project
