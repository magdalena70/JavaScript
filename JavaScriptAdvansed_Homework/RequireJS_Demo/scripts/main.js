/*require(['logger'], function(logger){
	logger.sayHello();
	logger.name = 'ReqJS';
	logger.sayHello();
});*/

// defining dependencies
define('main', function(){
	var btn = document.createElement('button');
	btn.onclick = function(){
		var log = require(['logger'], function(log){
			log.sayHello();
			log.remove([23, 15, 3], 2);
		});
	};
	
	btn.textContent = 'Click me!';
	document.body.appendChild(btn);
});