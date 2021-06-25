import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import StyledDeleteIcon from '../styles/icons/deleteIcon';

const StyledListEditTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .delete-icon {
    margin: 1px 5px;
    cursor: pointer;
  }
`;

const StyledListTextarea = styled(TextareaAutosize)`
  margin: 6px 0 5px 6px;
  border-radius: 3px;
  border: none;
  resize: none;
  outline: none;
  font-size: 15px;
  padding: 5px;
  width: ${(props) => (props.deleteList ? '240px' : '255px')};

  &:focus {
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`;

const ListEditor = ({ saveList, onClickOutside, title, handleChangeTitle, deleteList }) => {
  const ref = React.useRef(null);

  const onEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      saveList();
    }
  };

  const handleClick = (event) => {
    const node = ref.current;
    if (node && node.contains(event.target)) {
      return;
    }
    onClickOutside();
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick, false);
    return () => {
      document.removeEventListener('click', handleClick, false);
    };
  }, []);

  return (
    <StyledListEditTitle ref={ref}>
      <StyledListTextarea
        autoFocus
        placeholder='Введите заголовок списка'
        value={title}
        onChange={handleChangeTitle}
        onKeyDown={onEnter}
        deleteList={deleteList}
      />
      {deleteList && <StyledDeleteIcon className='delete-icon' onClick={deleteList} />}
    </StyledListEditTitle>
  );
};

export default ListEditor;
