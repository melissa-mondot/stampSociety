import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { MainNav, MainFooter } from "./layout";
import { Home, Leadership } from "./views";

function App() {
	return (
		<div className="App">
			<MainNav />
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
