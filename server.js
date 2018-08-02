let express = require('express');
let express_graphql = require('express-graphql');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
    type Query {
        message: String
    }
`);


let root = {
    message: () => 'Hello World!'
};

let app = express();

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
