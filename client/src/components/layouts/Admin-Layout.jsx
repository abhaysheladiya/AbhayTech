import { Navigate, NavLink, Outlet } from "react-router-dom";
import { HiUsers } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { useAuth } from "../../store/auth";


export const AdminLayout =()=>{
    const { user } = useAuth();
    console.log("admin layout", user);

   if (!user) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" replace />;
  }


    return(
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/users"><HiUsers /> Users</NavLink>
                        </li>
                        <li> 
                            <NavLink to="/admin/contacts"><IoIosContacts /> Contacts</NavLink>
                        </li>
                        <li>
                             <NavLink to="/service"><MdMiscellaneousServices /> Services</NavLink>
                        </li>
                        <li> 
                        <NavLink to="/"><IoHomeSharp /> Home</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
        </>
    )
};