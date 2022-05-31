// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  addElementInObject(key, value) {
    this[key] = value;
  },
  changeValueInObject(key, value) {
    this[key] = value;
  },
  displayFillingOfObject() {
    const keys = Object.keys(this);
    for (const key of keys) {
      console.log(`${key} : ${this[key]}`);
    }
  },
};

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
user.addElementInObject("mood", "happy");
user.changeValueInObject("hobby", "skydiving");
user.changeValueInObject("premium", false);
user.displayFillingOfObject();
