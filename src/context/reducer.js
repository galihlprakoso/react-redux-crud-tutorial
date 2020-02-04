import actionTypes from './actionTypes';

export const initialState = {
  inputs: {
    id: -1,
    title: '',
    content: '',
  },
  notes: {
    notes: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    // inputs
    case actionTypes.SET_INPUT_TITLE: {
      const { title } = action;
      return {
        ...state,
        inputs: {
          ...state.inputs,
          title,
        }
      }
    }
    case actionTypes.SET_INPUT_CONTENT: {
      const { content } = action;
      return {
        ...state,
        inputs: {
          ...state.inputs,
          content,
        }
      }
    }
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        inputs: {
          ...state.inputs,
          id,
        }
      }
    }
    case actionTypes.RESET_INPUT: {
      return {
        ...state,
        inputs: initialState.inputs,
      };
    }

    // notes
    case actionTypes.ADD_NOTE: {
      const notes = [...state.notes.notes];
      notes.push(action.note);
      return {
        ...state,
        notes: {
          notes
        }
      }
    }
    case actionTypes.UPDATE_NOTE: {
      const { index, note } = action;
      const notes = [...state.notes.notes];
      notes[index] = note;
      return {
        ...state,
        notes: {
          notes
        }
      }
    }
    case actionTypes.DELETE_NOTE: {
      const { index } = action;
      const notes = [];
      state.notes.notes.forEach((note, i) => {
        if(index !== i) {
          notes.push(note)
        }
      })      
      return {
        ...state,
        notes: {
          notes
        }
      }
    }

    default:
      return state;
  }
}