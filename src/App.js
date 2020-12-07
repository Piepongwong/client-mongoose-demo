import {useState, useEffect} from "react";
import axios from "axios";
import AddRecipe from "./AddRecipe";
import {Route} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [recipes, setRecipes] = useState(false);

  useEffect(()=> {
    // axios.get("http://localhost:3000/recipes")
    //   .then((response)=> {
    //     setRecipes(response.data)
    //   })
    //   .catch((err)=> {

    //   })

      // axios.post("http://localhost:3000/recipes", {title: "lalala"})
      // .then((response)=> {
      //   debugger
      //   setRecipes(response.data)
      // })
      // .catch((err)=> {
      //   debugger
      // })
  },[])
  
  return (
    <div className="App">

        <Route path="/add-recipe" component={AddRecipe} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />

        {/* {recipes && recipes.map((recipe)=> {
          return <h1>{recipe.title}</h1>
        })} */}
    </div>
  );
}

export default App;
