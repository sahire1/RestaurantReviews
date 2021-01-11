import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/NavBar.component';
import AllRestaurant from './components/AllRestaurant.component';
import AddRestaurant from './components/AddRestaurant.component';
import AddReview from './components/AddReview.component';


function App() {
  return (
    <Router>
    <NavBar/>
    <Route path="/" exact component={AllRestaurant} />
    <Route path="/rest" exact component={AddRestaurant} />
    <Route path="/add/:id" exact component={AddReview} />
    </Router>
  );
}

export default App;
