import { error } from 'console';
import fs from 'fs/promises';

// Read file - promise version
fs.readFile('./test.txt', 'utf8')
	.then((data) => console.log(data))
	.catch((err) => console.log(err));