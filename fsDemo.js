import { error } from 'console';
import fs from 'fs';

// Read file - callback
fs.readFile('./test.txt', 'utf8', (err, data) => {
	if(err) throw err;
	console.log(data);
});