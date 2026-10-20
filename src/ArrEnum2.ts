enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

// Define an interface
interface User {
  id: number;
  name: string;
  status: Status;
}

// Create an array of objects using the enum
const users: User[] = [
  {
    id: 1,
    name: "Rahul",
    status: Status.Pending,
  },
  {
    id: 2,
    name: "Priya",
    status: Status.Approved,
  },
  {
    id: 3,
    name: "Amit",
    status: Status.Rejected,
  },
];

// Print all users
console.log("All users:");

users.forEach((user) => {
  console.log(`ID: ${user.id}, Name: ${user.name}, Status: ${user.status}`);
});

// Filter approved users
const approvedUsers = users.filter((user) => user.status === Status.Approved);

console.log("\nApproved users:");
console.log(approvedUsers);

// Update a user's status
users[0].status = Status.Approved;

console.log("\nUpdated first user:");
console.log(users[0]);
