import React from 'react';
import { useDispatch } from 'react-redux';
import shortID from 'shortid';
import styled from 'styled-components';

import ListEditor from './ListEditor';
import EditButtons from './EditButtons';

const StyledAddListEditor = styled.div`
  background: #dfe3e6;
  border-radius: 3px;
  padding: 2px 2px;
`;

const AddList = ({ toggleAddingList }) => {
  const [title, setTitle] = React.useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (event) => setTitle(event.target.value);

  const createList = async () => {
    if (title.length > 0) {
      toggleAddingList();
      dispatch({
        type: 'ADD_LIST',
        payload: { listId: shortID.generate(), listTitle: title },
      });
    }
  };

  return (
    <StyledAddListEditor>
      <ListEditor
        title={title}
        handleChangeTitle={handleChangeTitle}
        onClickOutside={toggleAddingList}
        saveList={createList}
      />

      <EditButtons
        handleSave={createList}
        saveLabel={'Добавить список'}
        handleCancel={toggleAddingList}
      />
    </StyledAddListEditor>
  );
};

export default AddList;
