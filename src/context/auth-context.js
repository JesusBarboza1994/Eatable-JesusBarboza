import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "../services/session-service";
import { createUser, getUser, updateUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [select, setSelect] = useState("italian");
  const [actualProduct, setActualProduct] = useState(null);
  const [cart, setCart] = useState(sessionStorage.getItem("cart") || []);
  const [items, setItems] = useState(sessionStorage.getItem("items") || []);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState("home");


  useEffect(() => {
    console.log("holaa")
    getUser()
      .then(setUser)
      .catch((error) => console.log(error));
  }, []);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      // navigate("/categories");
    });
  }

  function handleUpdateUser(updateData){
    return updateUser(updateData).then(console.log)
  }

  function handleSignup(userData) {
    return createUser(userData).then((user) => {
      setUser(user);
      // navigate("/categories");
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      // navigate("/");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        select,
        actualProduct,
        cart, 
        items,
        total,
        page,
        setPage,
        setUser,
        setTotal,
        setItems,
        setCart,
        setActualProduct,
        setSelect,
        login: handleLogin,
        signup: handleSignup,
        logout: handleLogout,
        upDateUser: handleUpdateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
