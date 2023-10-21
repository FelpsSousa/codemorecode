import styled from 'styled-components';

export const Container = styled.div`

  grid-area: aboutme;

  height: 480px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.COLOR_5};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export const AboutMe = styled.div`

  display: flex;
  align-items: center;

  > img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin-left: 100px;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
    margin-right: 140px;
    line-height: 24px;
  }

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};    
    
    margin-bottom: 24px;
  }

  span {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.COLOR_9};
    
    line-height: 24px
  }

  



`;