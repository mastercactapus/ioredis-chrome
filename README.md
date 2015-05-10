## ioredis-chrome

A wrapper (build and config really) around ioredis allowing it to be used from a chrome app

## Usage

Bower and NPM installs are supported. Bower will use a pre-built js file from dist/ (node and global style) and NPM installs will require being part of a webpack build.

You will need to add tcp permissions to your `manifest.json` as well as a blank `tcpServer` section for `chrome-net` to not complain.

Example:
```json
{
  "manifest_version": 2,
  "name": "Hello World",
  "version": "2.1",
  "minimum_chrome_version": "23",
  "icons": {
    "16": "icon_16.png",
    "128": "icon_128.png"
  },


  "sockets": {
    "tcpServer": {},
    "tcp": {
      "connect": ["*"]
    }
  },


  "app": {
    "background": {
      "scripts": ["main.js"]
    }
  }
}
```

For API information see the `ioredis` repo: https://github.com/luin/ioredis

## Building

```bash

#from the root of the repo
npm install
npm run-script build
```

