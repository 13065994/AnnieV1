module.exports = {
    config: {
        name: "poll",
        author: "Samir Œ",
        version: "1.0",
        category: "FUN",
        role: 0
    },
    annieStart: async function ({ bot, chatId, msg }) {
        const pollData = msg.text.split(' ').slice(1).join(' ').split('|').map(option => option.trim());

        if (pollData.length < 3) {
            return bot.sendMessage(chatId, `Please provide a question and at least two options. Usage: ${global.config.prefix}poll <question> | <option1> | <option2> | ...`);
        }

        const question = pollData[0];
        const options = pollData.slice(1);

        try {
            const pollMessage = await bot.sendPoll(chatId, question, options);
        } catch (error) {
            console.error('[ERROR]', error);
            bot.sendMessage(chatId, 'An error occurred while creating the poll.');
        }
    }
};