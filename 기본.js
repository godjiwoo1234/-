const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzExMDQzNDUwNDUxMjYzNDg4.Xr9Q9Q.UoFzQFUViGSFThCLiGT3crEGsmw';

client.on('ready', () => {
  console.log('켜졌습니다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);