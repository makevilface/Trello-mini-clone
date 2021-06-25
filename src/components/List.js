import React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import shortID from 'shortid';

import Card from './Card';
import CardEditor from './CardEditor';
import ListEditor from './ListEditor';

import StyledAddIcon from '../styles/icons/addIcon';

const StyledList = styled.div`
  background: ${({ theme }) => theme.list};
  flex-shrink: 0;
  width: 272px;
  height: fit-content;
  margin: 10px;
  margin-right: 0;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;
const StyledListTitle = styled.div`
  cursor: text;
  padding: 10px;
  overflow-wrap: break-word;
`;
const StyledToggle = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 0 0 3px 3px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.listAddHover};
  }
  .add-icon {
    fill: ${({ theme }) => theme.text};
  }
`;

const List = ({ list, listId, dispatch, index }) => {
  const [editingTitle, setEditingTitle] = React.useState(false);
  const [addingCard, setAddingCard] = React.useState(false);
  const [title, setTitle] = React.useState(list.title);

  const toggleAddingCard = () => setAddingCard((addingCard) => !addingCard);

  const toggleEditingTitle = () => setEditingTitle((editingTitle) => !editingTitle);

  const handleChangeTitle = (event) => setTitle(event.target.value);

  const addCard = async (cardText) => {
    toggleAddingCard();
    if (cardText.length > 0) {
      const cardId = shortID.generate();
      dispatch({
        type: 'ADD_CARD',
        payload: { cardText, cardId, listId },
      });
    }
  };

  const editListTitle = async () => {
    toggleEditingTitle();

    dispatch({
      type: 'CHANGE_LIST_TITLE',
      payload: { listId, listTitle: title },
    });
  };

  const deleteList = async () => {
    if (window.confirm('Вы точно хотите удалить колонку?')) {
      dispatch({
        type: 'DELETE_LIST',
        payload: { listId, cards: list.cards },
      });
    }
  };

  return (
    <Draggable draggableId={list._id} index={index}>
      {(provided, snapshot) => (
        <StyledList
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          {editingTitle ? (
            <ListEditor
              list={list}
              title={title}
              handleChangeTitle={handleChangeTitle}
              saveList={editListTitle}
              onClickOutside={editListTitle}
              deleteList={deleteList}
            />
          ) : (
            <StyledListTitle onClick={toggleEditingTitle}>{list.title}</StyledListTitle>
          )}

          <Droppable droppableId={list._id}>
            {(provided, _snapshot) => (
              <div ref={provided.innerRef} className='Lists-Cards'>
                {list.cards &&
                  list.cards.map((cardId, index) => (
                    <Card key={cardId} cardId={cardId} index={index} listId={list._id} />
                  ))}

                {provided.placeholder}

                {addingCard ? (
                  <CardEditor onSave={addCard} onCancel={toggleAddingCard} adding />
                ) : (
                  <StyledToggle onClick={toggleAddingCard}>
                    <StyledAddIcon className='add-icon' /> Добавить карточку
                  </StyledToggle>
                )}
              </div>
            )}
          </Droppable>
        </StyledList>
      )}
    </Draggable>
  );
};

const mapStateToProps = (state, ownProps) => ({
  list: state.listsById[ownProps.listId],
});

export default connect(mapStateToProps)(List);
