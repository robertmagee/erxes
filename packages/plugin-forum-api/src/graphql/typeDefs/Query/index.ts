const Query = ` 
  extend type Query {
    forumCategoryByCode(code: String!): ForumCategory
    forumCategory(_id: ID!): ForumCategory
    forumCategories(_id: [ID!], parentId: [ID], code: [String!]): [ForumCategory!]
    forumCategoryQuery(query: JSON!): [ForumCategory!]
    forumCategoryPossibleParents(_id: ID): [ForumCategory!]

    forumPost(_id: ID!): ForumPost
    forumPosts(_id: [ID!], categoryId: [ID!], state: [String!], offset: Int, limit: Int, categoryIncludeDescendants: Boolean): [ForumPost!]

    forumComments(_id: [ID!], postId: [ID!], replyToId: [ID], offset: Int, limit: Int): [ForumComment!]
    forumComment(_id: ID!): ForumComment

    forumCateogryIsDescendantRelationship(ancestorId: ID!, descendantId: ID!): Boolean
  }
`;

export default Query;