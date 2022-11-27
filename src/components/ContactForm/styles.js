import styled from "styled-components";

export const FormContainerStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleStyled = styled.h1`
  color: ${({theme}) => theme.titleColor};
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media ( max-width: 700px  ) { 
    width: 400px;
  }

  @media ( max-width: 500px  ) { 
    width: 300px;
}
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const InputStyled = styled.input`
  border-radius: 1%;
  border: 1px solid ${({theme}) => theme.headerColor};
  height: 25px;

  :focus-visible {
  outline: 2px auto ${({theme}) => theme.titleColor};
}
`;

export const TextareaStyled = styled.textarea`
  border: 1px solid ${({theme}) => theme.headerColor};
  height: 200px;
  resize: none;
  width: 100%;

  :focus-visible {
  outline: 2px auto ${({theme}) => theme.titleColor};
}`;

export const ButtonStyled = styled.button`
  background-color: ${({theme}) => theme.headerColor};
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 700;
  padding: 5px;

  :hover {
  opacity: 0.8;
  }`;