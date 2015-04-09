(function(){
    function loginIn(e){
		if($('#userName').val()){
			var userName = $('#userName').val();
			localStorage.setItem('userName', userName);
		}else{
			alert('User-name cannot be enpty');
		}
    }

    if(localStorage['userName'] && !localStorage['visitsCount']){
        localStorage.setItem('visitsCount', 0);
    }

    if(localStorage['userName'] && !sessionStorage['visitsCount']){
        sessionStorage.setItem('visitsCount', 0);
    }

    if(localStorage['userName']){
		localStorage['visitsCount']++;
		sessionStorage['visitsCount']++;

		$('<div class="storageCount">').text('Session visits: '+ sessionStorage['visitsCount'] + ' time(s).')
			.appendTo('#wrapper');
		$('<div class="storageCount">').text('Total visits: '+ localStorage['visitsCount'] + ' time(s).')
			.appendTo('#wrapper');
        $('form').hide();
        $('#greeting').text('Hello, '+ localStorage['userName'] + '!');
		if(localStorage['visitsCount'] > 1){
			$('#greeting').text('Hello, '+ localStorage['userName'] + ', welcome back!');
		}
    } else {
        $('#login').on('click', loginIn);
    }

})();

function removeStorage(){
		if(localStorage['userName'] || localStorage['visitsCount']){
			localStorage.removeItem('userName');
        	localStorage.removeItem('visitsCount');
		}
		if(sessionStorage['visitsCount']){
        	sessionStorage.removeItem('visitsCount');
		}
		$('form').show();
		$('#greeting').text('');
		$('.storageCount').text('');
}
