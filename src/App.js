import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://alemdocodigo.herokuapp.com/list_posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log("deu errado dnv");
      });
  }, []);

  return (
    <div className="app">
      <div className="cards">
        <div className="card">
          <div className="card-body">
            <h1>Teste prova</h1>
            <div className="line"></div>
            <h2>buildo</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
