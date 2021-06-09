import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('pass', 10),
    isAdmin: true,
  },
  {
    name: 'Jhon Doe',
    email: 'jhon@example.com',
    password: bcrypt.hashSync('pass', 10),
  },
  {
    name: 'Jane Doe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('pass', 10),
  },
]

export default users
