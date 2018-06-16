# bookboat

## Developers

* [Philipp Kynast](https://github.com/PhlppKnst)
* [Miguel Caceres](https://github.com/foxneo)

## DEVELOPMENT

```
$ docker-compose -f docker-compose-dev.yml up
```

This starts the server and the client in docker. The page is reachable on "http://localhost:80".
Both client and server run on live servers. So after every code change and saving of a file the typescript will be recompiled and the servers are restarted.

## DEBUGING

For the client use the "debugger" keyword and chrome.
For the server use the "Launch in Docker" or "Attach in Docker" vscode configuration.
It takes aroud 20 secs till a breakpoint is hot. Don't no why.

## DEPLOYMENT
```
$ SECRET='SECRET' node index.js
```

## Docker build and run
```
$ docker build -t coffeeteam/bookboat .
```
```
$ docker run -p 3000:3000 -e SECRET='SECRET' -m server -d coffeeteam/bookboat
```

## Docker compose Fake keycloack
```
$ docker-compose up --build
```

## Run ng server
```
$ ng serve
```

## create new component module
```
$ ng g c components/samplePage
```