const bodyParser = require('body-parser');
const express = require('express');
const Keycloak = require('keycloak-connect');
const session = require('express-session');
const Api = require('./api');

module.exports = class App {

    constructor() {
        this.app = express();
        var keycloak = this.middleWare(this.app)
        this.mountRoutes(this.app,keycloak)
    }

    mountRoutes(app,keycloak) {
        const api = new Api()
        app.use('/api', api.apiRoutes(keycloak));
    }

    middleWare(app) {

        const memoryStore = new session.MemoryStore();
        app.use(session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: true,
            store: memoryStore
        }));
        const keycloak = new Keycloak({ store: memoryStore });
        app.use(keycloak.middleware())

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        app.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401);
                res.json({ "message": err.name + ": " + err.message })
            }
        })

        return keycloak
    }
}
