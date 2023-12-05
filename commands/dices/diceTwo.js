const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 2) + 1;
	return `You rolled a ${result} on a two-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_2')
		.setDescription('Roll a two-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
