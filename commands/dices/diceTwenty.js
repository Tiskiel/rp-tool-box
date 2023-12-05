const { SlashCommandBuilder } = require('discord.js');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 20) + 1;
	return `You rolled a ${result} on a ten-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_20')
		.setDescription('Roll a twenty-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
