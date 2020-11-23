/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Image, Info } from './styles';

export default function Repository() {
  const [repoData, setRepoData] = useState({});
  const [ownerData, setOwnerData] = useState({});
  const match = useRouteMatch('/repository/:repository');

  useEffect(() => {
    api
      .get(
        `https://api.github.com/repos/${decodeURIComponent(
          match.params.repository
        )}`
      )
      .then((res) => {
        setRepoData(res.data);
        setOwnerData(res.data.owner);
        // console.log(res.data.owner.avatar_url);
      });
  }, []);

  // <h1>Repository:{decodeURIComponent(match.params.repository)}</h1>
  return (
    <Container>
      <Image src={ownerData.avatar_url} alt="profile_pic" />
      <Info>
        <span id="repoName">{repoData.full_name}</span>
        <span id="description">{repoData.description}</span>
      </Info>
    </Container>
  );
}
