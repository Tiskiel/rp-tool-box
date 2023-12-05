const { SlashCommandBuilder } = require('@discordjs/builders');

const diceRoll = (dice) => {
	const result = Math.floor(Math.random() * dice) + 1;
	return `You rolled a ${result} on a ${dice}-sided dice!`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice_24')
		.setDescription('Roll a twenty-four-sided dice'),
	async execute(interaction) {
		const dice = interaction.options.getInteger('dice');
		await interaction.reply(diceRoll(dice));
	},
};
