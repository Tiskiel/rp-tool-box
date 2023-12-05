const { SlashCommandBuilder } = require('discord.js');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 6) + 1;
	return `You rolled a ${result} on a six-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_6')
		.setDescription('Roll a six-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
