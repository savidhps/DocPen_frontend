# 🩺 DocPen - Doctor Prescription Management System

DocPen is a full-stack web application that allows doctors to create, manage, and print digital prescriptions.

---

## 📁 Project Structure

This project contains two main folders:

- `/frontend` – Built with React
- `/backend` – Built with Node.js, Express, MongoDB

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas

---

## 📝 Steps to Run the Project Locally

Follow the instructions below to set up the project on your local machine.

---

### 🔢 Step 1: Clone the Repositories

```bash
# Clone the frontend repository
git clone <your-frontend-github-link>

# Clone the backend repository
git clone <your-backend-github-link>
🔢 Step 2: Configure the Frontend
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Locate the file where the backend URL is defined (usually serverUrl.js or similar).

Replace the existing server URL with:

js
Copy
Edit
const serverUrl = 'http://localhost:4000';
🔢 Step 3: Setup the Backend
Navigate to the backend directory:

bash
Copy
Edit
cd backend
Create a .env file in the root of the backend:

bash
Copy
Edit
touch .env
Add the following content to the .env file:

env
Copy
Edit
DATABASE=
Install backend dependencies:

bash
Copy
Edit
npm install
Start the backend server using nodemon:

bash
Copy
Edit
nodemon index.js
💡 Tip: If nodemon is not installed globally, install it using:

bash
Copy
Edit
npm install -g nodemon
🔢 Step 4: Start the Frontend
Navigate to the frontend folder:

bash
Copy
Edit
cd ../frontend
Install frontend dependencies:

bash
Copy
Edit
npm install
Start the frontend development server:

bash
Copy
Edit
npm run dev
