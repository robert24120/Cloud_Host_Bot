const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'NjM2NTU5MTEzNjM1MTAyNzIy.XbBdHw.-yDWXcuu16aGP-p784YsFdsjCSc';

const PREFIX = '*';

var Version = ':star: Version 1.1.5 Beta :star:';

bot.on('ready', () => {
    console.log('Your assistant is online my diamond');
    bot.user.setActivity('Rebel Meeting Setup', { type: 'LISTENING' }).catch(console.error);
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'help':
            message.channel.sendMessage('Hello :heart: Say in #tickets -new and wait for a @staff member reply in the chat :heart:')
            break;
        case 'stafflist':
            message.channel.sendMessage(':star: Owner GreenGold:star: Staff Cyan Diamond :star: Staff Emeraldite :star: Rebel Leader 𝓗𝓸𝓵𝓶𝓺𝓾𝓲𝓼𝓽𝓲𝓽𝓮 :star:')
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

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`:star: Welcome to our server, ${member} please read the rules in the rules channel :star:`)

});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'bootsystem':
            if(!message.member.roles.find(r => r.name === "Kara")) return message.channel.send('Sorry i dont understand this command please try agian :heart:')
            .then(msg => msg.delete(500));
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



bot.login(token);
