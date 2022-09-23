const discord = require("discord.js");
require('discord-reply');
const pagination = require("discord.js-pagination");

module.exports.run = async (Client, message, prefix, args) => {
  if (!message.content.startsWith(prefix)) return;

  const page1 = new discord.MessageEmbed().setTitle("How to use?")
    .setDescription(`> *Usage:*
    > ![Collection name or Aliases] [NFT number]
    > 
    > *Example:*
    > !Boxcube 20 or !Boxcube 20
    
    &

    > ![Collection name-rank or Aliases] [Ranking]
    > 
    > *Example:*
    > !Boxcube 0 or !bxcb 0-rank 1 or !Boxcube-rank 1

    [**NOTE :** NFT number must be subtracted 1, if you have NFT number 10 you must type it with number 9.]
    `);

  const page2 = new discord.MessageEmbed().setTitle(
    "The collection we provide:"
  ).setDescription(`**Collection name :** *Boxcube 0 or !bxcb 0*
  **Aliases :** *["Boxcube"]*

  **Collection name :** *asacnear*
  **Aliases :** *["asac"]*

  **Collection name :** *cartelgen0*
  **Aliases :** *["cg0"]*

  **Collection name :** *cartelgen1*
  **Aliases :** *["cg1"]*

  **Collection name :** *grimmsarmy*
  **Aliases :** *["grimms"]*`);

  const page3 = new discord.MessageEmbed().setTitle(
    "The collection we provide:"
  ).setDescription(`**Collection name :** *kaizofighters*
  **Aliases :** *["kaizo"]*

  **Collection name :** *monkeonear*
  **Aliases :** *["monke"]*

  **Collection name :** *secretskelliessociety*
  **Aliases :** *["sss"]*

  **Collection name :** *undeadarmy*
  **Aliases :** *["uss"]*
  
  **Collection name :** *vexedapesclub*
  **Aliases :** *["vexedapes"]*`);

  // const page4 = new discord.MessageEmbed().setTitle(
  //   "The collection we provide:"
  // ).setDescription(`**Collection name :** *Boxcube 0 or !bxcb 0*
  // **Aliases :** *["Boxcube"]*

  // **Collection name :** *asacnear*
  // **Aliases :** *["asac"]*

  // **Collection name :** *cartelgen0*
  // **Aliases :** *["cg0"]*

  // **Collection name :** *cartelgen1*
  // **Aliases :** *["cg1"]*
  
  // **Collection name :** *grimmsarmy*
  // **Aliases :** *["grimms"]*`);
  
  // const page5 = new discord.MessageEmbed().setTitle(
  //   "The collection we provide:"
  // ).setDescription(`**Collection name :** *Boxcube*
  // **Aliases :** *["Boxcube"]*

  // **Collection name :** *asacnear*
  // **Aliases :** *["asac"]*

  // **Collection name :** *cartelgen0*
  // **Aliases :** *["cg0"]*

  // **Collection name :** *cartelgen1*
  // **Aliases :** *["cg1"]*
  
  // **Collection name :** *grimmsarmy*
  // **Aliases :** *["grimms"]*`);

  // const page6 = new discord.MessageEmbed().setTitle(
  //   "The collection we provide:"
  // ).setDescription(`**Collection name :** *Boxcube*
  // **Aliases :** *["Boxcube"]*

  // **Collection name :** *asacnear*
  // **Aliases :** *["asac"]*

  // **Collection name :** *cartelgen0*
  // **Aliases :** *["cg0"]*

  // **Collection name :** *cartelgen1*
  // **Aliases :** *["cg1"]*
  
  // **Collection name :** *grimmsarmy*
  // **Aliases :** *["grimms"]*`);

  const pages = [page1, page2, page3];

  const emoji = ["⏪", "⏩"];

  const timeout = "30000";

  pagination(message, pages, emoji, timeout);
};

module.exports.help = {
  name: "info",
  aliases: [],
};
