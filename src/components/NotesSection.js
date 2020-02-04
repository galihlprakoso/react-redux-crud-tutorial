import React, { useContext } from 'react';
import NoteItem from './NoteItem';
import AppContext from '../context';
import inputActions from '../context/actions/inputActions';
import './NotesSection.style.scss';

const NotesSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const { notes } = state.notes;

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  }

  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>There is no note yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if(item) {
          return (
            <NoteItem
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />      
          )
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;
