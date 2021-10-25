import {getRandomFirstName, getRandomLastName} from "./names-generator.js";
import {getRandomBirthDate} from "./data-generator.js";

const getRandomUser = (minAge, maxAge) => ({
    firstName: getRandomFirstName(),
    lastName: getRandomLastName(),
    birthDate: getRandomBirthDate(minAge,maxAge),
});

export {getRandomUser};