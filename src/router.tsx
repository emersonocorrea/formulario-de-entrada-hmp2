import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Label } from "./pages/Label";


export const Routes = () => {
    return(
        <BrowserRouter>
            
             <Route path="/label" Component={Label}/>
               
            
        </BrowserRouter>
    )
}