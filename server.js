const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const Member = require('./models/member');

const API_PORT = 5000
const MONGO_USER = "myungin"
const MONGO_PASSWORD = "mark4s0wS33ds"
const MONGO_DB = "scheduling_availability"

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/graphql',
    graphqlHttp({
        schema: buildSchema(`
            type Member {
                _id: ID!
                firstName: String!
                lastName: String!
                email: String!
            }

            input MemberInput {
                firstName: String!
                lastName: String!
                email: String!
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
            addMember: (args) => {
                const member = new Member({
                    firstName: args.memberInput.firstName,
                    lastName: args.memberInput.lastName,
                    email: args.memberInput.email
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

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@mern-jelo-tutorial-cluster-tbday.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to database')
    })
    .catch(err => {
        console.log(err);
    })

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

