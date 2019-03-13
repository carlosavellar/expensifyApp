import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import "./styles/styles.scss";
const DashBoardComponent = () => (
    <div>
        Dashboard
    </div>
);

const AddExpensesComponent = () => (
    <div>
        Create page$$$$$$$
    </div>
);

const EditExpenses = () => (

    <div>
        Edit expenses____
    </div>
);

const HelpPage = () => (
    <div>
        Help page *******
    </div>
)
const NotFoundPage = () => (
    <div>
        <h1>
            404 - Not found
            <Link to="/">Go home</Link>
        </h1>
    </div>
);
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

const routes = (
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

const app = document.querySelector("#app");
ReactDOM.render(routes, app);

