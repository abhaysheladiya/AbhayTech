import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./Admin-Contacts.css";


export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]); 
  const [search, setSearch] = useState(""); 

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log("contact data", data);

      if (response.ok) {
        setContacts(data);
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };


  const deleteContactById = async (id) =>{
    try {
        const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            }
        });
        if(response.ok){
            getContactsData();
            toast.success("Deleted Successfully");
        }else{
            toast.error("Not deleted");
        }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getContactsData();
  }, []);

  //  Filter contacts based on username
  const filteredContacts = contacts.filter((contact) =>
    contact.username?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container admin-users">
    
      <div className="search-bar" style={{ textAlign: "right", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search by username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.9rem 3rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            width: "250px",
            fontSize: "1rem",
          }}
        />
      </div>

      {filteredContacts.length === 0 ? (
        <p>No contact data found.</p>
      ) : (
        filteredContacts.map((curContactData, index) => {
          const { _id, username, email, message } = curContactData;

          return (
            <div className="contact-card" key={index}>
              <p><strong>Username:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Message:</strong> {message}</p>
              <button className="btn delete-btn" onClick={()=> deleteContactById(_id)}>Delete</button>
            </div>
          );
        })
      )}
    </section>
  );
};
