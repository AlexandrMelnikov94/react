import fetch from "node-fetch";
import {getRandomUsersNumber} from "../util/util.js";

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
  console.log(result);
  return result;
}

const sortByDate = async() => {
  const users = await getUsers();
  users.sort((a,b) => Date.parse(a.birthDate) > Date.parse(b.birthDate) ? 1 : -1);
  console.log('Самый молодой ' + users[0]);
  console.log('Самый старый ' + users[users.length - 1]);
}
// const deleteUSer = async (user) => {
//   const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
//     method: 'DELETE',
//     headers: {'Content-Type': 'application/json; charset=utf-8'},
//   })
// }
// await sortByDate();


export {getUsers, addUser, sortByDate};