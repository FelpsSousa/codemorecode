import styled from 'styled-components';

export const Container = styled.header`

  grid-area: header;

  height: 100px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Profile = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  
  > img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    margin-right: 28px;
  }

  > strong {
    font-size: 64px;
  }
`;