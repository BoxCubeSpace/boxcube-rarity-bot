const discord = require("discord.js");
require('discord-reply');
const jsonrank = require("../../projectjson/cartelgen0.json");

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;

  function searchBoxcube(edition) {
    return jsonrank.filter(function (data) {
      return data.rank == edition;
    });
  }
  var found = searchBoxcube(args[0]);

  if (found[0] != undefined) {
    const Boxcube = new discord.MessageEmbed()
      .setTitle(`${found[0].metadata.title}`)
      .setURL(
        `https://paras.id/token/cartelgen1.neartopia.near::${found[0].token_series_id}/${found[0].token_series_id}`
      )
      .setDescription(`🏆  **RANK** ・ **${found[0].rank}**

      📦  **SUPPLY** ・ **1555**
      
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
      
      > ***${found[0].metadata.attributes[6]["trait_type"]}*** ・ ${found[0].metadata.attributes[6]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[6]["rarity_score"]}

      > ***${found[0].metadata.attributes[7]["trait_type"]}*** ・ ${found[0].metadata.attributes[7]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[7]["rarity_score"]}

      > ***${found[0].metadata.attributes[8]["trait_type"]}*** ・ ${found[0].metadata.attributes[8]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[8]["rarity_score"]}

      > ***${found[0].metadata.attributes[9]["trait_type"]}*** ・ ${found[0].metadata.attributes[9]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[9]["rarity_score"]}

      > ***${found[0].metadata.attributes[10]["trait_type"]}*** ・ ${found[0].metadata.attributes[10]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[10]["rarity_score"]}

      > ***${found[0].metadata.attributes[11]["trait_type"]}*** ・ ${found[0].metadata.attributes[11]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[11]["rarity_score"]}

      > ***${found[0].metadata.attributes[12]["trait_type"]}*** ・ ${found[0].metadata.attributes[12]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[12]["rarity_score"]}

      > ***${found[0].metadata.attributes[13]["trait_type"]}*** ・ ${found[0].metadata.attributes[13]["value"]}
      > ***Score*** ・ ${found[0].metadata.attributes[13]["rarity_score"]}
      
      🎯 **TOTAL SCORE** ・ ***${found[0].total_rarity_score}***`
      )

    message.lineReply(Boxcube);;
  } else {
    const Boxcubehandle = new discord.MessageEmbed().setTitle(
      `Ranking is not available for this collection or you misspelled the name.

        *Usage:*
        ![Collection-name or aliases] [NFT number]
        *Example:*
        Boxcube 0 or !bxcb 0`
    );
    message.reply(Boxcubehandle);
  }
};

module.exports.help = {
  name: `cartelgen0-rank`,
  aliases: ["cg0-rank"],
};