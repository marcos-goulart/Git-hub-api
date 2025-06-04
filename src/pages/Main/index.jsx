import React, { useState } from 'react'

import { MdSearch } from 'react-icons/md'

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githublogo from '../../assets/images/github-logo.svg'

export default function Main() {
  const [login, setLogin] = useState('')

  return (
    <Container>
      <Logo src={githublogo} alt="API Github" />
      <Title>GitHub API </Title>
      <Form>
        <Input placeholder="usuário" value={login} onChange={(event) => setLogin(event.target.value)}/>
        <Button to={`/${login}/repositories`}>
          <MdSearch size={48} />
        </Button>
      </Form>
    </Container>
  );
}

