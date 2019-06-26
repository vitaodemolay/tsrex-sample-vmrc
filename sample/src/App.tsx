import * as React from 'react';
import { Provider } from 'exredux';
import { appModels } from './AppModels';
import { Container } from 'react-bootstrap'
import TopPage from './toppage/toppage';
import { Routes } from './routes/RoutesContainer';
import Menu from './menu/MenuComponent';

class App extends React.Component {
  render() {
    return (
      <Provider modelStore={appModels}>
        <Container>
          <TopPage />
          <Menu />
          <Routes />
        </Container>
      </Provider>
    );
  }
}

export default App;
