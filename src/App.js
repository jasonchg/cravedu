import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Context Provider
import { CourseProvider } from "./context/CourseState";

function App() {
  return (
    <CourseProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/course/:id" component={Course} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </CourseProvider>
  );
}

export default App;
