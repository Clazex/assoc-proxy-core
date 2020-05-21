import getConfig, {
	validateConfig,
	emptyConfig
} from "../../dist/main";
import data from "./data";

function abort() {
	const exitCode = -1;
	process.exit(exitCode);
}

Promise.all(
	data.map((i) => {
		return new Promise((resolve) => {
			getConfig(i.path)
				.then(() => {
					resolve({
						id: i.id,
						success: i.valid,
						error: String("Unexpected passing")
					});
				})
				.catch((err) => {
					resolve({
						id: i.id,
						success: !i.valid,
						error: err.toString()
					});
				});
		});
	})
)
	.then((results) => {
		return new Promise((resolve, reject) => {
			const failedTests = results.filter((i) => {
				return !i.success;
			});

			if (failedTests.length) {
				reject(
					"Test Failed:\n"
					+ failedTests.map((i) => {
						return `${i.id}: ${i.error}`;
					}).join(",\n")
					+ "\n"
				);
			} else {
				resolve();
			}
		});
	})

	.then(() => {
		return new Promise((resolve, reject) => {
			validateConfig(emptyConfig)
				.then(() => {
					resolve();
				})
				.catch(() => {
					reject("Example Config Invalid\n");
				});
		});
	})

	.then(() => {
		console.log("All Test Passed\n");
	})

	.catch((err) => {
		console.error(err);

		abort();
	});
