# New project start guide

1. Create new repository on github
[link](https://github.com/new)

2. Clone github directory to your computer
```bash
git clone LINK_TO_NEW_REPO
```
3. Initialize webpack
```bash
cd NEW_REPO
npm init -y
npm install webpack webpack-cli --save-dev
```
4. Create necessary files and folders
```bash
mkdir src
touch src/index.js
touch src/style.css
mkdir dist
touch dist/index.html
```

Boilerplate html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

5. Configure webpack
```bash
touch webpack.config.js
```

Config file
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
```

Install asset loaders and build webpack with configuration
```bash
npm install --save-dev style-loader css-loader
npx webpack --config webpack.config.js
```

index.js
```javascript
import './style.css';
```

6. Install Material icons
```bash
npm install material-icons@latest
```
index.js
```javascript
import 'material-icons/iconfont/material-icons.css';
```

7. Run webpack continuously following all changes
```bash
npx webpack --watch
```
