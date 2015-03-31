require.config({
	baseUrl: 'scripts',
	paths: {
		factory: 'factory',
		container: 'container',
		section: 'section',
		item: 'item'
	}
});

// factory.js file to be loaded
require(['factory'], function(){});