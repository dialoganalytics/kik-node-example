# Kik Node.js Chatbot

An example [Kik](https://kik.com) node.js chatbot integrated with [Dialog Analytics](https://dialoganalytics.com). Built with [kikinteractive/kik-node](https://github.com/kikinteractive/kik-node).

- [Dialog Documention](https://docs.dialoganalytics.com)
- [Dialog API reference](https://docs.dialoganalytics.com/reference)

## Getting started

Clone this repository and run `npm install`

Create an account on https://app.dialoganalytics.com, grab your Dialog API token and bot ID.

Set environment variables in `.env`:

```
KIK_API_TOKEN=...
KIK_BOT_USERNAME=...
DIALOG_API_TOKEN=...
DIALOG_BOT_ID=...
```

Get your Kik API token at https://dev.kik.com

__Local development:__ When developping locally, use a service like ngrok.com to expose a server running on your machine. You must then set the `BOT_HOST` environment variable with the URL assigned by ngrok:

```bash
$ ngrok http 8080
```

Start the bot:

```bash
$ npm start
```

Open the Kik application, find your bot and exchange a few messages. Messages will be sent to Dialog's API.

## Go further

Read more on how to make the most out of the possibilities offered by Dialog here: https://dialoganalytics.com
