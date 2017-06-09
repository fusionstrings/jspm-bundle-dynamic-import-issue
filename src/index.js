import module from './module.js';

console.log(module);

import('./module.js').then(module => {
	console.log(module.default);
});