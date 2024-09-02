//@ts-check

class User {
  #_name;
  #_age;
  getName() {
    this.#_name;
  }
  getAge() {
    this.#_age;
  }
  toString() {
    return `Name: ${this.#_name} Age: ${this.#_age}`;
  }
}
