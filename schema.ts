export const schema = `#graphql

type Abilities{
    name: String!
    effect: String!
}

type Moves {
    name: String!
    power: String!
}

type Pokemon {
    id: ID!
    name: String!
    abilities: [Abilities!]!
    moves: [Moves!]!
}

type Query{
    pokemon: [id: ID, name: String] : Pokemon 
    
}

type Mutation {

}

`