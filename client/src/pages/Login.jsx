import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

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

          if(response.ok){
            alert("Login Sucessfully");
            const res_data = await response.json();
            storeTokenInLS(res_data.token);

            setUser({ email: "", password: ""});
            navigate("/");

          }else{
            alert("Invalid credentials");
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
                                    <label htmlFor="email">email</label>
                                    <input type="email" name="email" placeholder="enter email" id="email" required autoComplete="off"
                                    value={user.email} onChange={handleInput} />
                                </div>
                               
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input type="password" name="password" placeholder="enter password" id="password" required autoComplete="off" 
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