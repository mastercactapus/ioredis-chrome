module.exports = {
	entry: "./lib/entry.js",
	output: {
		path: __dirname + "/dist",
		filename: "ioredis.js"
	},
	resolve: {
		alias: {
			net: "chrome-net"
		}
	}
};
