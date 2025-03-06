# Inventory Management API

This project is an **Inventory Management API** built using **Flask** and **MongoDB**. It provides endpoints to manage inventory items, including adding, updating, retrieving, and deleting items.

## 🚀 Features

- Add new inventory items 📝
- Retrieve all items 📋
- Get item details by ID 🔍
- Update item details ✏️
- Delete an item 🗑️
- User authentication (Registration & Login) 🔐

## 🛠️ Tech Stack

- **Backend:** Flask (Python)
- **Database:** MongoDB
- **API Client:** Postman (for testing)

## 📌 Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/inventory-management-api.git
cd inventory-management-api
```

### 2️⃣ Install Dependencies

```sh
pip install -r requirements.txt
```

### 3️⃣ Start MongoDB (Ensure MongoDB is running)

```sh
mongod
```

### 4️⃣ Run the Flask Server

```sh
python app.py
```

### 5️⃣ Test APIs using Postman

- **Base URL:** `http://localhost:5000`
- **Endpoints:**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login and get a token
  - `GET /items` - Get all inventory items
  - `POST /items` - Add a new item
  - `GET /items/<id>` - Get item by ID
  - `PUT /items/<id>` - Update item details
  - `DELETE /items/<id>` - Delete an item

## 🧪 Example API Request (Adding an Item)

```json
POST /items
{
  "name": "Laptop",
  "category": "Electronics",
  "price": 75000,
  "stock": 10
}
```
