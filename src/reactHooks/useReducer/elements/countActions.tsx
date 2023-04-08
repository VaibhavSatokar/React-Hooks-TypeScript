import { Action } from "./countReducer"
import { ActionKind } from "./countReducer"

export const increaseAction: Action = {
    type: ActionKind.Increase,
    payload: 5
}

export const decreaseAction: Action = {
    type: ActionKind.Decrease,
    payload: 5
}
