const { name, add } = require('./Other')

const http = require('http');

//third party library

const _ = require('underscore')

const server = http.createServer(function (req, res) {

    //write code here

    console.log('Server is running');

});

server.listen(5000);

// const sum = add(2, 3)
// console.log(name);
// console.log(sum);

var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
const res = _.pluck(stooges, 'name');

console.log(res);
// => ["moe", "larry", "curly"]