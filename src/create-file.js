const fs = require('fs');

// generates HTML

const createFile = (markdown) => {
	fs.createFile('./dist/index.html', markdown, (err) => {
		if (err) {
			console.log('File could not be created', err);
		} else {
			console.log('The Team Profile has been created and rendered!');
		}
	});
};

module.exports = createFile;