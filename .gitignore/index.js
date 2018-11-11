const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("-");

bot.on('ready', function() {
    bot.user.setGame("Faire des sondages");
    console.log("Ready");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Informations Du Discord")
        .addField("Nom du Discord", message.guild.name)
        .addField("***Crée le***", message.guild.createdAt)
        .addField("__Tu as rejoin le Discord le__", message.member.joinedAt)
        .addField("`Utulisateurs sur le Discord`", message.guild.memberCount)
        .setColor("#FA8258")
    message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "sondage")) {
        if(message.author.id == "426478582345236492", "343846593986035723", "328487078801309701", "278205425890099200", "403606064177741826", "303540685443694593", "277433653577908224", "222000767479971840", "487931290029391872", "293085689405243415", "286116265611755520", "465117763690692638"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("#9A041D")
                .setTimestamp()
            message.guild.channels.find("name", "infogame").sendEmbed(embed)
            .then(function (message) {
                message.react("✔")
                message.react("✖")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission.")
}}})
