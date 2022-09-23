// connecting to discord
const Discord = require('discord.js')
const express = require("express")
const app = express()

// connect us to the config.json file
const config = require('./config.json');

// create a new Discord Client 
const Client = new Discord.Client({disableEveryone: true});

// we make a new system for the cmds
Client.commands = new Discord.Collection();

// require the fs module
const fs = require('fs');

// when i type xpfile it will connect to the xp.json file
// const xpfile = require('./xp.json');

//define a prefix
const prefix = ('!');

app.get("/", (req, res) => {
  res.send("hello world")
})

app.listen(3000, () => {
  console.log("project is ready")
})

// it creates a new function for our aliases
Client.aliases = new Discord.Collection();

// Commands Handler 

// get into the cmds folder
fs.readdirSync('./rarity/').forEach(dir => {

    //in the cmds folder, we gonna check for the category
    fs.readdir(`./rarity/${dir}`, (err, files) => {

        // console log err (catch err)
        if (err) throw err;

         // checking if the files ends with .js if its a javascript file
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

         // if there is no cmds in the file it will return
        if (jsFiles.length <= 0) {
          console.log("Can't find any commands!");
          return;
        }

        
        jsFiles.forEach(file => {

            // console the loaded cmds 
            var fileGet = require(`./rarity/${dir}/${file}`);
            console.log(`File ${file} was loaded`)

            // gonna let the cmds run
            try {
                Client.commands.set(fileGet.help.name, fileGet);

                // it search in the cmds folder if there is any aliases
                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
              // catch err in console  
                return console.log(err);
            }
        });
    });
});


// The message that we will get in terminal when we lunch the bot
Client.on("ready", () => {
    console.log(`Hi, ${Client.user.username} ❤️ is now online!`);

    // Set the user presence
    Client.user.setPresence({
        status: "online",
        game: {
            name: "Rarity",
            type: 3,
        }
    }); 
})



Client.on("message", async message => {
    if(message.author.Client || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    // it will make the cmd work with him orginal name and his aliases
    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));

    if(commands) commands.run(Client, message, args, prefix);

})

// Login To Discord with your app's Token
Client.login(config.token);