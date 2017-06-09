SystemJS.config({
	paths: {
		'npm:': 'jspm_packages/npm/',
		'jspm-stack/': 'src/'
	},
	browserConfig: {
		baseURL: '/'
	},
	devConfig: {
		map: {
			'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21',
			'babel-plugin-syntax-dynamic-import':
				'npm:babel-plugin-syntax-dynamic-import@6.18.0'
		}
	},
	transpiler: 'plugin-babel',
	packages: {
		'jspm-stack': {
			main: 'index.js',
			meta: {
				'*.js': {
					loader: 'plugin-babel',
					babelOptions: {
						stage1: true,
						plugins: [
							'babel-plugin-syntax-dynamic-import'
						]
					}
				}
			},
			format: 'esm'
		}
	}
});

SystemJS.config({
	packageConfigPaths: ['npm:@*/*.json', 'npm:*.json'],
	map: {},
	packages: {}
});