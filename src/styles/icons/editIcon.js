import styled from 'styled-components';

import { BsPencil } from 'react-icons/bs';

const StyledEditIcon = styled(BsPencil)`
  height: 18px;
  width: 18px;
  fill: ${({ theme }) => theme.text};
`;

export default StyledEditIcon;
