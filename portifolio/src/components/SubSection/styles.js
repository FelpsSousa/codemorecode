import styled from 'styled-components';

export const Container = styled.section`

  max-width: 1200px;
  margin: 16px 0 28px;

  > h3 {

    text-align: left;
   
    border-bottom-width: 1px;
    border-bottom-style: dashed;
    border-block-color: ${({ theme }) => theme.COLORS.COLOR_9};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.COLOR_9};
    font-weight: 600;
  }
`;
