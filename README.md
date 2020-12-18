# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule.

## Introduction

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: `git checkout -b <firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: `git push origin <firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `./api/auth/auth-router.js`.
- [ ] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `./api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, implemented inside `./api/server.test.js`. The `package.json` includes the "test" script.

**Notes:**

- You are welcome to create additional modules for middlewares or data models, but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except for installing libraries. The "test" script has been added for you.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

**IMPORTANT:** Work on stretch goals in a **new branch**. You can branch off `<firstName-lastName>` by executing `git checkout -b stretch`.

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Write at least 4 tests per endpoint.
- [ ] Extract user validation into a separate method and write unit tests for it.
- [ ] Use a separate testing database for the endpoint tests.
- [ ] Implement authentication using sessions instead of tokens.

## Submission format

There are two possible ways to submit this project to Canvas. Lambda Staff will let you know which one applies:

1. Submitting a pull request to merge `<firstName-lastName>` branch into `main`.
2. Setting up your fork settings on Github to submit via Codegrade by pushing commits to your `<firstName-lastName>` branch.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.
Sessions are created and exists for the user until the user times it out or logs out, they are also encrypted. JSON Web Tokens are encoded and carry a secret on the server instead so the payload can be seen, they also exist on a timer instead of relying on the user to invalidate them.
2. What does `bcryptjs` do to help us store passwords in a secure manner?
bcryptjs helps us hash the passwords however many times we want and can help in comparing the saved hash to the regular password so we don't have to store the unhashed passwords in our database.
3. How are unit tests different from integration and end-to-end testing?
unit tests are different because it tests how each unit works individually without interacting with any other units.
4. How does _Test Driven Development_ change the way we write applications and tests?
test driven development makes us write the tests first and the code afterwards to fit our tests, this helps us write more robust code.
