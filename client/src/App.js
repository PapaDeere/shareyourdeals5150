import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Places from "./pages/Places";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NewEntry from "./pages/NewEntry";
import Nav from "./components/Nav";
import Header from "./components/Header";


const App = () => (
  <Router>
    <div>
      <Header />
        <Nav />
        <Switch>     
          <Route exact path="/" component={Places} />        
          <Route exact path="/places" component={Places} />
          <Route exact path="/places/:id" component={Detail} />
          <Route exact path="/newentry" component={NewEntry} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
);

export default App;
