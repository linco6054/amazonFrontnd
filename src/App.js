import HomeScreen from "./Routes/HomeScreen";
import ProductDetails from "./Routes/ProductScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
