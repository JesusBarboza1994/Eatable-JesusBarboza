import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "../services/session-service";
import { createUser, getUser, updateUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [select, setSelect] = useState("italian");
  const [actualProduct, setActualProduct] = useState(null);
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart"))|| []);
  const [items, setItems] = useState(JSON.parse(sessionStorage.getItem("items")) || []);
  const [total, setTotal] = useState(JSON.parse(sessionStorage.getItem("total")) || 0);
  const [page, setPage] = useState(sessionStorage.getItem("page") || "home");


  useEffect(() => {
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
    return updateUser(updateData).then(setUser).catch(error=>console.log(error))
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
