# Betternship

## Table of Contents

- [Introduction](#introduction)
- [Stack](#stack)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Running the Server](#running-the-server)
  - [Setting up PostgreSQL](#setting-up-postgresql)
    - [Windows](#windows)
    - [Linux](#linux)
    - [Mac](#mac)
- [Running Jest and Writing Tests](#running-jest-and-writing-tests)
  - [Prerequisites](#prerequisites)
  - [Running Jest](#running-jest)
  - [Writing a Simple Test](#writing-a-simple-test)

## Introduction

Welcome to Betternship! This repository contains the codebase for our application. This README provides instructions on how to set up and run the server, as well as how to configure PostgreSQL on various operating systems. Additionally, it covers running Jest for testing purposes and includes a guide on writing a simple test.

## Stack

- <b>NodeJS</b>
- <b>ExpressJS</b>
- <b>TypeScript</b>
- <b>Nodemon</b>
- <b>PostgreSQL</b>

## Requirements

Before proceeding, make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/Betternship.git
cd Betternship
```

### Running the Server

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

### Setting up PostgreSQL


## <b>For ALL OSes</b>

<br>
To create a new role (user) as an admin and create a database for that role in PostgreSQL on Windows, you can follow these steps:

### Step 1: Open Command Prompt as Administrator
Open the Command Prompt with administrative privileges. You can do this by right-clicking on the Command Prompt shortcut and selecting "Run as administrator."

### Step 2: Navigate to PostgreSQL Bin Directory
Navigate to the bin directory of your PostgreSQL installation. The default path is typically something like:

```bash
cd C:\Program Files\PostgreSQL\{Your PostgreSQL Version}\bin
```

### Step 3: Log in to PostgreSQL
Use the `psql` command to connect to the PostgreSQL server. Replace `your_username` and `your_database` with the desired values:

```bash
psql -U postgres
```

### Step 4: Create a New Role (User)
Run the following SQL command to create a new role (user). 

```sql
CREATE ROLE betternship WITH LOGIN PASSWORD '238837' CREATEDB;
```

The `CREATEDB` option allows the new user to create databases.

### Step 5: Create a Database for the New User
Still within the `psql` session, you can create a new database and assign it to the user.

```sql
CREATE DATABASE new_database WITH OWNER = betternship;
```

### Step 6: Grant Necessary Privileges
You may need to grant additional privileges to the new user. For example, if you want the user to have all privileges on the new database, you can run:

```sql
GRANT ALL PRIVILEGES ON DATABASE new_database TO betternship;
```

### Step 7: Exit `psql`
Exit the PostgreSQL command-line interface:

```sql
\q
```

That's it! You have now created a new role (user) as an admin and a database for that role in PostgreSQL on Windows.

#### Windows

1. Download and install PostgreSQL from the [official website](https://www.postgresql.org/download/windows/).
2. During installation, set a password for the `postgres` user.
3. Create a new database:

```bash
createdb -U postgres betternship
```

#### Linux

1. Install PostgreSQL using your package manager (e.g., apt, yum, pacman).
2. Start the PostgreSQL service:

```bash
sudo service postgresql start
```

3. Create a new database:

```bash
createdb betternship
```

#### Mac

1. Install PostgreSQL using Homebrew:

```bash
brew install postgresql
```

2. Start the PostgreSQL service:

```bash
brew services start postgresql
```

3. Create a new database:

```bash
createdb betternship
```

## Running Jest and Writing Tests

### Prerequisites

Make sure you have completed the server setup and have the necessary dependencies installed.

Install Jest globally:

```bash
npm install -g jest
```

### Running Jest

Run Jest to execute tests:

```bash
npm test
```

### Writing a Simple Test

Add your test files to the `__tests__` directory. For example, create a file named `example.test.js`. Write a simple test in this file:

```javascript
// example.test.js

const add = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

Run the test:

```bash
npm test
```

Congratulations! You've successfully set up the Betternship server, configured PostgreSQL, and executed a Jest test. Feel free to customize the codebase and tests according to your needs.