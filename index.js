const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk1NTI1MjQ3NjI0OTM3NTIy.Xo23SQ.NW0udcBs5HA0QklGxE4IAt7UUhs';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
            break; 
    }
})




bot.login(token);