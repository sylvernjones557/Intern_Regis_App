# React Registration Form App (Beginner Project)

This is a simple React project where users can register, view all registered users, edit their details, and delete a user. Everything is stored in the browser using LocalStorage, so no backend is needed.

I built this project to practice basic CRUD operations (Create, Read, Update, Delete) using React and React Router.

---

## 🚀 Features

### ✓ Add User  
Users can fill a registration form with name, email, phone, password and confirm password.

### ✓ Edit User  
Clicking the **Edit** button opens the same form with all fields already filled.  
After updating the details, the user gets updated in LocalStorage.

### ✓ Delete User  
Clicking **Delete** removes the user from the table and LocalStorage.

### ✓ View All Users  
All registered users are shown in a clean table with Edit and Delete buttons.

### ✓ Data Saved in LocalStorage  
This means data will stay even after refreshing the page.

---

## 🛠️ Technologies Used
- React
- React Router
- Tailwind CSS
- LocalStorage (for saving data)

---

## 📂 Pages Overview

### `/` – Registration Form  
Used for:
- Adding a new user  
- Editing an existing user (when opened through `/edit/:index`)  

### `/users` – User Table  
Shows all registered users with Edit and Delete options.

### `/edit/:index`  
Used to load a specific user's data into the form for editing.

---

## 🧠 How the Edit Feature Works (Simple Explanation)

- When you click **Edit**, the app goes to `/edit/0`, `/edit/1`, etc.
- The number (`index`) tells the app which user to load.
- The form gets pre-filled with that user’s details.
- When you click update, the same index is updated in LocalStorage.

---

## 🧹 How the Delete Feature Works

- When Delete is clicked, that user is removed from the array using `filter()`.
- The updated list is saved back to LocalStorage.
- The UI updates immediately.

---

## 📦 How to Run the Project

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
