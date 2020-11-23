import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #3a3b3c;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    color: #fafafa;
    font-size: 28px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 12px;
  }
`;

export const Form = styled.form`
  margin-top: 12px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'input',
  disabled: props.loading,
}))`
  background-color: #f38fff;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 0;
  }

  & [disabled] {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    color: #fafafa;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  & + li {
    border-top: 1px solid red;
  }

  a {
    font-style: none;
    text-decoration: none;
  }
`;
