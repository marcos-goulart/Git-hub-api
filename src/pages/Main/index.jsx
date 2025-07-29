import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useTheme } from 'styled-components';
import { MdSearch } from 'react-icons/md'

import { Container, Logo, Title, Form, Input, Button, ErrorMessage } from './styles';

import githublogo from '../../assets/images/github-logo.svg'

export default function Main() {
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSearch = async () => {
    if (login.trim() === "") {
      setError("Por favor, preencha o campo de usuário!");
      return;
    }
    setError("");
    setTimeout(() => {
      navigate(`/${login}/repositories`);
    }, 0)

  };

  return (
    <Container>
      <Logo src={githublogo} alt="API Github" />
      <Title>GitHub API</Title>
      <Form>
        <div style={{ display: "relative", flex: 1 }}>
          <Input
            placeholder="usuário"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleSearch(e);
            }}
            haserror={!!error}
          />
          <ErrorMessage visible={!!error}>{error}</ErrorMessage>
        </div>

        <Button type="button" onClick={handleSearch} haserror={!!error}>
          <MdSearch
            size={48}
            color={error ? theme.colors.error : theme.colors.text}
          />
        </Button>
      </Form>
    </Container>
  );
}
