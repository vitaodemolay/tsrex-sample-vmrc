import { Jumbotron, Container } from "react-bootstrap";
import React from "react";


class TopPage extends React.Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Teste de React com TSREx</h1>
                    <p>Testing TSREx</p>
                    <p>VMRC...</p>
                </Container>
            </Jumbotron>
        )
    }
}

export default TopPage;