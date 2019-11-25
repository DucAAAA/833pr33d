module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "amd": true
  },
  "rules": {
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": true,
          "object": true
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ]
  }
}
