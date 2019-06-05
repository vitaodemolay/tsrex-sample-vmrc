import * as React from 'react';
import { Provider } from 'exredux';
import { appModels } from './AppModels';
import { MsgContainer } from './msg/MsgContainer';

class App extends React.Component {
  render() {
    return (
      <Provider modelStore={appModels}>
        <div>
          <h1>Teste de React com TSREx</h1>
          <p>Testing TSREx</p>
          <p>VMRC...</p>
          <hr />
          <MsgContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
