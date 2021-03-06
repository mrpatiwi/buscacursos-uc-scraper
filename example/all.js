'use strict';

const fs = require('fs');
const scraper = require('../index');

// This takes a lot of time to complete.
// Also, creates heavy load on the server, use with caution.
// Big chances of failing

scraper.all({ year: 2016, period: 1 }).then(courses => {
  console.log('Count:', courses.length);
  fs.writeFile('./all.json', JSON.stringify(courses, null, 4), function(err) {
    if (err) return console.error(err);

    console.log('success!');
  });
}).catch(console.error);

// Recommended:
// const initials = scraper.initials;
//
// scraper.deepSearch(initials, { year: 2016, period: 1}, function(err, courses) {
//   if (err) return console.error(err);
//
//   console.log('Count:', courses.length);
//   fs.writeFile('./all.json', JSON.stringify(courses, null, 4), function(err) {
//     if (err) return console.error(err);
//
//     console.log('success!');
//   });
// });
