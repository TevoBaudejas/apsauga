require('dotenv').config();

const GuardianClient = require('./core/client.js');
const client = new GuardianClient();

client.on("ready", () => {
    console.log(`Statusas atnaujintas i (Kiemo 24/7 Admins) Tipas: WATCHING Botas: ${client.user.username}!`)
    client.user.setActivity('Kiemo 24/7 Admins', { type: 'WATCHING'})
});

client.login(process.env.BOT_TOKEN);