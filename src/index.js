import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import User from "./components/User";
import "./styles.css";
// Contexts
import { UserContext } from "./contexts/UserContext";

const useStateWithLocalStorage = key => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || { firstName: "Fred", lastName: "Rogers" }
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

const useStateWithSessionStorage = key => {
  const [value, setValue] = useState(
    JSON.parse(sessionStorage.getItem(key)) || { firstName: "Fred", lastName: "Rogers" }
  );
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

function App() {

  // Three different ways to store the state. Pick one!

  //const [user, setUser] = useState({}); // <-- will not persist data if user refreshes
  //const [user, setUser] = useStateWithLocalStorage("user");
  const [user, setUser] = useStateWithSessionStorage("user");

  // Uncomment the useEffect if not using local storage or session storage
  /*
  useEffect(() => {
    setUser({ firstName: "Fred", lastName: "Rogers" });
  }, []);
  */

  const changeUser = newUser => {
    setUser(newUser);
  };

  //console.log(UserContext);
  return (
    <div className="container">
      <UserContext.Provider value={{ user, changeUser }}>
        <User />
      </UserContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
