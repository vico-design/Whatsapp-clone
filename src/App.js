import "./App.css";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Chat from "./chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import { useStateValue } from "./StateProvider";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route exact path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
