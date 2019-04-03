const express = require('express');
const path = require('path');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');
const app = express();

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.render('dashboard', {
        user: req.user
    })
);

// Dashboard
router.get('/dist', ensureAuthenticated, (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
        res.sendFile('index.html', {root: path.join(__dirname, '../dist')});
    }
);

module.exports = router;
