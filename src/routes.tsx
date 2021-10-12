import Home from "./pages/Home";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </Switch>
  );
};
