
 const osmosis = require('osmosis');
osmosis
	.get('https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/')
	.find('.title')
	.set('TITLE:')
    .data(function(data) {
        console.log(data);
    })
