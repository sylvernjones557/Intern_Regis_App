import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistartionForm = ({ editUser, editIndex }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    editUser || {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const password = formData.password;
    const confirm = formData.confirm_password;

    if (!name) {
      alert("Please enter your full name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone || phoneDigits.length < 7) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!password || password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirm) {
      alert("Password and confirm password do not match.");
      return;
    }

   
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (editIndex !== null && editIndex !== undefined) {
      users[editIndex] = formData;
      alert("User updated successfully!");
    } else {
      users.push(formData);
      alert("User registered successfully!");
    }

    localStorage.setItem("users", JSON.stringify(users));

    navigate("/users");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-4 border rounded w-full max-w-sm">

        <h1 className="text-xl text-center font-semibold mb-4">
          {editUser ? "Edit User" : "Registration Form"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />

          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-2 rounded"
          />

          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-2 rounded"
          />

          <input
            name="confirm_password"
            type="password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border p-2 rounded"
          />

          <button className="bg-blue-600 text-white p-2 rounded">
            {editUser ? "Update" : "Submit"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default RegistartionForm;
