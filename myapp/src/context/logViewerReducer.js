import { SAMPLE_LOGS } from '../data/sampleLogs';

export const initialState = {
  logs: [...SAMPLE_LOGS],
  selectedLogId: null,
  filters: {
    searchText: '',
    level: 'ALL',
    tag: 'ALL',
    onlyTagged: false
  }
};

export function logViewerReducer(state, action) {
  switch (action.type) {
    case 'SET_LOGS':
      return {
        ...state,
        logs: action.payload
      };

    case 'ADD_LOGS':
      return {
        ...state,
        logs: [...state.logs, ...action.payload]
      };

    case 'SELECT_LOG':
      return {
        ...state,
        selectedLogId: action.payload
      };

    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };

    case 'ADD_TAG': {
      const { logId, tag } = action.payload;
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === logId
            ? { ...log, tags: log.tags.includes(tag) ? log.tags : [...log.tags, tag] }
            : log
        )
      };
    }

    case 'REMOVE_TAG': {
      const { logId, tag } = action.payload;
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === logId
            ? { ...log, tags: log.tags.filter(t => t !== tag) }
            : log
        )
      };
    }

    case 'RESET':
      return {
        ...initialState,
        logs: [...SAMPLE_LOGS]
      };

    default:
      return state;
  }
}
