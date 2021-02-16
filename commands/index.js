//------Discord.js------
const Discord = require("discord.js");
const token = require("./token.json");

const bot = new Discord.Client();

//------Connection------
bot.on("ready",async () => {
    console.log("Le Bot est allumé")
    bot.user.setStatus("online");
    setTimeout(() => {
        bot.user.setActivity("C - Développement - Entraide");
    }, 100)
})

bot.on("message", async message => {
    if(message.content === "C - DEV Annonce"){
        let embed = new Discord.MessageEmbed()
        .addField("🔗**LIEN**", "https://urgencesmods.fr/mods/?s=ClownFiveM")
        .setColor("#A62019")
        message.channel.send(embed)
    }
})

bot.on("guildMemberAdd", async member => {
    
    let bienvenue = bot.guilds.cache.get("806647519664668742").channels.cache.get("806647520238501900")

    member.roles.add("806647519664668743")

    bienvenue.send(`:globe_with_meridians: Salut ! ${member}, bienvenue sur **C - Développement - Entraide** ! :globe_with_meridians:`)

    bienvenue.send(embed)

})

bot.login(token.token);