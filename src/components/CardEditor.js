import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import EditButtons from './EditButtons';

const StyledEditCard = styled.div`
  .card {
    position: relative;
    cursor: pointer;
    background: white;
    margin: 5px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
    font-size: 15px;
    overflow-wrap: break-word;

    min-height: 50px;
    padding-left: 8px;
    padding-right: 15px;
    &:hover {
      background: #fff;
    }
  }
`;

const StyledEditCardTextarea = styled(TextareaAutosize)`
  min-height: 50px;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  font-size: 15px;
`;

const CardEditor = ({ text, onSave, onCancel, onDelete, adding }) => {
  const [cardText, setCardText] = React.useState(text || '');

  const handleChangeText = (event) => setCardText(event.target.value);

  const onEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSave(cardText);
    }
  };

  return (
    <StyledEditCard>
      <div className='card'>
        <StyledEditCardTextarea
          autoFocus
          placeholder='Введите описание карточки...'
          value={cardText}
          onChange={handleChangeText}
          onKeyDown={onEnter}
        />
      </div>
      <EditButtons
        handleSave={() => onSave(cardText)}
        saveLabel={adding ? 'Добавить карточку' : 'Сохранить'}
        handleDelete={onDelete}
        handleCancel={onCancel}
      />
    </StyledEditCard>
  );
};

export default CardEditor;
