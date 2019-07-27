const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8000;
app.use(morgan('common'));

const apps = require('./playstore');

app.get('/apps', (req, res) => {
    const { sort, genres } = req.query;

    let results = apps;

    if (sort) {
        if (!['rating', 'app'].includes(sort)) {
            return res.status(400).send('Please enter a sort value of either Rating or App')
        }
    }

    if (genres) {
        if (!['action', 'puzzle', 'strategy', 'casual', 'arcade', 'card'].includes(genres.toLowerCase())) {
            return res.status(400).send('Please enter genre of either Action, Puzzle, Strategy, Casual, Arcade, or Card')
        }
        results = apps.filter(app => app.Genres.toLowerCase().includes(genres.toLowerCase()));
    }


    if (sort) {
        results
            .sort((a, b) => {
                return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
            });
    }

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})
