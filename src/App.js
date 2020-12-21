import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/componentsnav/home";
import Posts from "./components/componentsnav/posts";
import MainContent from "./components/mainContent/MainContent";
import NotFound from "./components/componentsnav/notFound";
import MovieNav from "./components/componentsnav/navmovies/MovieNav";
import FormMain from "./components/form/FormMain";
class App extends Component {
  render() {
    return (
      <div className="App  ">
        <MovieNav />
        <div className=" py-3">
          <Switch>
            <Route path="/form/:id" component={FormMain} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/movies" component={MainContent} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" exact component={Home} />
            <Redirect to="/not-found" />
            {/* <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/users" component={Users} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" exact component={Home} />
            <Redirect to="/not-found" /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
