(function (){
	$(function(){
		
		setTimer('#timer');

		$('input[name="question1"]').on('click', function(){
				localStorage.setItem('question1', $(this).attr('id'));
			});
		$('input[name="question2"]').on('click', function(){
				localStorage.setItem('question2', $(this).attr('id'));
			});
		$('input[name="question3"]').on('click', function(){
				localStorage.setItem('question3', $(this).attr('id'));
			});

		$('#submit').on('click', showResults);
		$('#back').on('click', goBack);
		
		if (localStorage.question1) {
			checkAnswer(localStorage.question1);
		}
		
		if (localStorage.question2) {
			checkAnswer(localStorage.question2);
		}
		
		if (localStorage.question3) {
			checkAnswer(localStorage.question3);
		}
	});
	
	function checkAnswer(id){
		var currentAnswer = '#' + id;
		$(currentAnswer).attr('checked', 'checked');
		console.log($(currentAnswer));
	}
	
	function showResults(){
		var answer1,
			answer2,
			answer3,
			correctAnswer;
			
		if($('input[name="question1"]:checked').val()){	
			answer1 = $('input[name="question1"]:checked').val();
		}else{
			alert('Check answer of First question!');
		}
		
		if($('input[name="question2"]:checked').val()){	
			answer2 = $('input[name="question2"]:checked').val();
		}else{
			alert('Check answer of Second question!');
		}
		
		if($('input[name="question3"]:checked').val()){	
			answer3 = $('input[name="question3"]:checked').val();
		}else{
			alert('Check answer of Third question!');
		}
		
		if($('input[name="question3"]:checked').val()){	
			correctAnswer = 'Your answer is correct!';
			$('#formQuestions').hide();
			
			// about first question
			$('#result').find('#result-answer1')
				.text(answer1);
			if(answer1 == 'First answer'){
					$('#result').find('#correct-answer1')
				.text(correctAnswer)
				.css('color', 'red');
			}else{
				$('#result').find('#correct-answer1')
					.text('It is not correct answer. Try again!')
					.css('color', 'white');
			}

			// about second question	
			$('#result').find('#result-answer2')
				.text(answer2);
			if(answer2 == 'Third answer'){
				$('#result').find('#correct-answer2')
					.text(correctAnswer)
					.css('color', 'red');
			}else{
				$('#result').find('#correct-answer2')
					.text('It is not correct answer. Try again!')
					.css('color', 'white');
			}

			// about third question
			$('#result').find('#result-answer3')
				.text(answer3);
			if(answer3 == 'Second answer'){
				$('#result').find('#correct-answer3')
					.text(correctAnswer)
					.css('color', 'red');
			}else{
				$('#result').find('#correct-answer3')
					.text('It is not correct answer. Try again!')
					.css('color', 'white');
			}
			
			// about the winner
			if(answer1 == 'First answer' &&
				answer2 == 'Third answer' &&
				answer3 == 'Second answer'){
				$('#result')
					.text('You give three correct answers and win the title WINNER!!!')
					.css('color', 'RED')
					.css('font-size', '35px');
					localStorage.clear();
			}
				
			$('#result').show();
		}
	}

	function setTimer(selector){
		var minutesInSec,
			seconds,
			timer,
			minutes,
			secondsInString;
		
		minutesInSec = 120; // 2 minutes
		seconds = 60;

		timer = setInterval(function() {
			minutesInSec--;
			seconds--;
			minutes = Math.floor(minutesInSec / 60);
			if (seconds < 10) {
				secondsInString = '0' + seconds;
			}else{
				secondsInString = seconds;
			}

		    $(selector).text(minutes + ':' + secondsInString);
		    if (seconds == 0) {
				seconds = 60;
			}
			
			if ((minutesInSec / 60) === 0){
				clearInterval(timer);
				timeOut();
			}
		},1000);
	}
	
	function goBack(){
		$('#result').hide();
		$('#formQuestions').show();
	}
	
	function timeOut(){
		localStorage.clear();
		$('#formQuestions')
			.text('Game over...')
			.css('font-size', '35px')
			.css('color', 'yellow');
		
		$('#result')
			.text('Try again!')
			.css('font-size', '35px')
			.css('color', 'yellow');
	}
})();