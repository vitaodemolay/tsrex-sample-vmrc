import React from 'react';
import { MsgModel } from './MsgModel';
import { string } from 'prop-types';

export class MsgComponent extends React.Component<{ model: MsgModel }> {
    

    state = {
        msgEntrada: ''
    }

    render() {
        const { model } = this.props;

        return <div>
            <p>Conteúdo de Mensagens</p>
            <input onChange={this.handleInputChange} value={this.state.msgEntrada}></input>
            <button onClick={this.handleAdd}>Adicionar</button>
            {model.messages.map(item => <div>{item}</div>)}
        </div>
    }

    handleAdd = () => {
        this.props.model.addMessage(this.state.msgEntrada);
        this.setState({
            msgEntrada: ''
        });
    }

    handleInputChange = (event) =>{
        this.setState({
            msgEntrada: event.target.value
        });
    }
}