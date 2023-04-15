![](https://img.shields.io/badge/Microverse-blueviolet)

# Jest testing practice

> Automated testing with Jest

In this exercise, you will write a few practical tests for JavaScript functions using the [Jest](https://jestjs.io/) library. You should make sure you follow the [AAA pattern](https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F-12-structure-tests-by-the-aaa-pattern) to make your tests easier for other developers to read and understand. You will also try to use the TDD approach in practice.

## Instructions:

### Task 1

- Write a function stringLength(string) that takes any string as an argument and returns its characters count.
- Now write a test for this function.
- Next, expand your function to make it check if the string is at least 1 character long and not longer than 10 characters. Throw errors if those conditions are not met.
- Add tests for the new functionality.

### Task 2

- Write a function reverseString(string) function. It should take a string as an argument and return it reversed.
- Write at least one test for this function.

### Task 3

In this task, you will need to write several tests for each tested function. You could write all of your tests directly at the top level, but it's better to group related tests so their output is more readable. Jest has the describe() method just for that. Read about it [here](https://jestjs.io/docs/api#describename-fn) and apply it in your tests for this task:

- Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
- Write at least 3 tests for each of the calculator methods.
- Group tests for each method using `describe()` method.

### Task 4

In this task we're going to do things differently:

- Start by writing a test for a capitalize(string) function. Your test should make sure that this function takes a string as an argument and returns that string with the first character capitalized.
- Run your test - it should fail because you don’t have the capitalize(string) function implemented yet.
- Now make your tests green by implementing the capitalize(string) function. Think about what the minimum amount of code is necessary to pass this test and write it.

## Built With

- Major languages: JS
- Frameworks: none
- Technologies used: Git, Jest

## Live Demo

- Not applicable

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- Jest package
- A text editor preferably ([Visual Studio Code](https://code.visualstudio.com/))

### Setup

- For detail description of how to get started with Jest, please, see here: [Jest](https://jestjs.io/docs/getting-started)

### Install

- Open a terminal and install and run:
- `npm init -y`  
- Install Jest:
- `npm install --save-dev jest`
- Add to `package.json` file:
- `
 "scripts": {
    "test": "jest"
  }
  `

### Usage

Run the test by entering:

- `npm test`

### Run tests

Not applicable

### Deployment

Not applicable

## Author

👤 **Yordanos*

- GitHub: [@yordinia](https://github.com/yordinia)
- Twitter: [@yordinia](https://twitter.com/yordinia)
- LinkedIn: [yordi](handle)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
I would like to thank Microverse 


## 📝 License

This project is [MIT](https://github.com/yordinia/yordinia/blob/main/LICENSE) licensed.
