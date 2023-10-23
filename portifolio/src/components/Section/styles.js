import styled from 'styled-components';

export const Container = styled.section`

  max-width: 1200px;
  margin: 64px 0 28px;


  > h1 {

    text-align: center;
   
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-block-color: ${({ theme }) => theme.COLORS.WHITE};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.COLOR_9};
    font-size: 28px;
    font-weight: 800;
  }
`;
