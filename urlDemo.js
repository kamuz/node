import url from 'url';

const urlString = 'https://wwww.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);

console.log(urlObj);

// Search string
console.log(urlObj.search);

// Search params
console.log(urlObj.searchParams);

// Get specific search param
console.log(urlObj.searchParams.get('q'));

// Append param
const appendParam = urlObj.searchParams.append('limit', 5);
console.log(urlObj.search);

// File URL
console.log(import.meta.url);

// File URL to path
console.log(url.fileURLToPath(import.meta.url));

// The same data with only URL
const myUrl = new URL(
	'https://example.com/products?id=10&category=phone'
);

console.log(myUrl.protocol);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);

// Format URL from object to string
const result = url.format({
	protocol: 'https',
	hostname: 'example.com',
	pathname: '/products',
	query: {
		id: 10,
		category: 'phone'
	}
});

console.log(result);