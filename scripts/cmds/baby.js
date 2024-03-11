module.exports = {
  config: {
      name: "baby",
      version: "1.0",
      author: "kivv",
      countDown: 5,
      role: 0,
      shortDescription: "baby",
      longDescription: "No Prefix",
      category: "reply",
  },
onStart: async function(){}, 
onChat: async function({
  event,
  message,
  getLang
}) {
  if (event.body && event.body.toLowerCase() == "baby") return message.reply("Hello baby k xa  ");
}
};