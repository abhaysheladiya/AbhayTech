// EditUser.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../store/auth"; 
import { useParams, Outlet } from "react-router-dom";
import {toast} from "react-toastify";
import "./Admin-Update.css";

const EditUser = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const params = useParams();
  console.log("params single user :", params);
  const { authorizationToken } = useAuth();
  

  const getSingleUserData = async()=>{
    try {
        const response = await fetch(
            `http://localhost:5000/api/admin/users/${params.id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
            }
        );

    const data =await response.json();
    console.log(`users single data: ${data}`);
    setData(data);
    } catch (error) {
        console.log(error);
        
    }
  };

  useEffect(()=>{
    getSingleUserData();
  },[]);

  const handleChange = (e) => {
   let name = e.target.name;
   let value = e.target.value;

   setData({
    ...data,
    [name]: value,
   })
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationToken,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Data updated successfully");
    } else {
      toast.error("Data not updated");
    }
  } catch (err) {
    console.error("Update error:", err);
    toast.error("An error occurred during update");
  }
};


  return (
  <div className="edit-user-container">
    <h2 className="form-title">Edit User</h2>
    <form onSubmit={handleSubmit} className="edit-user-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={data.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Phone:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={data.phone}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="update-btn">Update</button>
    </form>
    <Outlet />
  </div>
);
}

export default EditUser;
