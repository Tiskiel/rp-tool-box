const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 50) + 1;
	return `You rolled a ${result} on a fifty-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_50')
		.setDescription('Roll a fifty-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
