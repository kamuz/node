// Arguments
console.log(process.argv);
console.log(process.argv[3]);

// Enviroment variables
// console.log(process.env);
console.log(process.env.OS);

// Process ID
console.log(process.pid);

// Current directory
console.log(process.cwd());

// Title process
console.log(process.title);

// Memory usage
console.log(process.memoryUsage());

// Version of Node.js
console.log(process.version);

// Version of OS
console.log(process.platform);

// Uptime
console.log(process.uptime());

// Get exit code
process.on('exit', (code) => {
	console.log(`About to exit with code ${code}`);
});

// Exit Node.js process
console.log(process.exit(0));

// This message will never be executed
console.log('Hello, after success exit');