/*** Context API ***/
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

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
          Authorization: `Bearer ${token}`,
        },
      });

      if(response.ok){
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  useEffect(()=>{
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
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
