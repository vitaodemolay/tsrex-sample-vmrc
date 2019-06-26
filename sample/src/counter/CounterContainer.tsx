import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { CounterModel } from './CounterModel';
import { CounterComponent } from './CounterComponent';

class ModelProps {
    @Inject counterModel: CounterModel;
}

@Connection(
    {
        modelStore: appModels,
        props: ModelProps
    }
)
export class CounterContainer extends React.Component<Partial<ModelProps>> {
    render() {

        return (
            <div>
                <CounterComponent model={this.props.counterModel} />
            </div>
        );
    }
}
