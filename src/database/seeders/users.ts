export default [
  {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'secret_admin',
    ag: 31,
    role: 'admin',
    books: [1],
    rentedBooks: '[]',
    emailVerified: true,
  },
  {
    username: 'moderator',
    email: 'moderator@mod.com',
    password: 'moderator',
    role: 'moderator',
    books: [1, 2],
    rentedBooks: '[0, 1, 2]',
    emailVerified: true,
  },
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123',
    role: 'user',
    books: [5, 4],
    rentedBooks: '[0]',
    emailVerified: true,
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    password: 'password456',
    role: 'user',
    books: [1, 2],
    emailVerified: true,
    rentedBooks: '[0]',
  },
  {
    username: 'bobsmith',
    email: 'bobsmith@example.com',
    password: 'password789',
    role: 'user',
    books: [1, 8],
    emailVerified: true,
    rentedBooks: '[0]',
  },
  {
    username: 'alicewang',
    email: 'alicewang@example.com',
    password: 'passwordabc',
    role: 'user',
    books: [1, 6],
    emailVerified: true,
    rentedBooks: '[0]',
  },
  {
    username: 'samsingh',
    email: 'samsingh@example.com',
    password: 'passworddef',
    role: 'user',
    books: [8, 9],
    emailVerified: true,
    rentedBooks: '[0]',
  },
];
