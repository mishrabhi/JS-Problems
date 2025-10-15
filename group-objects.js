// Group Objects by a Property
// Problem:

// Group an array of objects by a key (e.g., department).

const employees = [
  { name: "Alice", dept: "HR" },
  { name: "Bob", dept: "IT" },
  { name: "Charlie", dept: "IT" },
  { name: "David", dept: "HR" },
];

function groupByDepartment(data) {
  return data.reduce((acc, curr) => {
    (acc[curr.dept] = acc[curr.dept] || []).push(curr);
    return acc;
  }, {});
}

console.log(groupByDepartment(employees));

// Explanation:

// Use reduce() to build an object.

// For each employee, group them under their department name.
