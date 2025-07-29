import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "haserror",
})`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: ${(props) =>
    props.haserror ? `2px solid ${props.theme.colors.error}` : "none"};
  border-right: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;


export const Button = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "haserror",
})`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 80px;
  height: 64px;
  border: ${(props) =>
    props.haserror
      ? `3px solid ${props.theme.colors.error}`
      : `3px solid ${props.theme.colors.text}`};
  transition: background 0.3s, border 0.5s ease;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;

export const ErrorMessage = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "visible",
})`
  position: absolute;
  color: ${(props) => props.theme.colors.error};
  margin-top: 8px;
  text-align: center;
  text-decoration: underline;
  cursor: default;
  width: 100%;
  max-width: 583px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) => (props.visible ? "translateY(0)" : "translateY(-5px)")};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

