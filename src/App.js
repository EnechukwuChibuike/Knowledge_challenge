import Header from "./components/header";
import Homepage from "./components/homepage";
import Side from "./components/side";
import Game from "./components/game";
import Footer from "./components/footer";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Header />
         <Side />
         <Homepage />
         <Game />
         <Footer />
      </div>
   );
}

export default App;
