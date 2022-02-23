// JavaScript Object Notation
// JSON
const user = { id: 11, name: "Hasan", job: "student" };
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
  name: "Fruity Demand",
  address: "Jashare",
  profit: 1000,
  owner: {
    name: "Masum Billah",
    job: "Software Engineer",
  },
  product: ["Honey", "Dates", "Penuts"],
  isExpensive: true,
};
// Object k JSON  string e convert kore
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);

// stringifiedObject ke object e convert kore
const jsonToObj = JSON.parse(shopStringified);
console.log(jsonToObj);
console.log(jsonToObj.owner);
