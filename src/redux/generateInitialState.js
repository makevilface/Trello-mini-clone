import shortID from 'shortid';

const generateInitialState = (store) => {
  const firstListId = shortID.generate();

  store.dispatch({
    type: 'ADD_LIST',
    payload: { listId: firstListId, listTitle: 'Планы на день' },
  });

  store.dispatch({
    type: 'ADD_CARD',
    payload: {
      listId: firstListId,
      cardId: shortID.generate(),
      cardText: 'Первая карточка',
    },
  });

  store.dispatch({
    type: 'ADD_CARD',
    payload: {
      listId: firstListId,
      cardId: shortID.generate(),
      cardText: 'Вторая карточка',
    },
  });

  const secondListId = shortID.generate();

  store.dispatch({
    type: 'ADD_LIST',
    payload: { listId: secondListId, listTitle: 'Планы на неделю' },
  });

  store.dispatch({
    type: 'ADD_CARD',
    payload: {
      listId: secondListId,
      cardId: shortID.generate(),
      cardText: 'Первая карточка',
    },
  });

  store.dispatch({
    type: 'ADD_CARD',
    payload: {
      listId: secondListId,
      cardId: shortID.generate(),
      cardText: 'Вторая карточка',
    },
  });
};

export default generateInitialState;
