# quiteaquiz



## Project frontend setup

install Node and NPM
https://www.npmjs.com/get-npm

install vue cli (optional) 
```
npm install -g @vue/cli
```

pull the latest changes and run

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


## Flask Setup
Install Pip
```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
```
Install Pipenv
```
pip install --user pipenv
```
### Install dependencies from Pipfile and setup a python3 virtual env
```
pipenv install -three
```
### Enter Pipenv shell and start flask backend
```
pipenv shell
flask run
```
Flask will pickup enviroment variables from .env file
