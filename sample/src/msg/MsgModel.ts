import { Model, Action } from "exredux";

@Model
export class MsgModel {
    messages: string[] = [];

    @Action
    addMessage(conteudo: string) {
        this.messages.push(conteudo);
    }
}