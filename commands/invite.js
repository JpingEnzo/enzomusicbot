const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../config.json").prefix;

module.exports = {
  name: "invite",
  aliases : ['invite','inv'],
  description: "invite link",
  run: (message, args) => {
    const data = [];
    const { commands } = message.client;
    if (!args.length) {
      
      
          const inviteEmbed = new MessageEmbed()
          .setColor('0x000001')
          
          .setDescription(`[**INVITE ME**](https://discord.com/api/oauth2/authorize?client_id=872161638873178152&permissions=8&scope=bot)`,true)

      return message.channel.send(inviteEmbed)
         ;
}}};
