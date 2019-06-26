import { Switch, Route, Redirect } from "react-router";
import React from "react";
import { CounterContainer } from "../counter/CounterContainer";
import { MsgContainer } from "../msg/MsgContainer";
import { HashRouter } from "react-router-dom";


class Props {
    location?: any;
}

export class Routes extends React.Component<Props>{
    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/counter" component={CounterContainer} />
                    <Route exact={true} path="/message" component={MsgContainer} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        );
    }
}