# Blog Post App
### Created by Nicole Holt

A full-stack blog application built with React and Express, using a MongoDB database. Users can create, read, edit , and delete posts.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/nholt908/WebProgramming.git
cd WebProgramming
git sparse-checkout set "Day 20"
cd "Day 20"
```

### 2. Install Dependencies
npm install
mongod

### 3. Run the App
Backend (Express server)
node server.js
Runs at: http://localhost:5000

Frontend (React)
cd ./blog-frontend
npm install
npm start
Runs at: http://localhost:3000

## Dependencies
### Backend:
express, mongoose, cors
### Frontend:
react, axios

## API Endpoints
Method | Endpoint | Description
GET | /posts | Fetch all posts
POST | /posts | Create a new post
PUT | /posts/:id | Update a specific post
DELETE | /posts/:id | Delete a specific post