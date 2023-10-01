const Log = require('../models/Log');
const VMarketing = require('../validators/marketing.validator');
const generate = require('../utils/generate.util')

const { TextServiceClient } =
	require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");

const MODEL = "models/text-bison-001";
const API_KEY = process.env.P_APIKEY;

const client = new TextServiceClient({
	authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

module.exports.askPalm = async (req, res) => {
	const userId = req.user.id;
	try {
		const { error, value } = VMarketing.init.validate(req.body);
		if (error) throw new Error(error);

		const result = await client
			.generateText({
				model: MODEL,
				prompt: {
					text: generate.prompt(value),
				},
			})

		let output = null;
		if (result?.[0]?.candidates?.[0]?.output)
			output = JSON.parse(result?.[0]?.candidates?.[0]?.output)

		Log.create({
			userQuery: value,
			response: output,
			user: userId
		})

		res.json({ status: 200, data: output });
	}
	catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}

// client
// 	.generateText({
// 		model: MODEL,
// 		prompt: {
// 			text: generate.prompt({
// 				productName: "Apple Watch R",
// 				productDescription: "Apple Watch R is for iphone",
// 				productCategory: "Electronincs",
// 				minAgeOfAudience: 22,
// 				maxAgeOfAudience: 60
// 			}),
// 		},
// 	})
// 	.then((result) => {
// 		console.log(JSON.stringify(result, null, 2));
// 		console.log(result[0].candidates[0].output)
// 		// res.json({ status: 200 });
// 	});