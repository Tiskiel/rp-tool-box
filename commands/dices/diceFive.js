const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 5) + 1;
	return `You rolled a ${result} on a five-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_5')
		.setDescription('Roll a five-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
