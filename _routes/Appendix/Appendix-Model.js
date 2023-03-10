const mongoose = require('mongoose');

const AppendixSchema = new mongoose.Schema(
	{
		id: { type: Number },
		reference: { type: String, required: [true, 'Required'] },
		link: { type: String },
		comments: { type: String },
		type: { type: String, required: [true, 'Required'] },
		topic: { type: String, required: [true, 'Required'] },
	},
	{
		collection: 'pinkpantherappendixs',
		versionKey: false,
	}
);

module.exports = mongoose.model('Pinkpantherappendix', AppendixSchema);