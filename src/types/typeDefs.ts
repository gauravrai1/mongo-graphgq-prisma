export const typeDefs = `#graphql

  type Mutation {
    signupUser(data: RegisterInput): User!
    login(email: String!, password: String!): User!
    updateFirstName(data: UserUpdateFirstNameInput!): User!
    updateLastName(data: UserUpdateLastNameInput!): User!
    createDraft(content: String!, published: Boolean): Post
    togglePublishPost(id: String!): Post
    deletePost(id: String!): Post
    updatePost(data: PostUpdateInput!): Post
    createComment(data: CommentCreateInput!): Comment
    deleteComment(id: String!): Comment
    updateComment(data: CommentUpdateInput!): Comment
  }

  type Comment {
    authorId: String!
    content: String!
    createdAt: DateTime!
    id: String!
    post: Post!
    author: User!
    replyto: Comment
    replies: [Comment!]
  }

  input CommentUpdateInput {
    commentId: String!
    content: String!
  }

  input CommentCreateInput {
    content: String!
    postId: String!
    replyTo: String
  }

  type Post {
    id: String!
    author: User!
    content: String!
    createdAt: DateTime!
    published: Boolean!
    updatedAt: DateTime!
    comments: [Comment!]
  }

  input PostUpdateInput {
    postId: String!
    content: String!
  }

  input PostOrderByUpdatedAtInput {
    updatedAt: SortOrder!
  }

  type Query {
    allUsers: [User!]!
    userById(id: String!): User
    postsByUser(userId: String!): [Post]
    draftsByUser(userId: String!): [Post]
    postById(id: String!): Post
    feed(
      orderBy: PostOrderByUpdatedAtInput
      searchString: String
      skip: String
      take: String
    ): [Post!]!
    commentsOfPost(postId: String!): [Comment!]!
    commentById(id: String!): Comment
    commentByReplyTo(replyToId: String!): [Comment!]!
  }

  enum SortOrder {
    asc
    desc
  }

  type User {
    email: String!
    id: String!
    token: String!
    firstName: String
    lastName: String
    posts: [Post!]
    comments: [Comment!]
  }

  input RegisterInput {
    firstName: String
    lastName: String
    password: String!
    confirmPassword: String!
    email: String!
  }

  input UserUpdateFirstNameInput {
    firstName: String!
  }

  input UserUpdateLastNameInput {
    lastName: String!
  }

  type Subscription {
    newComment: Comment!
  }

  scalar DateTime
`
