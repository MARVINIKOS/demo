# Backend Signup Test

This is a simple Node.js backend implementing a `/signup` route for a user profile system.

**Key Features:**
- ✅ `POST /signup` route in `AuthController.ts`
- ✅ Input validation: name, email, password, termsAccepted
- ✅ Duplicate email check
- ✅ Secure password hashing (bcryptjs)
- ✅ Sequelize ORM with SQLite (file DB, easy to run anywhere)
- ✅ Clean API response with no plaintext password

**How to run:**
```bash
npm install
npm run dev



------------------------------------------------
📬 How to Test
Send a POST request to:
http://localhost:5000/api/auth/signup

Example JSON body:

json
Copy
Edit
{
  "name": "Your Name",
  "email": "you@example.com",
  "password": "yourpassword",
  "termsAccepted": true
}
You can use Thunder Client, Postman, or curl.
--------------------------------------------------
📂 Project Structure


backend/src/controllers/AuthController.ts — signup logic

backend/src/routes/authRoutes.ts — route definitions

backend/src/config/database.ts — SQLite config

models/User.ts — Sequelize User model

-------------------------------------------------
📝 Notes
Uses SQLite for simplicity (no Postgres server needed).

Uses bcryptjs for cross-platform hashing.

Easily portable to Postgres if needed — just switch the database.ts config.


------------------------------------------------------

🗣️ Explanation

I built a POST `/signup` endpoint in `AuthController.ts`.  
It takes `name`, `email`, `password`, and `termsAccepted`.  
It checks if all fields are valid, checks for duplicate email, hashes the password with `bcryptjs` for security, and saves the user using Sequelize.  
I switched to SQLite so it runs without needing a Postgres server — the logic is exactly the same, just the dialect is different.  
In the response, I return only safe user info — never the password.  
You can test it with Thunder Client or curl — it works and the table is created automatically
