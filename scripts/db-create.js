'use strict';

var low = require('lowdb');
var storage = require('lowdb/file-sync');
var _ = require('underscore');
var faker = require('faker');

var db = low('./db.json', {storage});
db._.mixin(require('underscore-db'));

db.read();
if (!_.isEmpty({})) return;

var books = db('books');
// books.remove();

var reviews = db('reviews');
// reviews.remove();

var currentYear = (new Date()).getFullYear();

for (var i = 0; i < 5; i++) {

  var book = books.insert({
    title: faker.lorem.sentence().slice(0, -1),
    author: faker.name.findName(),
    year: Math.round(currentYear - Math.random() * 30),
  });

  if (i < 2) {
    for (var j = 0; j < 2; j++) {
      reviews.insert({
        bookId: book.id,
        author: faker.name.findName(),
        body: faker.lorem.sentences(2)
      });
    }
  }

}

db.write();
