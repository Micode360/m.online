import './css/main.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Darshboard from "./component/darshboard"



export default function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route
            to="/"
            component={Darshboard}
          />
        </Switch>
      </Router>
    </main>
  );
}

