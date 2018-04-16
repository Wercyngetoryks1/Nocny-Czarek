const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDM1NTY3NDYzMDI4MjI4MDk2.Dba1pQ.U31yz9aWst6M_Zsy6PR8eZ2w39Y);
