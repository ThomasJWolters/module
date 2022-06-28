module.exports.config = 
{
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "thomas",
  description: "watch infor adminbot",
  commandCategory: "Module",
  usages: "(prefix) [ad]",
  cooldowns: 5,
  dependencies:
  {}
}
module.exports.run= 
async function({api,event}) 
{
const axios = require('axios');
var { threadID,messageID } = event;
let message = ``;
axios.get('https://raw.githubusercontent.com/ThomasJWolters/module/master/admin_infor/index.json').then(resp => {
   message += `name: ${resp.data.admin.name}\nage: ${resp.data.admin.age}\nbirth: ${resp.data.admin.birth}\ngender: ${resp.data.admin.gender}\nfburl: ${resp.data.admin.facebook}`;
  }).catch(error => {
    console.log(error);
  });
  let img = (await axios.get(``, {responseType: "stream"})).data;
return api.sendMessage({body: message, attachment: img},threadID,messageID)
}
/*dùng với data*/
