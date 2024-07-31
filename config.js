const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_22_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUbUR5U0VaZk9pdTlxS3psV3RNUW96aWd3cUxyWDRpcy9MTjFKNnpCcWhzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDZXlCc05vTlRPdWFzRUsyLUpOcHhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3ZGNiYzc1LWEzZGItNDgwMS04NDQ2LTg4ZmEzZjM3YTI1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxNzUsXG4gICAgICAxMTIsXG4gICAgICAxNjEsXG4gICAgICAyMDgsXG4gICAgICA3MixcbiAgICAgIDIyNixcbiAgICAgIDYsXG4gICAgICAxNjUsXG4gICAgICAxOTMsXG4gICAgICAyMzMsXG4gICAgICAyMDQsXG4gICAgICA5MyxcbiAgICAgIDIwMCxcbiAgICAgIDYsXG4gICAgICAyNyxcbiAgICAgIDIyNixcbiAgICAgIDQyLFxuICAgICAgNzIsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMjE3LFxuICAgICAgMjA4LFxuICAgICAgMTA3LFxuICAgICAgMTA4LFxuICAgICAgMTkxLFxuICAgICAgMjQyLFxuICAgICAgMjM3LFxuICAgICAgNjYsXG4gICAgICAyMDIsXG4gICAgICAxMzksXG4gICAgICAxNDksXG4gICAgICAxMDcsXG4gICAgICAyMSxcbiAgICAgIDkzLFxuICAgICAgMTQ2LFxuICAgICAgOTYsXG4gICAgICAyMDcsXG4gICAgICAyMjIsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIksyUUJYQ0FGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MTI5OTM1Mjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjMxNTM5OTI5MDkwNDA6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOL3RxQzhRcUsycHRRWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhhWjhFS2NMOE11N0V0cFNaVWl6NmR6RnBwSVF1WUVrdEhmY0VndTd5MHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNlJXbzE1T3hNY2hrdHVzVGtQb3pFQ3kxeno3UEx4TklDOFdLR2RqUDErdDloUzYvd3Q0NDFlWkVHNEJWRGJ2VnBvVEViUFNkL2tYOHBOMnRtZkZ5Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZWRrWmRrN0s4OWpjUU80UkVYYzZZNHBPYndUMW5Nd2VXaXE3cGNzakJNR2U5cG5DNExUd1pUd3FlVlFibkphengvWWRmTGExKzc1STZDbW5vNXdCanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjEyOTkzNTI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDM5MzM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzJOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPMk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvTnlkNGd1cFJNQUF5TUF1ejh4SzZORkhuOVNSWG1kM3ZYNnlTQ0xGNWlZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5MjM1NTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "pakayaa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
