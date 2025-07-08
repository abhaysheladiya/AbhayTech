import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () =>{

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput =(e)=>{
        let name =e.target.name;
        let value = e.target.value;
    
    setUser({
        ...user,
        [name] : value,
    });
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            });

            console.log("login form", response);

        const res_data = await response.json();
          if(response.ok){
            toast.success("Login Sucessfully");
            storeTokenInLS(res_data.token);
            setUser({ email: "", password: ""});
            navigate("/");

          }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
          }

        } catch (error) {
            console.log(error);
        }
        console.log(user);
    };

    return (
        <>
         <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/login.png" alt="Lets fill login form" width="500" height="500"/>
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" placeholder="Enter email" id="email" required autoComplete="off"
                                    value={user.email} onChange={handleInput} />
                                </div>
                               
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" placeholder="Enter password" id="password" required autoComplete="off" 
                                    value={user.password} onChange={handleInput}/>
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Login Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
};