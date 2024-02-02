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
    
    if (lowerCaseBody.includes('boa noite') || lowerCaseBody.includes('boa tarde') || lowerCaseBody.includes('bom dia') || lowerCaseBody.includes('oi') || lowerCaseBody.includes('olá')) {
        await client.sendMessage(message.from, 'Olá, sou João, o assistente de atendimento da Imobiliária Brave.');
        await client.sendMessage(message.from, 'Como posso ajudar você hoje?\n1. Consultar imóveis disponíveis\n2. Informações sobre financiamento\n3. Agendar visita\n4. Outras perguntas');
    } else if (lowerCaseBody.includes('1')) {
        await client.sendMessage(message.from, 'Claro! Aqui estão alguns dos nossos imóveis disponíveis:\n...');
    } else if (lowerCaseBody.includes('2')) {
        await client.sendMessage(message.from, 'Podemos oferecer várias opções de financiamento. Você poderia me dizer mais sobre o que você está procurando em um financiamento?');
    } else if (lowerCaseBody.includes('3')) {
        await client.sendMessage(message.from, 'Ótimo! As visitas são agendadas apenas para os finais de semana. Por favor, informe a data e o horário que você prefere.');
    } else if (lowerCaseBody.includes('4')) {
        await client.sendMessage(message.from, 'Claro! Sinta-se à vontade para fazer qualquer pergunta.');
    }

    // outras lógicas

});

client.initialize();
