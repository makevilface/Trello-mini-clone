import styled from 'styled-components';

import { BsTrash } from 'react-icons/bs';

const StyledDeleteIcon = styled(BsTrash)`
  height: 18px;
  width: 18px;
  fill: ${({ theme }) => theme.text};
`;

export default StyledDeleteIcon;
