const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 3) + 1;
	return `You rolled a ${result} on a three-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_3')
		.setDescription('Roll a three-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
