import React from "react";
import * as Bootstrap from "react-bootstrap";


class Menu extends React.Component {
    render() {
        return (
            <Bootstrap.Container className="menuColor">
                <Bootstrap.Row className="justify-content-md-center">
                    <Bootstrap.ButtonGroup>
                        <Bootstrap.Button href="/" variant="secondary">Home</Bootstrap.Button>
                        <Bootstrap.Button href="#/counter" variant="secondary">Contador</Bootstrap.Button>
                        <Bootstrap.Button href="#/message" variant="secondary">Mensagem</Bootstrap.Button>
                    </Bootstrap.ButtonGroup>
                </Bootstrap.Row>
            </Bootstrap.Container>
        );
    }
}


export default Menu;