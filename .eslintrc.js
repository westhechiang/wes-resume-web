module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "prefer-rest-params": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "arrow-body-style": "off",
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "func-names": 0,
    "import/no-named-as-default": 0,
    "object-curly-newline": 1,
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  }
};
