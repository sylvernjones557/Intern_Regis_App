import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  const deleteUser = (index) => {
    const newList = users.filter((_, i) => i !== index);
    setUsers(newList);
    localStorage.setItem("users", JSON.stringify(newList));

    alert("User deleted successfully!");
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-4 border rounded">

        <h2 className="text-center font-semibold text-xl mb-4">All Users</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-max">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phone}</td>

                  <td className="p-2 flex gap-2 justify-center">

                    <button
                      onClick={() => navigate(`/edit/${index}`)}
                      className="bg-yellow-500 text-white px-2 py-1 text-xs rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteUser(index)}
                      className="bg-red-600 text-white px-2 py-1 text-xs rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default UserTable;
