import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import CardEditor from './CardEditor';

import StyledEditIcon from '../styles/icons/editIcon';

const StyledCard = styled.div`
  position: relative;
  cursor: pointer;
  background: ${({ theme }) => theme.card};
  margin: 5px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  font-size: 15px;
  overflow-wrap: break-word;
  min-height: 14px;
  &:hover {
    background: ${({ theme }) => theme.cardHover};
  }
`;

const StyledCardIcons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledCardIcon = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 1px;
  color: rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.cardIcon};
  opacity: 0.9;
  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.cardHoverIcon};
  }
`;

const Card = ({ dispatch, card, listId, index }) => {
  const [hover, setHover] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState('');

  const startHover = () => setHover(true);
  const endHover = () => setHover(false);

  const startEditing = () => {
    setHover(false);
    setEditing(true);
    setText(card.text);
  };

  const endEditing = () => {
    setHover(false);
    setEditing(false);
  };

  const editCard = async (text) => {
    endEditing();
    if (text.length > 0) {
      dispatch({
        type: 'CHANGE_CARD_TEXT',
        payload: { cardId: card._id, cardText: text },
      });
    } else {
      dispatch({
        type: 'DELETE_CARD',
        payload: { cardId: card._id, listId },
      });
    }
  };

  const deleteCard = async () => {
    if (window.confirm('Вы точно хотите удалить карточку?')) {
      dispatch({
        type: 'DELETE_CARD',
        payload: { cardId: card._id, listId },
      });
    }
  };

  return (
    <>
      {!editing ? (
        <Draggable draggableId={card._id} index={index}>
          {(provided, snapshot) => (
            <StyledCard
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onMouseEnter={startHover}
              onMouseLeave={endHover}>
              {hover && (
                <StyledCardIcons>
                  <StyledCardIcon onClick={startEditing}>
                    <StyledEditIcon />
                  </StyledCardIcon>
                </StyledCardIcons>
              )}

              {card.text}
            </StyledCard>
          )}
        </Draggable>
      ) : (
        <CardEditor
          text={card.text}
          onSave={editCard}
          onDelete={deleteCard}
          onCancel={endEditing}
        />
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId],
});

export default connect(mapStateToProps)(Card);
