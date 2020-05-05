module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
      "browser": true,
      "node": true
  },
  "rules": {
      "indent": ["error", 4],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      'react/jsx-indent': [
        'error',
        4
    ],
  }
};