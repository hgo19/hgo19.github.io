import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => (theme.darkMode === 'on' ? '#2c6d7d' : '#2f8499')};
  border: none;
  border-radius: 15%;
  color: #fff;
  display: flex;
  font-size: 0.8em;
  font-weight: 200;   justify-content: center;
  align-items: center;
  align-content: center;
  padding: 5px;

  span {
    text-align: center;
  }

  @media (max-width : 900px) {
    font-size: 0.7em;
  }
`;

export default ButtonStyled;
