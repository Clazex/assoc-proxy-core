import Ajv from "ajv";

const configSchema = {
	"$schema": "http://json-schema.org/draft-07/schema#",

	type: "object",

	required: [
		"app", "version", "data"
	],

	properties: {
		app: {
			type: "string",
			const: "assoc-proxy"
		},

		version: {
			type: "string",
			pattern: "^(?:\\d+(?:\\.\\d+){2}(?:\\-[0-9A-Za-z]+(?:\\.[0-9A-Za-z]+)*)?(?:\\+[0-9A-Za-z]+(?:\\.[0-9A-Za-z]+)*)?)$"
		},

		data: {
			type: "object"
		}
	}
};

const dataSchema = {
	"$schema": "http://json-schema.org/draft-07/schema#",

	type: "object",

	properties: {
		applications: {
			type: "array",
			uniqueItems: true,
			items: {
				type: "object",

				required: ["name", "arg"],

				properties: {
					name: {
						type: "string",
						pattern: "^(?:[^\\s]|[ ])+$"
					},
					arg: {
						type: "string",
						pattern: "\\$\\{path\\}"
					}
				}
			}
		},

		associations: {
			type: "object",

			properties: {
				"file-extensions": {
					type: "array",
					uniqueItems: true,
					items: {
						type: "object",

						required: ["id", "applications"],

						properties: {
							id: {
								type: "string",
								pattern: "^[0-9A-Za-z]+$"
							},
							applications: {
								type: "array",
								uniqueItems: true,
								items: {
									type: "integer",
									minimum: 0
								}
							}
						}
					}
				},

				"uri-schemes": {
					type: "array",
					uniqueItems: true,
					items: {
						type: "object",

						required: ["id", "applications"],

						properties: {
							id: {
								type: "string",
								pattern: "^[0-9A-Za-z]+$"
							},
							applications: {
								type: "array",
								uniqueItems: true,
								items: {
									type: "integer",
									minimum: 0
								}
							}
						}
					}
				}
			}
		}
	}
};

const emptyConfig = {
	app: "assoc-proxy",
	version: "0.0.0",

	data: {
		applications: [],

		associations: {
			"file-extensions": [],
			"uri-schemes": []
		}
	}
};

const ajv = new Ajv();

const validator = {
	config: ajv.compile(configSchema),
	data: ajv.compile(dataSchema),

	emptyConfig
};

([
	configSchema,
	dataSchema,
	emptyConfig,
	validator
]).forEach((i) => {
	Object.freeze(i);
});

export default validator;
