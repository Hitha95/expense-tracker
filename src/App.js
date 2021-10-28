import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddExpense from "./pages/add-expense/AddExpense";
import { useSelector } from "react-redux";

const App = () => {
  const expenses = useSelector((state) => state.expenses);
  console.log(expenses);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" exact component={AddExpense} />
      </Switch>

      <div>footer</div>
    </BrowserRouter>
  );
};

export default App;
