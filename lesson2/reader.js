import {getUsers} from "./api/user-api.js";

const formatUser = (user) => `${user.id}, ${user.firstName}, ${user.lastName}`;

const formatUser2 = (user) => {
  const { id, firstName, lastName} = user;
  return `${firstName[0]}.${lastName[0]}.${id}`;
}

const formatUsers = (users, formatter) => users.map(user => formatter(user)).join("\n");

const main = async () => {
  const users = await getUsers();
  console.log(formatUsers(users, formatUser2));
};

main().then();