import crypto from 'crypto';

// Create hash
const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex'));

// Generate 16 random bytes as string
const buf = crypto.randomBytes(16);
console.log(buf.toString('hex'));

// Generate a unique UUID
const id = crypto.randomUUID();
console.log(id);

// Create HMAC signature
const secret = 'my-secret-key';
const data = 'user_id=123';
const signature = crypto
	.createHmac('sha256', secret)
	.update(data)
	.digest('hex');
console.log(signature);

// Encrypt text
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
const encrypted = cipher.update('This is secret message', 'utf8', 'hex') + cipher.final('hex');
console.log(encrypted);

// Decryption text
const decipher = crypto.createDecipheriv(algorithm, key, iv);
const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
console.log(decrypted);