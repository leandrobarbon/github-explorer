import React from "react";
import { Switch, Route} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repositorys from "../pages/Repository";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/respositories/:repository+" exact component={Repositorys} />
    </Switch>
);

export default Routes;