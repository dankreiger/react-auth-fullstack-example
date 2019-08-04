import styled from 'styled-components';
import { headerHeight } from '../../utils/styleUtils';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: ${headerHeight}px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  a {
    margin: 0 10px;
  }
`;
