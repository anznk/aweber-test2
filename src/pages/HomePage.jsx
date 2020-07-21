import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "../styles/style.scss";
import Home from "../sections/homePage/Home";
// import About from "../sections/homePage/About";
// import Test from "../sections/homePage/Test";
import BookLanding from "./BookLandingPage";

function HomePage() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/test" component={Test} /> */}
          <Route exact path="/book" component={BookLanding} />
        </Switch>
      </Router>
    </>
  );
}

export default HomePage;
