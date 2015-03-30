define('logger', function(){
	var loggerObj = {
		name: 'RequireJS',
		sayHello: function(){
			console.log(this.name + ' says Hi!');
			var p = document.createElement('p');
			p.textContent = this.name + 'says Hi';
			document.body.appendChild(p);
		},
		remove: function(arr, index){
			var div = document.createElement('div');
			div.innerHTML = '[' + arr + ']';
			if(index < 0 || index > arr.length){
				div.innerHTML += ' has not index: ' + index;
			}else{
				if(arr[index] != undefined){
					var result = arr.splice(arr, index, index);
					div.innerHTML += '.remove(element[' + index + ']) = [' + result + ']';
				}
			}
			console.log(result);
			document.body.appendChild(div);
		}
	};
	return loggerObj;
});