import React from 'react';
import { Switch, Route } from "react-router-dom";

import Store from "../views/Store";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Store} />
        </Switch>
    );
}

export default Routes;