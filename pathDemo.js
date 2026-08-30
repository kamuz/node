import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// Get path name
console.log(path.basename(filePath));

// Get directory name
console.log(path.dirname(filePath));

// Get extension name
console.log(path.extname(filePath));

// Get all as object
console.log(path.parse(filePath));

// Get path to current file
const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);

// Get path to current directory file
const __dirname = path.dirname(__filename);
console.log(__dirname);