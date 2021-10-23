import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./home/Home";
import {Profile} from "./profile/Profile";


const contentStyle = {
    backgroundColor: '#fff',
    minHeight: 'calc(100vh - 185px)',
    padding: '30px',
    boxShadow: '0px 0px 8px 0px rgba(34, 60, 80, 0.2)'
}

type ContentPropsType = {
    auth: boolean
}
export const Content: React.FC<ContentPropsType> = ({auth}) => {
    return (
        <div style={contentStyle}>
            <Switch>
                <Route path={'/'} exact render={() => <Home auth={auth}/>}/>
                <Route path={'/profile'} exact render={() => <Profile auth={auth}/>}/>
            </Switch>
        </div>
    )
}