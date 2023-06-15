const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let kanal = db.fetch(`kanal${message.guild.id}`)
if (!kanal) return message.reply("Partner Kanalı Ayarlanmamış!")
let log = db.fetch(`log${message.guild.id}`)
if (!log) return message.reply("Log ayarlanmamış!")
let text = db.fetch(`text_${message.guild.id}`)
if (!text) return message.reply("Partner Texti Ayarlanmamış!")
let gidenurl = args[0]
if (!gidenurl) return message.reply("Lütfen bir sunucu ID gir!")
let text2 = db.fetch(`text_${gidenurl}`)
if (!text2) return message.reply("Belirtilen sunucunun texti ayarlanmamış!")
let log2 = db.fetch(`log${gidenurl}`)
if (!log2) return message.reply("Belirtilen sunucunun logu ayarlanmamış!")
let kanal2 = db.fetch(`kanal${gidenurl}`)
if (!kanal2) return message.reply("Belirtilen sunucunun partner kanalı ayarlanmamış!")

const embed = new Discord.EmbedBuilder()
.setTitle("Partner İsteği Geldi!")
.setDescription(`Partnerlik Atan Sunucu: ${message.guild.name}\n\nPartnerlik Atan: ${message.author}`)
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Evet")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("evet"),
new Discord.ButtonBuilder()
.setLabel("Hayır")
.setStyle(Discord.ButtonStyle.Danger)
.setCustomId("hayır")
)
client.channels.cache.get(log2).send({embeds: [embed], components: [row]})
message.channel.send("Başarıyla partnerlik isteği gönderildi.")
db.set(`partnerlikbekleniyor_${gidenurl}`, message.guild.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-ol"
};
