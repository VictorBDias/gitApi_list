/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/api';

export default function Main() {
  const [repositories, setRepositories] = useState([]);
  const [input, setInput] = useState('');
  const notifySuccess = () => toast.dark('Repository successfully added!');
  const notifyNotFound = () =>
    toast.error('Not found, double check if the repository name is correct 😥');
  const notifyDuplicate = () =>
    toast.error(
      'We found a duplicate, check the repository list if you think this is a error'
    );

  async function handleSubmit(e) {
    let erro = '';
    e.preventDefault();
    try {
      erro = 'notFound';
      const hasRepo = repositories.find((repo) => repo.full_name === input);
      if (hasRepo) {
        erro = 'duplicate';
        throw Error();
      }
      document.querySelector('#repoId').style.borderColor = 'rgb(51,51,51)';
      await api.get(`https://api.github.com/repos/${input}`).then((res) => {
        notifySuccess();
        const newRepo = res.data;
        setRepositories([...repositories, newRepo]);
      });
    } catch (error) {
      if (erro === 'notFound') {
        notifyNotFound();
      } else if (erro === 'duplicate') {
        notifyDuplicate();
      }
      document.querySelector('#repoId').style.borderColor =
        'rgb(240, 135, 135)';
    }
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
      <ToastContainer />
      <h1>
        <FaGithub />
        Repositories
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          id="repoId"
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
