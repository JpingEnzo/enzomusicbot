const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [''],
  description: "Display the bot connection stats",
  run : async (msg) => {
    let pingEmbed = new MessageEmbed()
    .setTitle(':ping_pong: Pinging...')
    .setColor("0x000001");

    const pingMsg = await msg.channel.send(pingEmbed);

    pingEmbed = pingEmbed
    .setTitle(':ping_pong: Pong!')
    .setDescription(
    `‎\n:hourglass: ${Math.floor(((pingMsg.editedTimestamp || pingMsg.createdTimestamp) - (msg.editedTimestamp || msg.createdTimestamp))/2) + (Math.floor(Math.random() * 100) + 1  )}ms
     \n:stopwatch: ${(pingMsg.editedTimestamp || pingMsg.createdTimestamp) - (msg.editedTimestamp || msg.createdTimestamp)}ms${msg.client.ws.ping ? `
     \n:heartbeat: ${Math.round(msg.client.ws.ping)}ms` : ''}
    `)
    .setColor("0x000001");
    
    pingMsg.edit(pingEmbed);
  }
};
