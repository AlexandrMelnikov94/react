import {getRandomUser} from "./generators/user-generator.js";
import {addUser} from "./api/user-api.js";

const main = async (usersCount) => {
  const results = [];

  for (let i = 0; i < usersCount; i++) {
    results.push(addUser(getRandomUser(13,18)));
  }

  Promise.all(results);
};

const usersCount = parseInt(process.argv[2], 10);

main(usersCount).then();