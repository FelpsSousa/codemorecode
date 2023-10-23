import styled from 'styled-components';

export const Container = styled.span`

  font-size: 12px;
  font-weight: 800;

  align-items: center;
  
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;
