import { Model, Action } from "exredux";

@Model
export class CounterModel {
    counter: number = 0;

    @Action
    addMoreOne(){
        this.counter++;
    }
}