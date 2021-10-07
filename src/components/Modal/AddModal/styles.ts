import styled from '@emotion/styled'

interface Props {
  isOpen: boolean,
}
  
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  font-family: 'CookieRunRegular';
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  white-space:normal;
`;

export const Text = styled.span`
  font-family: 'CookieRunBold';
  margin-right: 1.2rem;
  white-space:normal;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 0.3rem 0.5rem;
  border: 2.5px solid #333333;
  border-radius: 4px;
  width: 187px;
  font-family: 'CookieRunRegular';
  &:focus {
    border-color: #FF0000;
  }
`;

export const Select = styled.select`
  box-sizing: border-box;
  padding: 0.3rem 0.5rem;
  border: 2.5px solid #333333;
  border-radius: 4px;
  width: 187px;
  font-family: 'CookieRunRegular';
  &:focus {
    border-color: #FF0000;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #333333;
  color: #ffffff;
  border-radius: 4px;
  padding: 0.5rem 0;
  &:focus {
    background-color: #333333;
  }
`;