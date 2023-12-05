const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 7) + 1;
	return `You rolled a ${result} on a seven-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_7')
		.setDescription('Roll a seven-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
