module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standart"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-useless-constructor": "off"
    }
}
