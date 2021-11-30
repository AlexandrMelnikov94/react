import {getRandomIntInclusive} from "../util/util.js";

const firstNames = ["Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "William",
  "James",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander"
];

const lastName = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez"
]

const getRandomIndex = (array) => getRandomIntInclusive(0, array.length - 1);

const getRandomArrayMember = (array) => array[getRandomIndex(array)];

const getRandomFirstName = () => getRandomArrayMember(firstNames);

const getRandomLastName = () => getRandomArrayMember(lastName);

export {getRandomFirstName, getRandomLastName};