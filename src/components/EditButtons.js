import React from 'react';
import styled from 'styled-components';

import StyledButton from '../styles/button';

import StyledClearIcon from '../styles/icons/clearIcon';

const StyledEditButtons = styled.div`
  display: flex;
  align-items: center;
`;

const StyledEditButton = styled(StyledButton)`
  margin: 0 3px 10px 5px;
  background: ${(props) => (props.green ? '#5aac44' : '#EA2525')};

  &:hover {
    opacity: 0.7;
  }
`;

const StyledEditButtonCancel = styled.button`
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 20px;
  opacity: 0.5;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

const EditButtons = ({ handleSave, saveLabel, handleDelete, handleCancel }) => {
  return (
    <StyledEditButtons>
      <StyledEditButton green onClick={handleSave}>
        {saveLabel}
      </StyledEditButton>
      {handleDelete && <StyledEditButton onClick={handleDelete}>Удалить</StyledEditButton>}
      <StyledEditButtonCancel onClick={handleCancel}>
        <StyledClearIcon />
      </StyledEditButtonCancel>
    </StyledEditButtons>
  );
};

export default EditButtons;
