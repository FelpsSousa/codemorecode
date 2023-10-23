import styled from 'styled-components';

export const Container = styled.button`

  width: 25%;
  min-width: 300px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  margin: 24px 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 16px;
  }

  > img {
    width: 250px;
    height: 250px;
    border-radius: 24px;
    margin: 24px 0;
  }
  > p {
    text-align: left;
    color: ${({ theme }) => theme.COLORS.COLOR_10};
    
    margin-top: 16px;
  }

  > footer {

    > strong {
      line-height: 36px;
      font-size: 16px;
    }

    color: ${({ theme }) => theme.COLORS.ORANGE};;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    margin-bottom: 24px;
    align-items: center;
  }
`; 