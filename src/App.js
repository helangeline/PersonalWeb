import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./styles/tailwind-pre-build.css";
import "./styles/styles.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Routes>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Routes>
  );
}
