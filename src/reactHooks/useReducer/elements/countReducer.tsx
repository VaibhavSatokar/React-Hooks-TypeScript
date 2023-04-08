

export type State = {
    value: number;
}
  
export const initialCountState : State = {
    value: 100
}

export enum ActionKind {
    Increase = 'INCREASE',
    Decrease = 'DECREASE',
}
  
 export type Action = {
    type: ActionKind,
    payload: number
}


export default function CountReducer(state: State, action: Action) {
    const {type, payload} = action;
    switch (type) {
    case ActionKind.Increase:
      return {
        ...state,
        value : state.value + action.payload,
      };
    case ActionKind.Decrease :
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}
