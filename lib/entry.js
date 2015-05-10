module.exports = require("ioredis");
if (typeof window !== "undefined" && typeof Redis === "undefined") {
	window.Redis = module.exports;
}
