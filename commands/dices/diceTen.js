const { SlashCommandBuilder } = require('discord.js');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 10) + 1;
	return `You rolled a ${result} on a ten-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_10')
		.setDescription('Roll a ten-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
