const user = {
  name: "Alex",
  age: 18,
  hobby: ["basketball", "video games"],
  address: {
    street: "Sadova",
    house: 20,
  },
};
//const user2 = { ...user };
const user2 = structuredClone(user);
user.address.house = 100;
user.hobby[0] = "football";
user.name = "Oleg";
console.table(user);
console.table(user2);
