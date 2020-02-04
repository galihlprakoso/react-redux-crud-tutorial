import React from 'react';
import './NoteItem.styles.scss';

const NoteItem = ({ title, content, onItemClicked}) => {
  return (
    <div
      className="NoteItem__container"
      role="button"
      onClick={onItemClicked}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NoteItem;
