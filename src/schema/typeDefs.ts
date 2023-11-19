export const typeDefs = `
type Query {
  hello: String!
  feed: [Link!]!
  me: User
}
 
type Mutation {
  post(url: String!, description: String!): Link!
  signup(email: String!, password: String!, name: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
}
 
type Link {
  id: ID!
  description: String!
  url: String!
  postedBy: User
}
 
type AuthPayload {
  token: String
  user: User
}
 
type User {
  id: ID!
  name: String!
  email: String!
  links: [Link!]!
}
`;
