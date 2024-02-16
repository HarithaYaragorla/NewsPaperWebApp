import { Route, Switch } from "react-router-dom";

import ArticlesList from "./components/ArticlesList";
import ArticleItem from "./components/ArticleItem";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ArticlesList} />
      <Route path="/article/:id" component={ArticleItem} />
    </Switch>
  );
}

export default App;
