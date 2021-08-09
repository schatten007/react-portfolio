//Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import {Route, Switch, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
 

function App() {
  
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <AboutUs/>
          </Route>
          <Route exact path="/work">
            <OurWork/>
          </Route>
          <Route path="/work/:id">
            <MovieDetail/>
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
