var app = angular.module('App', []);

app.value('visitors', {
	count: 4,
	names: ['One', 'Two', 'Three', 'Four']
});

app.constant('HOME_SITE', {
	'url': 'http://softuni.bg',
	'port': 8888
});