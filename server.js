const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

var app = express();

// one endpoint /graphql
// graphiql: tool used as client to make queries to server
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
