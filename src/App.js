import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainNav, MainFooter } from "./layout";
import { Home, Leadership } from "./views";
import "./scss/main.scss";

function App() {
	return (
		<div className="App">
			<MainNav id="top" />
			{/* main view */}
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/sps-leadership" component={Leadership} />
			</Switch>
			<MainFooter />
		</div>
	);
}

export default App;
