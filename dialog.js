let request = require('request');

function unixTimestamp() {
  return new Date().getTime();
}

// Example interface to facilitate sending messages to the Dialog API.
let Dialog = {
  track: function(message) {
    let endpoint = 'https://api.dialoganalytics.com/v1/messages?token=' + process.env.DIALOG_TOKEN;

    var payload = {
      message: {
        platform: 'kik',
        type: message.type,
        from: message.from || process.env.DIALOG_TOKEN,
        to: message.to || process.env.DIALOG_TOKEN,
        sent_at: unixTimestamp(),
        distinct_id: message.id,
        properties: {
          text: message.body
        }
      }
    }
  
    return request({ method: 'POST', uri: endpoint, json: payload });
  }
}

module.exports = Dialog;
