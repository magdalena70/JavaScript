
		$(function(){
			notyTopRight();
			function notyTopRight(){
			var nTop = noty({
					text: 'NOTY - a jquery notification library!',
					layout: 'topRight',
					animation: {
						open: 'animated rollIn', 
						close: 'animated rollOut', 
						easing: 'swing',
						speed: 5000 
					},
					buttons: [
						{addClass: 'btn-continue', text: 'Ok', onClick: function($noty) {
							$noty.close();
							noty({
								text: 'You clicked "Ok" button. Click me to continue.',
								callback: {
									afterClose: function() {
										$('h1')
											.css({color: 'rgba(30, 92, 32, 1.0)', fontSize: '30px'})
											.text('NOTY - Animation');
										$('h3')
											.text('Hello, NOTY - a jquery notification library!')
											.css({
												color: 'white',
												background: 'rgba(255, 255, 255, 0.2)',
												width: '40%',
												margin: 'auto'
											});
										$('#wrapper')
											.css({
												border: 'solid 2px gray', 
												backgroundImage: 'url(img/background_1.jpg)',
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover'
											});
										$('#wrapper').hide().show(3000);
										},
									onCloseClick: function() {
										notyRight();
										}
									}
								});
							}
						},
						{addClass: 'btn-cancel', text: 'Cancel', onClick: function($noty) {
								//$noty.close();
								noty({
									text: 'You clicked "Cancel" button. Click me to cancel.',
									callback: {
										onCloseClick: function() {
											$('h1')
												.css({color: '#344C52', fontSize: '70px'})
												.text('Good bye!');
											$('#wrapper')
												.css({
													border: 'solid 2px gray', 
													backgroundImage: 'url(img/background_end.gif)',
													backgroundRepeat: 'no-repeat',
													backgroundSize: 'cover'
												});
											$('#wrapper').hide().show(3000);
										}
									}
								});
							}
						}
					],
					closeWith: ['click']
				});
			}
			
			function notyRight(){
				var nRight = noty({
					text: 'NOTY - a jquery notification library!',
					layout: 'centerRight',
					animation: {
						open: 'animated rotateInUpLeft', 
						close: 'animated rotateOutDownRight', 
						easing: 'swing', 
						speed: 5000
					},
					closeWith: ['button'],
					callback: {
						afterClose: function() {
							$('h1')
								.css({color: 'rgba(75, 79, 130, 1.0)', fontSize: '30px'})
								.text('NOTY - Animation');
							$('h3')
									.text('Enjoy with NOTY - a jquery notification library!')
									.css({
										color: 'white',
										background: 'rgba(255, 255, 255, 0.2)',
										width: '40%',
										margin: 'auto'
									});
							$('#wrapper')
								.css({
									backgroundImage: 'url(img/background_2.jpg)',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover'
								});
							$('#wrapper').hide().show(3000);
							notyLeft();
						}
					}
				});
			}
			
			function notyLeft(){
				var nLeft = noty({
					text: 'NOTY - a jquery notification library!',
					layout: 'centerLeft',
					animation: {
						open: 'animated lightSpeedIn', // Animate.css class names
						close: 'animated rotateInDownLeft', // Animate.css class names
						easing: 'swing', // unavailable - no need
						speed: 5000 // unavailable - no need
					},
					closeWith: ['button'],
					callback: {
						afterClose: function() {
							$('h1')
								.css({color: 'rgba(144, 0, 53, 1.0)', fontSize: '30px'})
								.text('NOTY - Animation');
							$('h3')
									.text('Enjoy with NOTY - a jquery notification library!')
									.css({
										color: 'white',
										background: 'rgba(255, 255, 255, 0.2)',
										width: '40%',
										margin: 'auto'
									});
							$('#wrapper')
								.css({
									border: 'solid 2px gray', 
									backgroundImage: 'url(img/background_3.jpg)',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover'
								});
							$('#wrapper').hide().show(3000);
							notyTopLeft();
						}
					}			
				});
			}
			
			function notyTopLeft(){
				var nLeft = noty({
					text: 'NOTY - a jquery notification library!',
					layout: 'topLeft',
					animation: {
						open: 'animated flash', 
						close: 'animated hinge', 
						easing: 'swing', 
						speed: 5000
					},
					callback: {
						afterClose: function() {
							$('h1')
								.css({color: '#C60406', fontSize: '30px'})
								.text('NOTY - Animation');
							$('h3')
									.text('Enjoy with NOTY - a jquery notification library!')
									.css({
										color: 'white',
										background: 'rgba(255, 255, 255, 0.2)',
										width: '40%',
										margin: 'auto'
									});
							$('#wrapper')
								.css({
									border: 'solid 2px gray', 
									backgroundImage: 'url(img/background_4.jpg)',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover'
								});
							$('#wrapper').hide().show(3000);
							notyTopRight();
						}
					}			
				});
			}
		
		}());	
