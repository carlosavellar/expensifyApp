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
        This is the add component
    </div>
);

const routes = (
    <BrowserRouter>
   
            <Route
                path="/"
                component={DashBoardComponent}
                excat={true}
                />
     

    </BrowserRouter>
);



const app = document.querySelector("#app");
ReactDOM.render(routes, app);

