const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = () => {
	const result = Math.floor(Math.random() * 4) + 1;
	return `You rolled a ${result} on a four-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_4')
		.setDescription('Roll a four-sided dice'),
	async execute(interaction) {
		await interaction.reply(diceRoll());
	},
};
