import fse from "fs-extra";
import validator from "./validator";

const emptyConfig = validator.emptyConfig;

function readConfig(configPath) {
	return fse.ensureFile(configPath)
		.then(() => {
			return fse.readJSON(configPath);
		});
}

function validateConfig(config) {
	return new Promise((resolve, reject) => {
		if (!validator.config(config)) {
			reject(validator.config.errors);
		} else if (!validator.data(config.data)) {
			reject(validator.data.errors);
		} else {
			resolve(config);
		}
	});
}

function getConfig(configPath) {
	return new Promise((resolve, reject) => {
		readConfig(configPath)
			.catch((err) => {
				reject(err);
			})

			.then((config) => {
				return validateConfig(config);
			})

			.then((validatedConfig) => {
				resolve(validatedConfig);
			})

			.catch((err) => {
				reject(err);
			});
	});
}

export {
	getConfig as default,
	validateConfig,
	emptyConfig
};
