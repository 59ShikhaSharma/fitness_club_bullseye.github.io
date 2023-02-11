import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Member from "./Pages/Member/Member";


function App() {
  
  const [name, setName] = useState();
  
  return (
    <BrowserRouter>
    <h1> Fitness Club Registration </h1>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              
            />
            
          </Route>

          <Route path="/member" exact>
            <Member
              name={name}
              setName={setName}
              
            />
            
          </Route>


          
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}
export default App;
