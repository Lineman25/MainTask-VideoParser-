const fs = require('fs');
 const osmosis = require('osmosis');
 let savedData = [];
osmosis
	.get('https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/')
	.find('.title a')
	.set('TITLE:')
     .data(function(data) {
      console.log(data);
      savedData.push(data);
   })
   .done(function() {
      fs.writeFile('data.json', JSON.stringify( savedData, null, 4), function(err) {
        if(err) console.error(err);
        else console.log('Data Saved to data.json file');
      })
});
