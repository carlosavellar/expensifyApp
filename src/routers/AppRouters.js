import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import DashBoardComponent from "../Components/DashBoardComponent";
import AddExpensesComponent from "../Components/AddExpensesComponent";
import EditExpenses from "../Components/EditExpesnes";
import HelpPage from "../Components/HelpPage";
import NotFoundPage from "../Components/NotFoundPage";

const Header = () => (
    <header>
        <h1>
            <strong>
                Expensify
            </strong>
        </h1>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="is-active" to="/" exact={true}>
                        Dashboard
                    </NavLink>

                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/create">Create</NavLink>

                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/Edit">Edit</NavLink>

                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/help">Help</NavLink>

                </li>
            </ul>
        </nav>
    </header>
);

const AppRouters = () => {
    return(
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    path="/"
                    component={DashBoardComponent}
                    exact={true}
                />
                <Route
                    path="/create"
                    component={AddExpensesComponent}
                />
                <Route
                    path="/edit"
                    component={EditExpenses}
                />
                <Route
                    path="/help"
                    component={HelpPage}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </BrowserRouter>
    );
}

export default AppRouters;