# Simple Login Application

This is a simple login application written in Node.js with Express.js. It allows the user to enter a username and password, which are then saved to a text file.

## Prerequisites

1. **Node.js and npm**: Make sure you have the latest versions of Node.js and npm installed on your computer. You can download them from the [Node.js website](https://nodejs.org/).

2. **Git (optional)**: If you want to clone this project from a Git repository, make sure you have Git installed. You can download it from the [Git website](https://git-scm.com/).

## Installation Instructions

1. **Clone the project**: Clone this project from the Git repository or download it as a ZIP archive and extract it in your chosen directory.
   
    ```bash
    git clone https://link-to-your-repository.git
    ```

2. **Navigate to the project directory**: Navigate to the directory where you downloaded the project.
   
    ```bash
    cd your-project-name
    ```

3. **Install dependencies**: Run the following command to install all required dependencies.
   
    ```bash
    npm install
    ```

## Running the Application

After installing the dependencies, you can start the server by running the following command:

```bash
node server.js
```

The server will be running on port 4000. You can change the port by editing the `PORT` variable in the `server.js` file.

## File Structure

```
login-app/
├── node_modules/        # Installed Node.js modules
├── public/              # Public files (HTML, CSS, JavaScript)
│   ├── index.html       # Login page
│   ├── style.css        # CSS stylesheet
│   └── script.js        # JavaScript script handling login logic
├── logins.txt           # File storing login data
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Locked dependencies file (auto-generated)
└── server.js            # Express.js-based Node.js server
```

## Contributing

Contributions are welcome! If you want to contribute to this project, please open an issue or submit a pull request with your proposed changes.

## Technologies Used

- **Node.js**: JavaScript runtime environment on the server side.
- **Express.js**: Web framework for Node.js, making it easy to build web applications and APIs.
- **HTML, CSS, JavaScript**: Basic technologies for building user interfaces and handling events in the browser.

## Author

Mike Fabisz

## License

This project is licensed under the Apache License 2.0. For more information, see the [LICENSE](LICENSE) file.
