const data = ([
	{
		id: "empty-array",
		valid: false
	},
	{
		id: "empty-object",
		valid: false
	},
	{
		id: "invalid-application-name",
		valid: false
	},
	{
		id: "invalid-application-path",
		valid: false
	},
	{
		id: "invalid-association-applications",
		valid: false
	},
	{
		id: "invalid-association-id",
		valid: false
	},
	{
		id: "invalid-version",
		valid: false
	},
	{
		id: "negative-application-id",
		valid: false
	},
	{
		id: "no-data",
		valid: false
	},
	{
		id: "valid",
		valid: true
	},
	{
		id: "wrong-name",
		valid: false
	}
].map((i) => {
	return {
		id: i.id,
		valid: i.valid,
		path: `test/data/${i.id}.json`
	};
}).sort((a, b) => {
	return a.id < b.id;
}));

export default data;
