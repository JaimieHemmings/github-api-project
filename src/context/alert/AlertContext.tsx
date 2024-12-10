import React, { createContext, useReducer, ReactNode } from 'react';
import AlertReducer from './AlertReducer';

type Alert = {
  msg: string;
  type: string;
} | null;

type AlertContextType = {
  alert: Alert;
  setAlert: (msg: string, type: string) => void;
};

type AlertProviderProps = {
  children: ReactNode;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const initialState: Alert = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 5000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;