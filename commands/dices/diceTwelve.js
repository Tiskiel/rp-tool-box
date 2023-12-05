const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 12) + 1;
	return `You rolled a ${result} on a twelve-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_12')
		.setDescription('Roll a twelve-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
