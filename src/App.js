import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./containers/Main/Main";
import Articles from "./containers/Articles/Articles";
import About from "./containers/About";
import Programms from "./containers/Programms";
// import Courses from "./containers/Courses"
import Sertificate from "./containers/Sertificate";
import NotFound from "./components/NotFound";
import "antd/dist/antd.css";
import "./App.css";
import "./assets/styles/global.css";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Main} />
				{/* <Route path="/articles" exact component={Articles}/> */}
				<Route path="/about" exact component={About} />
				<Route path="/programms" exact component={Programms} />
				{/* <Route path="/courses" exact component={Courses}/> */}
				<Route path="/sertificate" exact component={Sertificate} />
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
