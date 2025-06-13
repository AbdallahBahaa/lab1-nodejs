const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];

//Question 1
const usersAbove30 = users.filter(user => user.age > 30);
console.log("\nUsers above age 30:");
console.log(usersAbove30);

//Question 2
const userNames = users.map(user => user.name);
console.log("\nTransformed data (only names):");
console.log(userNames);

//Question 3
const firstAdminUser = users.find(user => user.role === "admin");
console.log("\nFirst user with role 'admin':");
console.log(firstAdminUser);

//Question 4
const allAdminUsers = users.filter(user => user.role === "admin");
const lastAdminUser = allAdminUsers.length > 0 ? allAdminUsers[allAdminUsers.length - 1] : undefined;
console.log("\nLast user with role 'admin':");
console.log(lastAdminUser);

//Question 5
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (Array.isArray(obj)) {
    const copyArr = [];
    for (let i = 0; i < obj.length; i++) {
      copyArr[i] = deepCopy(obj[i]);
    }
    return copyArr;
  }

  const copyObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copyObj[key] = deepCopy(obj[key]);
    }
  }
  return copyObj;
}

const originalObject = {
  id: 1,
  data: "Developer",
  details: {
    version: "1.0",
    author: {
      firstName: "Alice",
      lastName: "Wonder"
    },
    tags: ["javascript", "copy", "nested"]
  },
  settings: null,
  creationDate: new Date()
};

console.log("\n--- Deep Copy Function Example ---");
console.log("Original Object:");
console.log(originalObject);

const copiedObject = deepCopy(originalObject);
console.log("\nDeep Copied Object:");
console.log(copiedObject);

copiedObject.details.author.firstName = "Bob";
copiedObject.details.tags.push("demonstration");
copiedObject.id = 99; 
copiedObject.creationDate.setFullYear(2020); 

console.log("\nOriginal Object (after modifying copied object):");
console.log(originalObject);

console.log("\nCopied Object (after modification):");
console.log(copiedObject);

