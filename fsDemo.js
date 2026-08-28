import { error } from 'console';
import fs from 'fs/promises';

// Read file - async/await
const readFile = async() => {
	try {
		const data = await fs.readFile('./test.txt', 'utf8');
		console.log(data);
	} catch(error) {
		console.log(error);
	}
}

// Write file
const writeFile = async() => {
	try{
		await fs.writeFile('./test.txt', 'Hi, I am writing to this file');
		console.log('File written to...');
	} catch(error){
		console.log(error);
	}
}

readFile();
writeFile();