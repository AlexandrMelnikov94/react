import fetch from "node-fetch";

const apiBase = "http://localhost:3000";

const Endpoints = {
  users: '/users',
};

const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}`);
  const users = await response.json();

  return users;
}

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
}

const deleteUser = async (user) => {

}

export {getUsers, addUser};