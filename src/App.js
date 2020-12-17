import AddRecipe from "./AddRecipe";
import {Route} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./Profile";
import PremiumContent from "./PremiumContent";
import Nav from "./components/Nav";

function App() {  
  return (
    <div className="App">
        <Nav />
        <Route path="/add-recipe" component={AddRecipe} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/loggedinonly" component={PremiumContent} />

    </div>
  );
}

export default App;
