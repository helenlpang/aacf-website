"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//we use graphql, a query language, to access our mongodb server
var express = require('express');

var path = require('path');

var mongoose = require('mongoose');

var cors = require('cors');

var bodyParser = require('body-parser');

var graphqlHttp = require('express-graphql');

var _require = require('graphql'),
    buildSchema = _require.buildSchema;

var Member = require('./models/member');

var API_PORT = 8081;
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/graphql', graphqlHttp({
  //sets the schema of data (members, newmembers, mutations, queries)
  schema: buildSchema("\n            type Member {\n                _id: ID!\n                firstName: String!\n                lastName: String!\n                email: String!\n                church: String!\n                year: String!\n\n            }\n            \n            input MemberInput {\n                firstName: String!\n                lastName: String!\n                email: String!\n                church: String!\n                year: String!\n\n\n            }\n\n            type RootQuery {\n                members: [Member!]!\n            }\n\n            type RootMutation {\n                addMember(memberInput: MemberInput): Member\n            }\n\n            schema {\n                query: RootQuery\n                mutation: RootMutation\n            }\n        "),
  rootValue: {
    //to access exisitng members
    members: function members() {
      return Member.find().then(function (members) {
        return members.map(function (member) {
          return _objectSpread({}, member._doc);
        });
      })["catch"](function (err) {
        throw err;
      });
    },
    //to add new members based on input and save the data
    addMember: function addMember(args) {
      var member = new Member({
        firstName: args.memberInput.firstName,
        lastName: args.memberInput.lastName,
        email: args.memberInput.email,
        church: args.memberInput.church,
        year: args.memberInput.year
      });
      return member.save().then(function (res) {
        return _objectSpread({}, res._doc);
      })["catch"](function (err) {
        throw err;
      });
    }
  },
  graphiql: true
})); //connect to mongodb on Josh's account

mongoose.connect("mongodb+srv://joshhong0:aacf@cluster0-cp0x1.mongodb.net/test?retryWrites=true&w=majority").then(function () {
  console.log('Connected to database');
})["catch"](function (err) {
  console.log(err);
});
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.listen(API_PORT, function () {
  return console.log("Listening on port ".concat(API_PORT));
});
