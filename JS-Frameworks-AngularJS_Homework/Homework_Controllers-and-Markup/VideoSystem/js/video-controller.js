app.controller('VideoController', function($scope){
	$scope.sortVideoOrder = 'category';
	$scope.sortOrder = 'username';
	$scope.counterVideos = 2; // there are 2 objects in array by default
	$scope.videos = [
		{
			title: 'Course introduction',
			pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
			length: '3:32',
			category: 'IT',
			subscribers: 3,
			date: new Date(2014, 12, 15),
			haveSubtitles: false,
			comments: [
				{
					username: 'Pesho Peshev',
					content: 'Congratulations Nakov',
					date: new Date(2014, 12, 15, 12, 30, 0),
					likes: 3,
					websiteUrl: 'http://pesho.com/'
				},
				{
					username: 'Maria Ivanova',
					content: 'Thanks for this video!...I\'m wаiting for the last one.',
					date: new Date(2014, 12, 21, 10, 20, 0),
					likes: 6,
					websiteUrl: 'http://mariaivanova.com'
				}	
			]
		},
		{
		title: 'Course introduction - part 2',
		pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
		length: '2:48',
		category: 'IT',
		subscribers: 2,
		date: new Date(2014, 12, 18),
		haveSubtitles: false,
		comments: [
			{
				username: 'Pesho Peshev',
				content: 'Congratulations Nakov',
				date: new Date(2014, 12, 18, 17, 28, 0),
				likes: 13,
				websiteUrl: 'http://pesho.com/'
			},
			{
				username: 'Ivan Ivanov',
				content: 'Thanks for this video!',
				date: new Date(2014, 12, 19, 10, 20, 0),
				likes: 12,
				websiteUrl: 'http://ivanov.com'
			}
		]
	}];
	$scope.upLikes = function(comment) {
			comment.likes += 1;
		}

	$scope.downLikes = function(comment) {
		comment.likes -= 1;
	}
	
	$scope.upSubscribers = function(video) {
			video.subscribers += 1;
		}

	$scope.downSubscribers = function(video) {
		if(video.subscribers > 0){
			video.subscribers -= 1;
		}
	}
	
	$scope.addVideo = function() {	
		var newVideo = {
            title: $scope.newTitle,
            pictureUrl: $scope.newPictureUrl,
            length: $scope.newLength || '0:00',
            category: $scope.newCategory,
            subscribers: 0,
            date: new Date(),
            haveSubtitles: $scope.haveSubtitles,
            comments: []
        };
		
		$scope.videos.push(newVideo);
		$scope.newTitle = null;
        $scope.newPictureUrl = null;
        $scope.newCategory = null;
		$scope.newLength = null;
		$scope.haveSubtitles = null;
		$scope.counterVideos += 1;
	
	}
	//to do
	$scope.addComment = function(video){
		var newComment = {
			username: video.newUsername,
			content: video.newContent,
			date: new Date(),
			likes: 0,
			websiteUrl: video.newWebsiteUrl
		};
		
		video.comments.push(newComment);
		video.newUsername = null;
		video.newContent = null;
		video.newWebsiteUrl = null;
	}
		
});