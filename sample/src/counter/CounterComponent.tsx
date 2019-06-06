import React from 'react';
import { string } from 'prop-types';
import { CounterModel } from './CounterModel';

export class CounterComponent extends React.Component<{ model: CounterModel }> {
    render() {
        const { model } = this.props;

        return <div>
            <p>Contador de Cliques</p>
            <p>- {model.counter} -</p>
            <button onClick={this.handlerSumMoreOne}>Clique aqui!</button>
        </div>
    }

    handlerSumMoreOne = () =>{
        this.props.model.addMoreOne();
    }
}