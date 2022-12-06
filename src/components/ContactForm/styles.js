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
  background-color: ${({theme}) => theme.sectionColor};
  border-radius: 1%;
  border: 1px solid ${({theme}) => theme.headerColor};
  color: ${({theme}) => theme.textColor};
  height: 25px;
  padding: 1px 0 1px 5px;

  :focus-visible {
  outline: 2px auto ${({theme}) => theme.headerColor};
}
`;

export const TextareaStyled = styled.textarea`
  background-color: ${({theme}) => theme.sectionColor};
  border: 1px solid ${({theme}) => theme.headerColor};
  color: ${({theme}) => theme.textColor};
  height: 200px;
  padding: 5px 0 0 5px;
  resize: none;
  width: 100%;

  :focus-visible {
  outline: 2px auto ${({theme}) => theme.headerColor};
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