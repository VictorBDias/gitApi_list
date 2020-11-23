import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #3a3b3c;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  height: 120;
  width: 120px;
  border-radius: 60px;
`;

export const Info = styled.div`
  max-width: 600px;
  background: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: auto;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #fafafa;
    font-size: 16px;
    margin-bottom: 20px;
  }

  span#repoName {
    color: #f38fff;
    font-weight: bold;
  }
`;
