import React from 'react';
import { MsgModel } from './MsgModel';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { MsgComponent } from './MsgComponent';

class ModelProps {
    @Inject msgModel: MsgModel;
}

@Connection(
    {
        modelStore: appModels,
        props: ModelProps
    }
)
export class MsgContainer extends React.Component<Partial<ModelProps>> {
    render() {
        
        return <div>
            <MsgComponent model={this.props.msgModel}/>
        </div>
    }
}
