const discord = require("discord.js");
require('discord-reply');
const jsonrank = require("../../projectjson/nearrobotics.json");

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;

  function searchBoxcube(edition) {
    return jsonrank.filter(function (data) {
      return data.token_series_id == edition;
    });
  }
  var found = searchBoxcube(args[0]);

  if (found[0] != undefined) {
    const Boxcube = new discord.MessageEmbed()
      .setTitle(`${found[0].metadata.title}`)
      .setURL(
        `https://paras.id/token/nearrobotics.near::${found[0].token_series_id}/${found[0].token_series_id}`
      )
      .setDescription(`🏆  **RANK** ・ **${found[0].rank}**

      📦  **SUPPLY** ・ **1444**
      
      > ***${found[0].metadata.attributes[0]["trait_type"]}*** ・ ${found[0].metadata.attributes[0]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[0]["rarity_score"]}
      
      > ***${found[0].metadata.attributes[1]["trait_type"]}*** ・ ${found[0].metadata.attributes[1]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[1]["rarity_score"]}
      
      > ***${found[0].metadata.attributes[2]["trait_type"]}*** ・ ${found[0].metadata.attributes[2]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[2]["rarity_score"]}
      
      > ***${found[0].metadata.attributes[3]["trait_type"]}*** ・ ${found[0].metadata.attributes[3]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[3]["rarity_score"]}
      
      > ***${found[0].metadata.attributes[4]["trait_type"]}*** ・ ${found[0].metadata.attributes[4]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[4]["rarity_score"]}
      
      > ***${found[0].metadata.attributes[5]["trait_type"]}*** ・ ${found[0].metadata.attributes[5]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[5]["rarity_score"]}

      
      🎯 **TOTAL SCORE** ・ ***${found[0].total_rarity_score}***`
      )
      
      .setColor("RANDOM")
      .setImage(`${found[0].metadata.media}`)
      .setFooter(
        "Made by Boxcube.",
        "https://firebasestorage.googleapis.com/v0/b/boxcube-33f6d.appspot.com/o/boxcube%2FBOXCUBE.png?alt=media&token=b008e005-c91b-4852-92a8-3eaba8cb2d73"
      )

    message.lineReply(Boxcube);
  } else {
    const Boxcubehandle = new discord.MessageEmbed().setTitle(
      `Ranking is not available for this collection or you misspelled the name.

        > *Usage:*
        > ![Collection-name or aliases] [NFT number]
        > *Example:*
        > !Boxcube 0 or !bxcb 0`
    );
    message.reply(Boxcubehandle);
  }
};

module.exports.help = {
  name: `nearrobotics`,
  aliases: ["nrobotics"],
};
