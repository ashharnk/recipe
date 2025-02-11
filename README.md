# 🍽️ Recipe CRUD API

A simple **CRUD API** for managing recipes using **Node.js, Express, and MongoDB**.

---

## 🚀 Features
- Create, Read, Update, and Delete (CRUD) recipes
- Uses **MongoDB** as the database
- **Express.js** for routing
- **Mongoose** for MongoDB interactions
- **dotenv** for environment variable management

---

## 📂 Project Structure
```
📁 project-folder
│── 📄 server.js  # Main application file (single-file structure)
│── 📄 .env       # Environment variables (MongoDB URL, Port)
│── 📄 README.md  # Project documentation
```

---

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/recipe-crud-api.git
cd recipe-crud-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=mongodb://127.0.0.1:27017/recipesDB
PORT=5000
```

### 4️⃣ Start the Server
```sh
node server.js
```
Server runs on `http://localhost:5000`

---

## 📌 API Endpoints

### 📌 Fetch All Recipes
```http
GET /recipes
```
#### ✅ Response
```json
[
  {
    "_id": "65ac0c9d1a7f4c001fa5c1b2",
    "title": "Pasta",
    "ingredients": ["Noodles", "Tomato Sauce"],
    "instructions": "Boil noodles, add sauce."
  }
]
```

### 📌 Add a New Recipe
```http
POST /recipes
```
#### 🔹 Request Body (JSON)
```json
{
  "title": "Pizza",
  "ingredients": ["Dough", "Cheese", "Tomato Sauce"],
  "instructions": "Bake in oven for 15 minutes."
}
```
#### ✅ Response
```json
{
  "_id": "65ac0c9d1a7f4c001fa5c1b3",
  "title": "Pizza",
  "ingredients": ["Dough", "Cheese", "Tomato Sauce"],
  "instructions": "Bake in oven for 15 minutes."
}
```

### 📌 Update a Recipe
```http
PUT /recipes/:id
```
#### 🔹 Request Body (JSON)
```json
{
  "title": "Updated Pizza",
  "ingredients": ["Dough", "Cheese", "Tomato Sauce", "Olives"],
  "instructions": "Bake at 350°F for 20 minutes."
}
```
#### ✅ Response
```json
{
  "_id": "65ac0c9d1a7f4c001fa5c1b3",
  "title": "Updated Pizza",
  "ingredients": ["Dough", "Cheese", "Tomato Sauce", "Olives"],
  "instructions": "Bake at 350°F for 20 minutes."
}
```

### 📌 Delete a Recipe
```http
DELETE /recipes/:id
```
#### ✅ Response
```json
{
  "message": "Recipe deleted"
}
```

---

## 🛠️ Tools & Technologies Used
- **Node.js** (JavaScript Runtime)
- **Express.js** (Web Framework)
- **MongoDB** (NoSQL Database)
- **Mongoose** (MongoDB ODM)
- **dotenv** (Environment Variables)

---


