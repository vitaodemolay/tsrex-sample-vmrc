import * as React from 'react';
import { Provider } from 'exredux';
import { appModels } from './AppModels';
import { MsgContainer } from './msg/MsgContainer';
import { CounterContainer } from './counter/CounterContainer';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import TopPage from './toppage/toppage';

class App extends React.Component {
  render() {
    return (
      <Provider modelStore={appModels}>
        <Container>
          <TopPage />
          <CounterContainer />
          <hr />
          <MsgContainer />
        </Container>
      </Provider>
    );
  }
}

export default App;
