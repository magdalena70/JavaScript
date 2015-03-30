require.config({
	baseUrl: 'scripts',
	paths: {
		logger: 'logger',
		main: 'main'
	}
});

// main.js file to be loaded
require(['main'], function(){});

/*console.log('Hello RequireJS!'); // is executed first*/



/* Install by command prompt - 'npm install requirejs'. 
	Returns - equirejs@2.1.16 node_modules\requirejs */
