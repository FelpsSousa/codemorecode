import styled from 'styled-components';

export const Container = styled.section`

  margin: 56px 0 28px;

  > h2 {

    text-align: center;
   
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-block-color: ${({ theme }) => theme.COLORS.COLOR_8};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 400;
  }
`;
