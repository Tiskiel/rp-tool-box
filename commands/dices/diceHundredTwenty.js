const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 120) + 1;
	return `You rolled a ${result} on a hundred and twenty-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_120')
		.setDescription('Roll a hundred and twenty-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
