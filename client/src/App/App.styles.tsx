import styled from 'styled-components';
import { headerHeight } from '../utils/styleUtils';

export const AppWrapper = styled.div``;
export const AppRouteWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - ${headerHeight}px);
  align-items: center;
  justify-content: center;
`;
