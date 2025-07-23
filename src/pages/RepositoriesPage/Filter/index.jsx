import React from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import { Container, Selector, Cleaner, BackButton } from "./styles";

export default function Filter({ languages, currentLanguage, onClick }) {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase}
      color={color}
      className={currentLanguage === name ? "selected" : ""}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  const navigate = useNavigate()

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
      <BackButton onClick={() => navigate(`/`)}>voltar</BackButton>
    </Container>
  );
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};
