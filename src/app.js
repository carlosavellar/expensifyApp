import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
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

const routes = (
    <BrowserRouter>
            <div>
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
           </div>
    </BrowserRouter>
);

const app = document.querySelector("#app");
ReactDOM.render(routes, app);

