import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Article from "../components/Article";
import Articles from "../components/Articles";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/article/:title'>
            <Article />
          </Route>
          <Route path='/authors/:name'>
            <Author />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/sign-up'>
            <About />
          </Route>
          <Route path='/articles'>
            <About />
          </Route>
          <Route path='/categories'>
            <About />
          </Route>
          <Route path='/profile'>
            <About />
          </Route> 
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
