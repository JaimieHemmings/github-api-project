type Alert = {
  msg: string;
  type: string;
} | null;

type AlertAction = 
  | { type: 'SET_ALERT'; payload: Alert }
  | { type: 'REMOVE_ALERT' };

type AlertState = Alert;

const alertReducer = (state: AlertState, action: AlertAction): AlertState => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
}

export default alertReducer;