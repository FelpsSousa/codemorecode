import styled from 'styled-components';

export const Container = styled.div`

  grid-area: aboutme;

  min-height: 500px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.COLOR_5};

  display: flex;
  justify-content: center;

  padding: 0 64px;
`;

export const AboutMe = styled.div`

  display: flex;
  align-items: center;
  text-align: justify;

  > img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    padding: 12px;
  }

  > div {
    display: flex;
    flex-direction: column;
    max-width: 750px;
    line-height: 24px;

    padding: 36px;
  }

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.COLOR_9};    
    
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    line-height: 28px;

    margin-bottom: 48px;
  }
`;