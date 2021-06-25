import styled from 'styled-components';

import { BsPlus } from 'react-icons/bs';

const StyledAddIcon = styled(BsPlus)`
  height: 20px;
  width: 20px;
  fill: ${({ theme }) => theme.text};
`;

export default StyledAddIcon;
