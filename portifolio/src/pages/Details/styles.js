import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "aboutme"
    "content"
  ;
`;

export const Links = styled.ul`

  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.COLOR_10};
    }
  }
`;

export const Experiences = styled.div`

  > div {

    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 24px;
  
    strong {

      font-size: 20px;
      margin-top: 24px;
      margin-bottom: 12px;

    }
    span {
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      margin-bottom: 12px;

      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.COLOR_9};
      
      > strong {
        margin-top: 36px;
        margin-left: 24px;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.COLOR_10};
      }

      > span {
        margin-top: 12px;
        margin-left: 48px;
        color: pink;
      } 
    }

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-block-color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;