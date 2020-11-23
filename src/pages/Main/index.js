/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/api';

export default function Main() {
  const [repositories, setRepositories] = useState([]);
  const [input, setInput] = useState('');
  // const [loading, setLoading] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    await api.get(`https://api.github.com/repos/${input}`).then((res) => {
      const newRepo = res.data;
      setRepositories([...repositories, newRepo]);
    });
  }

  useEffect(() => {
    const retrivedRepos = localStorage.getItem('repositories');
    setRepositories(JSON.parse(retrivedRepos));
  }, []);

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }, [repositories]);

  return (
    <Container>
      <h1>
        <FaGithub />
        Repositories
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add repository"
          onChange={(e) => setInput(e.target.value)}
        />
        <SubmitButton>
          <FaPlus color="#FFF" />
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository) => (
          <Link to={`/repository/${encodeURIComponent(repository.full_name)}`}>
            <li key={repository.id}>
              <span>{repository.full_name}</span>
            </li>
          </Link>
        ))}
      </List>
    </Container>
  );
}
