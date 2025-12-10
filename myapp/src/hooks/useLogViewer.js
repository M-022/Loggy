import { useContext } from 'react';
import { LogViewerContext } from '../context/LogViewerContext';

export function useLogViewer() {
  const context = useContext(LogViewerContext);
  if (!context) {
    throw new Error('useLogViewer must be used within LogViewerProvider');
  }
  return context;
}
