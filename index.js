const Discord = require("discord.js");
const bot = new Discord.Client('disableEveryone: true');
const Client = new Discord.Client;




Client.login("NzYwMTA4MzE3MjMzMTE5MjM0.X3HQCA.jltb41-x_YuyHa_OzxfQQhxR0ok")



Client.on("message", message => {
    if(message.author.bot) return;
	if(message.channel.type == "dm") return;
	

	
	

	//comandes pour les admin ou moderateur 
	
	if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith("!ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.channel.send("Membre non ou mal mentionné. ");
            }
            else{
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été banni avec succes !")
		    message.channel.send("https://i.imgur.com/h77zDyQ.gif")
                }
		    
                else{
                    message.channel.send("impossible de bannir ce membre")
                }
            }
        }
        if(message.content.startsWith("!kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.channel.send("Membre non ou mal mentionné. ");
            }
            else{
                if(mention.kickable){
                    mention.kick();
                    message.channel.send("<@" + mention.id + "> a été kick avec succes !")
                }
                else{
                    message.channel.send("impossible de kick ce membre")
                }
            }
        }
        if(message.content.startsWith("!mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.channel.send("Membre non ou mal mentionné. ");
            }
            else{
                mention.roles.add("758006070059729176")
                message.channel.send("<@" + mention.id + "> a ete mute avec succes")
            }
        }
        if(message.content.startsWith("!unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.channel.send("Membre non ou mal mentionné. ");
            }
            else{
                mention.roles.remove("758006070059729176")
                message.channel.send("<@" + mention.id + "> a ete unmute avec succes")
            }
        }
        if(message.content.startsWith("!tempmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.channel.send("Membre non ou mal mentionné. ");
            }
            else{
                let args = message.content.split(" ");

                mention.roles.add("758006070059729176")
                message.channel.send("<@" + mention.id + "> a ete mute")
                setTimeout(function(){
                    mention.roles.remove("758006070059729176");
                    message.channel.send("<@" + mention.id + "> tu peux desormais parler")
                }, args[2] * 1000);
            }
        }
    }
})

