import {memo, VFC} from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { Home } from '../components/pages/Home';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

export const Router: VFC = memo(() => {
    return (
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        {/* <Route path="/">
            <Home />
        </Route>
        <Route path="/">
            <Setting />
        </Route>
        <Route path="/">
            <UserManagement />
        </Route> */}
    </Switch>
    );
});