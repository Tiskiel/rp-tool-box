const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 30) + 1;
	return `You rolled a ${result} on a thirty-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_30')
		.setDescription('Roll a thirty-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
