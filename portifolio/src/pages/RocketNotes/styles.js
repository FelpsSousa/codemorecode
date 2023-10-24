import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";

    > main {
      grid-area: content;
      overflow-y: scroll;
      padding: 64px 0;

      img {
        margin-top: 24px;
        margin-bottom: 48px;
      } 
    }
  ;
`;

export const Links = styled.ul`

  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 18px;
    margin-top: 16px;
    text-align: justify;
  }
  
`;

export const Line = styled.div`

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-block-color: pink;

  margin-bottom: 48px;
`;