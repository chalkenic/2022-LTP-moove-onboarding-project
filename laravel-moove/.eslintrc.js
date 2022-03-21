module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:all",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "no-magic-numbers": [
            "error",
            {
                "ignore": [0, 1]
            }
        ],
        "no-undef": "off",
        "id-length": "off",
        "class-methods-use-this": "off",
        "sort-keys": "off",
        "one-var": "off",
        "sort-vars": "off",
        "func-style": "off",
        "space-before-function-paren": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
