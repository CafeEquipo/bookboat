# bookboat

## Developers

* [Philipp Kynast](https://github.com/PhlppKnst)
* [Miguel Caceres](https://github.com/foxneo)

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