const Discord = require("discord.js");

const TOKEN = "NTAyNTIyMzk1NjMwODk1MTEw.DqpKnA.YBKf7pVbzMvqwrL0EB1pr-thFdE";

const PREFIX = "?";

var bot = new Discord.Client();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                  //
//                                                 ASYNC                                                                                            //
//                                                 FUNCS                                                                                            //
//                                                                                                                                                  //
//                                                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(PREFIX + "clear5")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 5});
            msg.channel.bulkDelete(fetched);
              bot.delete_message(message);
        }
        clear();

    }
});

bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(PREFIX + "clear10")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 10});
            msg.channel.bulkDelete(fetched);
              bot.delete_message(message);
        }
        clear();

    }
});

bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith(PREFIX + "clear20")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 20});
            msg.channel.bulkDelete(fetched);
              bot.delete_message(message);
        }
        clear();

    }
});

bot.on("message", function(message) {
    console.log(message.content);
});

bot.on("ready", function() {
    console.log("OwO");
    bot.user.setActivity("Marcel war hier...");
    bot.user.setStatus('Online')
})




bot.on("message", async (message) => {

//COMM HIER
if (message.author.equals(bot.user)) return;

  if(!message.content.startsWith(PREFIX)) return;                                                     //SIEHE PREFIX

      var args = message.content.substring(PREFIX.length).split(" ");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
switch (args[0].toLowerCase()) {                                                                                                                    //
        case "ping":                                                                                                                                //
            message.channel.sendMessage("Pong!");                                                                                                   //
            break;                                                                                                                                  //
                                                                                                                                                    //
//  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  SWITCH  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
AB HIER CASE MIT REPoo.send


                ////
                ////
                ////
              ////////
               /////
                ///
                 /


*/



// PROF BILD           https://cdn.discordapp.com/attachments/437579038727340045/502525245857595403/484721047585685514.png


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "zeigmireinbild":
      var antw2 = new Array();

      antw2[0] = "https://cdn.discordapp.com/attachments/437582623175606282/438079364953800705/1523562824931.gif";
      antw2[1] = "https://cdn.discordapp.com/attachments/437368679110279169/437368794500038666/bild1.png";
      antw2[2] = "https://cdn.discordapp.com/attachments/437582623175606282/437614515127844864/ggwp.png";
      antw2[3] = "https://cdn.discordapp.com/attachments/437582623175606282/437614489672744970/ggmeme.PNG";
      antw2[4] = "https://cdn.discordapp.com/attachments/437582623175606282/437582690938650636/a29c3db68d9ce56df5ef1c8887796410.jpg";

var gg2 = antw2[Math.floor(Math.random() * antw2.length)];

var embed = new Discord.RichEmbed()
                  .addField("Hier hast du ein zufälliges Bild von mir...")
                  .setImage(gg2)
                  .setDescription("Zufallsbild")
                  .setFooter("NICE", "https://cdn.discordapp.com/attachments/437579038727340045/502525245857595403/484721047585685514.png")
                  .setThumbnail(message.author.avatarURL)
message.channel.sendEmbed(embed);
break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "8ball":
    var antw = new Array();

    antw[0] = "1";
    antw[1] = "2";
    antw[2] = "3";
    antw[3] = "4";
    antw[4] = "5";
    antw[5] = "6";
    antw[6] = "7";
    antw[7] = "8";
    antw[8] = "9";
    antw[9] = "10";

var gg = antw[Math.floor(Math.random() * antw.length)];
    message.channel.send({
      embed: {
                    "title": "8ball 1-10",
                    "color": 0x00ff08,
                    "description": gg,
                    footer: {"text": "Marcel ist immer richtig"}
              }
});
break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "8ball%":
    var antw = new Array();

    antw[0] = "10%";
    antw[1] = "20%";
    antw[2] = "30%";
    antw[3] = "40%";
    antw[4] = "50%";
    antw[5] = "60%";
    antw[6] = "70%";
    antw[7] = "80%";
    antw[8] = "90%";
    antw[9] = "100%";
    antw[10] = "0%";


var gg = antw[Math.floor(Math.random() * antw.length)];
    message.channel.send({
      embed: {
                    "title": "8ball 0-100%",
                    "color": 0x00ff08,
                    "description": gg,
                    footer: {"text": "Marcel ist immer richtig"}
              }
});
break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "hilfe":
                var embed = new Discord.RichEmbed()
                  .setImage("https://cdn.discordapp.com/attachments/502529924280877058/502530155345084416/KannaWave.png")
                  .addField("⃠̔̏̊", "⃠̔̏̊")
                  .addField("__***Hilfe***__", "Die verfügbaren Befehle sind:")
                  .addField("⃠̔̏̊", "⃠̔̏̊")
                  .addField("__***Profil***__", "Zeigt dir dein aktuelles Profilbild")
                  .addField("__***Links***__", "Sendet dem echten Marcel links damit ich sie dir auflisten kann...")
                  .addField("__***Bilder***__", "Sendet dem echten Marcel Bilder damit ich sie dir auflisten und zeigen kann...")
                  .setDescription("Allgemeine Hilfe")
                  .setFooter("NICE", "https://cdn.discordapp.com/attachments/437579038727340045/502525245857595403/484721047585685514.png")
                  .setColor(0x00ff08)
                message.channel.sendEmbed(embed);﻿
            break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "links":
              var embed = new Discord.RichEmbed()
                .addField("⃠̔̏̊", "⃠̔̏̊")
                .addField("[4chan](http://4chan.org)", "⃠̔̏̊")
                .setColor(0x00ff08)
                .addField("[watch2gether](https://www.watch2gether.com/rooms/gg-kjvnvpstyv2ts5maga)", "⃠̔̏̊")
                .setDescription("Links!")
                .setFooter("NICE", "https://cdn.discordapp.com/attachments/437579038727340045/502525245857595403/484721047585685514.png")

            message.channel.sendEmbed(embed);
            break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "profil":
                  var embed = new Discord.RichEmbed()
                  .addField("Das ist dein Profil", " ===> ")
                  .setColor(0x00ff08)
                  .setFooter("NICE", "https://cdn.discordapp.com/attachments/437579038727340045/502525245857595403/484721047585685514.png")
                  .setThumbnail(message.author.avatarURL)
                //  .setDescription("Embed Nachricht sollte hier rauskommen!");
            message.channel.sendEmbed(embed);
            break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "hallo":
        var embed = new Discord.RichEmbed()
        .setDescription("NANI")
        .addField("Marcel sagt hallo ", "👻")
        .setColor(0x00ff08)
        .setFooter("NICE", "https://cdn.discordapp.com/attachments/437579038727340045/502525245857595403/484721047585685514.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/437579038727340045/502525245857595403/484721047585685514.png")
        message.channel.sendEmbed(embed);
  break;


case "spam":
  message.channel.sendMessage("spam");
    message.channel.sendMessage("spam");
      message.channel.sendMessage("spam");
        message.channel.sendMessage("spam");
          message.channel.sendMessage("spam");
          message.channel.sendMessage("spam");
            message.channel.sendMessage("spam");
              message.channel.sendMessage("spam");
                message.channel.sendMessage("spam");
                  message.channel.sendMessage("spam");
                  message.channel.sendMessage("spam");
                    message.channel.sendMessage("spam");
                      message.channel.sendMessage("spam");
                        message.channel.sendMessage("spam");
                          message.channel.sendMessage("spam");
                          message.channel.sendMessage("spam");
                            message.channel.sendMessage("spam");
                              message.channel.sendMessage("spam");
                                message.channel.sendMessage("spam");
                                  message.channel.sendMessage("spam");


  break;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
default:
                    message.channel.sendMessage("");


  }});

bot.login(TOKEN);





















/*case "andreaufdemass":
                var embed = new Discord.RichEmbed()

                      .addField("何？", " アンドレ君 ")
                      .setColor(0x00ff08)
                      .setImage("https://cdn.discordapp.com/attachments/454275034937032705/454275181029097482/ggwg.png")
                      .setThumbnail(message.author.avatarURL)

                    //  .setDescription("Embed Nachricht sollte hier rauskommen!");
                message.channel.sendEmbed(embed);
                break;

*/
