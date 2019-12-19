const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'NjI0OTYwMTIwOTkxOTA3ODYx.XfuSlg.mVJal_jv_6y2eTSgAzLxtzCSKn4';

const PREFIX = '*';

var Version = ':heart: Eevee Version 1.0.5 Beta :heart:';

bot.on('ready', () => {
    console.log('Eevee is online YAY');
    bot.user.setActivity('Spotify', { type: 'LISTENING' }).catch(console.error);
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'help':
            message.channel.sendMessage('Hello :heart: Say in #tickets -new and wait for a @staff member reply in the chat :heart:')
            break;
        case 'stafflist':
            message.channel.sendMessage(':heart: bot owner woooosh bot admin Robert24120 :heart:')
            break;
        case 'botversion':
            message.channel.sendMessage(Version)
            break;
        case 'clearchat':

            if (!args[1]) return message.channel.sendMessage(':heart: Sorry, i dont underand this command. Please type a nummer at the end. :heart:')
            message.channel.bulkDelete(args[1]);
            break;


    }
});

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "welcome-bye");
    if (!channel) return;

    channel.send(`:heart:

    ░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌
    ░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐
    ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
    ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
    ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌
    ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌
    ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
    ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌
    ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌
    ▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐
    ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
    ▐▒▒▒▀▀▄▄▒▒▒▄
    ${member} :heart:`)

});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'bootsystem':
            if(!message.member.roles.find(r => r.name === "Kara")) return message.channel.send('Sorry i dont understand this command please try agian :heart:')
            .then(msg => msg.delete(700));
            message.reply('Please select a customization mode :heart:')
     break;

    }

});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'normal':
        if(!message.member.roles.find(r => r.name === "Kara")) return message.channel.send('Acces Deanied :heart:')
            .then(msg => msg.delete(5000));
           message.reply('Okay :heart: How do you do. My own Kara Pearls. :heart: Thank you for bringing me into the world. :heart: I am at your eternal service. :heart: Welcome to your new assistant. :heart:')
     break;

    }

});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'Systemreset':
            if(!message.member.roles.find(r => r.name === "Kara")) return message.channel.send('Sorry i dont understand this command please try agian :heart:')
            .then(msg => msg.delete(10));
            message.reply(':heart: Are you sure you want to reset me? Yes/no :heart:')
     break;

    }

});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'yes':
            if(!message.member.roles.find(r => r.name === "Kara")) return message.channel.send('Sorry i dont understand this command please try agian :heart:')
            .then(msg => msg.delete(10));
            message.reply(':heart: System Reseted Please Type *bootsystem to set my up Bye :heart:')
     break;

    }

});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

    case "poll":
       const Embed = new RichEmbed()
       .setColor(0xFFC300)
       .setTitle(":heart: Inititrate Poll :heart:")
       .setDescription("*poll to initiate a simple yes or no poll");

       if(!args[1]){
           message.channel.send(Embed);
       }
       break;
    }
  });


bot.login(token);
