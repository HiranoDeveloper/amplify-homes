import './App.css';
import { CardACollection, NavBar, MarketingFooter } from './ui-components';

function App() {
return (
<div className="App">
<NavBar width={"100vw"}/>
<CardACollection />
<MarketingFooter width={"100vw"}/>
</div>
);
}

export default App;