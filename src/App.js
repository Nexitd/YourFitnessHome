import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Articles from "./containers/Articles/Articles";
import NotFound from "./components/NotFound"
import './App.css';
import 'antd/dist/antd.css'; 

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Articles}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
