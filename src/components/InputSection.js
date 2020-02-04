import React, { useContext } from 'react';
import AppContext from '../context';
import noteActions from '../context/actions/noteActions';
import inputActions from '../context/actions/inputActions';
import './inputSection.style.scss';

const InputSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const { title, content, id } = state.inputs;

  const addNote = () => {
    if(title && content) {
      dispatch(noteActions.addNote({
        title,
        content
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(title && content) {
      dispatch(noteActions.updateNote(id, {
        title, content
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="InputSection__container">
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={e => 
          dispatch(inputActions.setInputTitle(e.target.value))
        }
      />
      <textarea
        placeholder="Note content"
        value={content}
        onChange={e => 
          dispatch(inputActions.setInputContent(e.target.value))
        }
      ></textarea>
      <div
        className="InputSection__container__btnWrapper"
      >
        <button
          onClick={id === -1 ? addNote : updateNote}
        >
          {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
        </button>      
        {id !== -1 &&
          <button
            onClick={deleteNote}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
          >
            DELETE NOTE
          </button>
        }
      </div>
    </div>
  );
};

export default InputSection;
