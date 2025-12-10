import { createContext, useReducer } from 'react';
import { logViewerReducer, initialState } from './logViewerReducer';

export const LogViewerContext = createContext();

export function LogViewerProvider({ children }) {
  const [state, dispatch] = useReducer(logViewerReducer, initialState);

  return (
    <LogViewerContext.Provider value={{ state, dispatch }}>
      {children}
    </LogViewerContext.Provider>
  );
}
