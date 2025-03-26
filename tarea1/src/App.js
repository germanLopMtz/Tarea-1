import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.button`
  background: ${(props) => (props.theme.background === "#222" ? "#555" : "#ddd")};
  color: ${(props) => (props.theme.background === "#222" ? "#fff" : "#333")};
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${(props) => (props.theme.background === "#222" ? "#777" : "#bbb")};
  }
`;

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <h1>Modo {theme === "light" ? "Claro" : "Oscuro"}</h1>
      <Button onClick={toggleTheme}>Cambiar Tema</Button>
    </Container>
  );
};

export default App;
