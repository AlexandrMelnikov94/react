import fetch from "node-fetch";

const apiBase = "http://localhost:3000";

const Endpoints = {
  users: '/users',
};

const getUsersEndpoint = `${apiBase}${Endpoints.users}`;

console.log(getUsersEndpoint);

fetch(getUsersEndpoint)
  .then((response) => response.json())
  .then((json) => console.log(json));