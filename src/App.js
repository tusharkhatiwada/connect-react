import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Employee from "./Components/Employee";
import NewEmployee from "./Components/Employee/new";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Employee} />
      <Route exact path="/employee/new" component={NewEmployee} />
    </Router>
  );
};

export default App;
