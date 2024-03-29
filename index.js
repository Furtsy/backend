const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// MongoDB Connection
mongoose
    .connect(
        'mongodb://localhost:27017/packed-cms', // MongoDB URL
        { useNewUrlParser: true, useUnifiedTopology: true } // MongoDB Options
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', function (req, res) {
    res.json({ message: 'Packed CMS Backend' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('Backend Started PORT:' + PORT))
