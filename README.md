# 👕 Full Stack Clothing Store App

A full-stack web application that simulates a simple clothing store interface, built with **Angular 17** (frontend) and **Express.js** (backend). This project features product display, pagination, and full CRUD operations using a JSON file as the data source.

---

## 🧩 Tech Stack

- **Frontend:** Angular 17, PrimeNG
- **Backend:** Express.js, Node.js
- **Database:** File-based (`db.json`)
- **API Layer:** RESTful routes with pagination support

---

## 🚀 Features

- 🛒 Browse and display products with ratings
- 🔄 Create, Read, Update, Delete items
- 🎨 Responsive UI using PrimeNG components
- 📦 Pagination support with `p-paginator`
- ⚙️ Seamless integration between Angular and Express backend
- 🌐 CORS configuration for smooth local development

---

## 📦 Installation

### Backend (Express.js)
1. Navigate to the `server/` folder (or root if not separated)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   Server runs on `http://localhost:3000`

---

### Frontend (Angular 17)
1. Navigate to the `client/` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Angular app:
   ```bash
   ng serve
   ```
   App runs on `http://localhost:4200`

---

## 🌐 API Endpoints

| Method | Route               | Description              |
|--------|---------------------|--------------------------|
| `GET`  | `/clothes`          | Fetch products (with `?page=&perPage=`) |
| `POST` | `/clothes`          | Add a new product        |
| `PUT`  | `/clothes/:id`      | Update product by ID     |
| `DELETE` | `/clothes/:id`    | Delete product by ID     |

---

## 📁 Project Structure

```plaintext
Full-Stack-Clothing-Store/
├── client/           # Angular 17 frontend
├── server/           # Express backend
│   ├── index.js      # Main server file
│   └── db.json       # Mock database
├── README.md
```

---

## ✨ Credits

Built by Ashil  
Starter project for full-stack development learners and Angular/Express integration practice.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

```

