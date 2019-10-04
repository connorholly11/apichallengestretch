import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [project, setProject] = useState([]);

  // axios.get("http://localhost:3000/project").then(res => {
  //   console.log(res);
  //   console.log(res.data);
  //   setProject(res.data);
  // });

  useEffect(() => {
    axios.get("http://localhost:3000/project").then(res => {
      console.log(res);
      console.log(res.data);
      setProject(res.data);
    });
  }, []);

  return (
    <div>
      <div className="App">
        <h1>HELLO REACT APP</h1>
      </div>
      <div>
        {project.map(projects => (
          <div>
            <h1>{projects.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
