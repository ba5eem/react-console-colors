const cyan = (arg) => {
		if(arg === undefined){ console.log('did you mean to console log something') }
		let bgCyan = '\x1b[46m%s\x1b[0m';
		console.log(bgCyan, arg);
};

console.cyan = cyan;

module.exports = console;

