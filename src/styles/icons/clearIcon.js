import styled from 'styled-components';

import { BsX } from 'react-icons/bs';

const StyledClearIcon = styled(BsX)`
  height: 20px;
  width: 20px;
  fill: ${({ theme }) => theme.text};
`;

export default StyledClearIcon;
