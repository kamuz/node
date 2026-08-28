import { error } from 'console';
import fs from 'fs/promises';

// Read file - callback
const readFile = async() => {
	try {
		const data = await fs.readFile('./test.txt', 'utf8');
		console.log(data);
	} catch(error) {
		console.log(error);
	}
}

readFile();