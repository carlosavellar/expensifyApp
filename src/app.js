import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/styles.scss";
const DashBoardComponent = () =>(
    <div>
        This is the add component
    </div>
);

 
const AddExpensesComponent = () =>(
    <div>
        Caralho é nos
    </div>
);

const EditExpenses = () => (

    <div>
        Edit expenses
    </div>
);

const HelpPage = () => (
    <div>
        Help page
    </div>
)
const NotFoundPage = () => (
    <div>
        <h1>
           404 
        </h1>
    </div>
);

const routes = (
    <BrowserRouter>
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
    </BrowserRouter>
);

const app = document.querySelector("#app");
ReactDOM.render(routes, app);

