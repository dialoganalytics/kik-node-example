# Kik Node.js Bot

An example kik node.js bot. Built with [kik-node](https://github.com/kikinteractive/kik-node).


## Getting started

Configure the bot with your credentials in `.env`:

```
KIK_API_TOKEN=...
DIALOG_TOKEN=...
```

Start the bot:

```bash
$ npm start
```

In development, start a local tunel and set the `BOT_HOST` environment variable:

```bash
$ ngrok http 8080
```

Open the [kik application](https://kik.com), find your bot and start interacting with it.
