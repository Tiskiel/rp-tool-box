const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 8) + 1;
	return `You rolled a ${result} on a eight-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_8')
		.setDescription('Roll a eight-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
