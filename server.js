//we use graphql, a query language, to access our mongodb server

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const Member = require('./models/member');

const API_PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/graphql',
    graphqlHttp({
        //sets the schema of data (members, newmembers, mutations, queries)
        schema: buildSchema(`
            type Member {
                _id: ID!
                firstName: String!
                lastName: String!
                email: String!
                church: String!
                year: String!

            }
            
            input MemberInput {
                firstName: String!
                lastName: String!
                email: String!
                church: String!
                year: String!


            }

            type RootQuery {
                members: [Member!]!
            }

            type RootMutation {
                addMember(memberInput: MemberInput): Member
            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `),
        rootValue: {
            //to access exisitng members
            members: () => {
                return Member.find()
                    .then(members => {
                        return members.map(member => {
                            return {
                                ...member._doc
                            }
                        })
                    })
                    .catch(err => {
                        throw err;
                    })
            },
            //to add new members based on input and save the data
            addMember: (args) => {
                const member = new Member({
                    firstName: args.memberInput.firstName,
                    lastName: args.memberInput.lastName,
                    email: args.memberInput.email,
                    church: args.memberInput.church,
                    year: args.memberInput.year


                });
                return member.save()
                    .then(res => {
                        return {
                            ...res._doc
                        };
                    })
                    .catch(err => {
                        throw err;
                    })
            }
        },
        graphiql: true,
    })
);

//connect to mongodb on Josh's account
mongoose.connect(`mongodb+srv://joshhong0:aacf@cluster0-cp0x1.mongodb.net/test?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to database')
    })
    .catch(err => {
        console.log(err);
    })

app.get('/', (req, res) => {
    res.send('I love Char');
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

