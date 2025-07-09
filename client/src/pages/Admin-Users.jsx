import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const Adminusers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h2>Admin User Data</h2>
        </div>
        <div className="container admin-user">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index)=>{
                return(
                    <tr key={index}>
                        <td>{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
