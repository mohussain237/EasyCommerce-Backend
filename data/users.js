import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAmin: true,
  },
  {
    name: "john",
    email: "john@example.com",
    password: bcrypt.hashSync("12345", 10),
  },

  {
    name: "dane",
    email: "dane@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
