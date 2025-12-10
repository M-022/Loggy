import { useMemo } from 'react';
import { useLogViewer } from './useLogViewer';
import { applyFilters } from '../utils/logFilters';

export function useFilteredLogs() {
  const { state } = useLogViewer();

  return useMemo(() => {
    return applyFilters(state.logs, state.filters);
  }, [state.logs, state.filters]);
}
