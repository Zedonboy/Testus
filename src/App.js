import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Finish from "./pages/Finish"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/questions">
          <Question />
        </Route>
        <Route path="/finish">
          <Finish />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
