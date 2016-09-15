let request = require('request');

function unixTimestamp() {
  return new Date().getTime();
}

// Example interface to facilitate sending messages to the Dialog API.
let Dialog = {
  incoming: function(message) {
    var payload = {
      message: {
        conversation_distinct_id: message.chatId,
        creator_distinct_id: message.from,
        distinct_id: message.id,
        platform: 'kik',
        provider: 'kik',
        mtype: message.type,
        sent_at: message.timestamp,
        properties: {
          text: message.body
        }
      }
    }

    return track(payload)
  },

  outgoing: function(message) {
    var payload = {
      message: {
        conversation_distinct_id: message.chatId,
        distinct_id: uuid(),
        platform: 'kik',
        provider: 'kik',
        mtype: message.type,
        sent_at: new Date().getTime(),
        properties: {
          text: message.body
        }
      }
    }

    return track(payload)
  },

  track: function(payload) {
    let host = null;
    if (process.env.BOT_HOST) {
      host = process.env.BOT_HOST + '/api'
    }
    else {
      host = 'https://api.dialoganalytics.com'
    }

    let endpoint = host + '/v1/b/' + process.env.DIALOG_BOT_ID + '/track?token=' + process.env.DIALOG_TOKEN;

    return request({ method: 'POST', uri: endpoint, json: payload });
  }
}

module.exports = Dialog;
