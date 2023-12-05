const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 100) + 1;
	return `You rolled a ${result} on a hundred-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_100')
		.setDescription('Roll a hundred-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
