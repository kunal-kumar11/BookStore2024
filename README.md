BookStore Project
Overview
The BookStore project is a full-stack web application that allows users to browse, search, and purchase books. The project includes an admin backend for managing books, and features such as user authentication, cart operations, and order history.

Features
User authentication (login, logout, and register)
Admin functionality to add, update, and delete books
Browse and search for books
Add and remove books from the cart
View and manage the cart
Place orders and view order history
Technologies Used
Frontend:

React
Tailwind CSS
Backend:

Node.js
Express.js
Mongoose (MongoDB)
Socket.io
Database:

MongoDB Cloud
Deployment:

Netlify (Frontend)
Render  (Backend)
Getting Started

bash
Copy code
git clone https://github.com/your-username/bookstore.git
cd bookstore
Install backend dependencies:

bash
Copy code
cd backend
npm install
Set up environment variables:
Create a .env file in the backend directory and add the following:

env
Copy code
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Start the backend server:

bash
Copy code
npm start
Install frontend dependencies:

bash
Copy code
cd ../frontend
npm install
Start the frontend server:

bash
Copy code
npm start
Running the Application
Open your browser and navigate to http://localhost:3000 to access the frontend.
The backend server will be running on http://localhost:5000.
Project Structure
plaintext
Copy code
bookstore/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── config.js
│   ├── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.css
│   ├── ...
├── README.md
Backend
controllers/: Contains the logic for handling requests and responses.
models/: Defines the Mongoose schemas and models.
routes/: Defines the API endpoints and routes.
app.js: Entry point for the backend application.
config.js: Configuration file for setting up the environment variables and database connection.
Frontend
src/: Contains the React components and application logic.
public/: Static assets and public files.
index.css: Tailwind CSS configuration and custom styles.
API Endpoints
User Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Login a user
POST /api/auth/logout: Logout a user
Book Management (Admin)
POST /api/books: Add a new book
PUT /api/books/
: Update a book
DELETE /api/books/
: Delete a book
Cart Operations
POST /api/cart: Add a book to the cart
DELETE /api/cart/
: Remove a book from the cart
GET /api/cart: Get the cart details
Order History
GET /api/orders: Fetch the order history
Deployment
Frontend
The frontend is deployed on Netlify. Configure your Netlify deployment settings to build and deploy the frontend directory.
Backend
The backend can be deployed on any platform that supports Node.js (e.g., Heroku, AWS, DigitalOcean). Ensure that your MongoDB Cloud URI and other environment variables are set correctly on your deployment platform.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed are reserved

