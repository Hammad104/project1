import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Services from "./component/Services";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </>
  );
}

export default App;
