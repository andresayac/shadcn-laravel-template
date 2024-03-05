# Laravel Breeze with Shadcn/UI

## Installation
```bash
composer install
```
## Migrate
```bash
php artisan migrate
```
## Install NPM Packages
```bash
npm install
```
## Config Link Valet o Herd 
```bash
valet link
#or 
herd link
```

## Development Mode
```bash
npm run dev
```

## Production Mode
```bash
npm run prod
```

## If you are using VSCode add this configuration
1. Create Folder `.vscode` in root project
2. Create File `settings.json` in `.vscode` folder
```json
{
    "tailwindCSS.includeLanguages": {
        "plaintext": "html"
    },
    "tailwindCSS.experimental.classRegex": [
        ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
        ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
        ["tw=\"([^\"]*)\""]
    ],
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
}
```
