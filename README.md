Here's a complete `README.md` you can use for your project:

---

#  User Docs Backend (NestJS + PostgreSQL)

This is a NestJS backend application that supports user authentication, document management (upload, download, CRUD), and ingestion process simulation. It uses PostgreSQL as the database.

---

## 🚀 Tech Stack

- **Backend:** [NestJS](https://nestjs.com/)
- **Database:** PostgreSQL
- **File Upload:** Multer
- **Testing:** Jest + Supertest


---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/rohit-raj-1901/JKTech-assignment.git
cd user-docs-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD="Rohit@123#"
DB_NAME=JKTest
```

### 4. Run Postgres (locally or via Docker)

Ensure PostgreSQL is running and a database named JKTest is there

### 5. Run the app

```bash
npm start
```

App will be running at: [http://localhost:3000](http://localhost:3000)

---

## 📁 File Upload and CRUD APIs

| Method | Endpoint                  | Description                      |
|--------|---------------------------|----------------------------------|
| POST   | `/documents/upload`       | Upload a file + metadata         |
| GET    | `/documents`              | Get all documents                |
| GET    | `/documents/:id`          | Get a specific document          |
| GET    | `/documents/download/:filename` | Download a file           |
| DELETE | `/documents/:id`          | Delete a specific document       |

---

## ⚙️ Ingestion APIs

| Method | Endpoint              | Description                      |
|--------|-----------------------|----------------------------------|
| POST   | `/ingestion/trigger`  | Triggers a mocked ingestion process |
| GET    | `/ingestion/:id`      | Get ingestion status by ID       |
| GET    | `/ingestion`          | List all ingestion status        |

---

## 🔐 Authentication (JWT)

To access protected routes:
- Login and receive a JWT
- Add it in Postman under **Authorization > Bearer Token**

---

## 📮 Postman Collection

Here is a complete Postman collection for testing the APIs:  
👉 [Postman Collection Link](https://www.postman.com/rohitraj1901/workspace/my-workspace/collection/43175182-41f94baa-ffcf-4228-9514-5ed8b712cc56?action=share&creator=43175182)

---

## 📂 Upload Folder

Uploaded files will be stored in a local `uploads/` folder. Make sure this folder exists or gets auto-created.

