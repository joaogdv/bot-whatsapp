const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    const lowerCaseBody = message.body.toLowerCase();
    
    if (lowerCaseBody.includes('oi') || lowerCaseBody.includes('olá')) {
        await client.sendMessage(message.from, 'Olá! Como posso ajudar você hoje?\n1. Meu repositório está aqui: [URL_TO_YOUR_REPOSITORY]\n2. Meu LinkedIn: [LINKEDIN_URL]\n3. Meu YouTube: [YOUTUBE_URL]');
    }

    // outras lógicas

});

client.initialize();
