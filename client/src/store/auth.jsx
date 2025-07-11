/*** Context API ***/
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken); // Keep state in sync
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;
  console.log("isLoggedIN", isLoggedIn);

  // Logout logic
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT aythentication -- to get currentlly login data
  const userAuthentication = async ()=> {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if(response.ok){
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      }else{
        console.log("Error fetching user data");
         setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };


  //to fetch services data from the database
  const getServices = async () =>{
    try {
      const response = await fetch("http://localhost:5000/api/data/service",{
        method: "GET",
      });

      if(response.ok){
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
        
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
      
    }
  }

  useEffect(()=>{
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading,}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return AuthContextValue;
};
