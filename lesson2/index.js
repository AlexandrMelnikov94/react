import {getRandomUser} from "./generators/user-generator.js";
import {addUser, getUsers} from "./api/user-api.js";
import {rangeInclusive} from "./util/util.js";
import {getRandomUsersNumber} from "./util/util.js";

const main = async (usersCount) =>
  Promise.all(
    rangeInclusive(1, usersCount).map((_index) =>
      addUser(getRandomUser(13, 18))
    )
  );

const usersCount = getRandomUsersNumber(6, 10);
console.log(usersCount);


main(usersCount).then();