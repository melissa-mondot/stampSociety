import { MainNav, MainFooter } from "./layout";
import {
	Hero,
	EasterSeals,
	Annoucements,
	Newsletter,
	MembershipInfo,
  Events,
  History
} from "./sections";

function App() {
	return (
		<div className="App">
			<MainNav />
			<Hero />
			<Annoucements />
			<EasterSeals />
			<Newsletter />
			<MembershipInfo />
			<Events />
			<History />
			<MainFooter />
		</div>
	);
}

export default App;
