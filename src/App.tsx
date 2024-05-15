import React from "react";
import "./App.css";

function App() {
  let sessionStorageItem: string | null =
    sessionStorage.getItem("isUserLogged");

  const set = () => {
    sessionStorage.setItem("isUserLogged", "TEST");
  };
  const clear = () => {
    sessionStorage.removeItem("isUserLogged");
  };
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org">
          EXTERNAL LINK
        </a>
        <div>
          SESSION STORAGE&nbsp;
          {sessionStorageItem ? `LOADED: ${sessionStorageItem}` : "NOT LOGGED"}
        </div>
        <button onClick={set}>SET SESSION STORE</button>
        <button onClick={clear}>CLEAR SESSION STORE</button>
        <button onClick={reload}>REFRESH</button>
      </header>
    </div>
  );
}

export default App;
