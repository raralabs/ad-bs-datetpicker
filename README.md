![repo-logo](media/img/repo-beta.svg "react-patro")

![npm-version](https://img.shields.io/npm/v/react-patro) ![minified-size](https://img.shields.io/bundlephobia/min/react-patro) ![licence](https://img.shields.io/npm/l/react-patro) ![Pull Reqest](https://img.shields.io/badge/PRs-Welcome-blue)

## The project is still under active development. So, don't use it on production. `PRs are welcome`.

---

AD and BS Calendar functions as hooks and component

# [Demo](https://react-patro.netlify.app/)

# Installation

The package can be installed via [npm](https://github.com/npm/cli)

```cli
npm install @raralsbs/react-patro --save
```

or via [yarn](https://github.com/yarnpkg/yarn)

```cli
yarn add @raralsbs/react-patro
```

## css

You need to import `css` separately in the project. This is provided separately, so you can override the css as per your wish. Css customization is stil under progress.

```jsx
import "react-patro/src/styles.css";
```

## Documentation

Documentation and demo available at [here](https://react-patro.netlify.app/)

## How to start for development

run the react-patro source code. This generates dist folder

```javascript
    npm run dev

```

then go to example folder which is basically create-react-app template where react-patro is installed from the local react-patro source code. Here you can play around with the code

```javascript
    cd example && npm i
    npm start
```

## How to remove Ugly error message ( for development)

Comment the terser `rollup.config.js` from line 33 & 8 . and rebuild the code.The should remove the code uglifying process.

## License

React Patro is [MIT Licensed](LICENSE)
