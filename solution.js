function findUniqueUsers(list1, list2) {
  // Convert the lists to Sets to get unique values
  const set1 = new Set(list1);
  const set2 = new Set(list2);

  // a. Get unique set of users from List1 which are not in List2
  const uniqueUsersList1 = new Set([...set1].filter(user => !set2.has(user)));

  // b. Get unique set of users from List2 which are not in List1
  const uniqueUsersList2 = new Set([...set2].filter(user => !set1.has(user)));

  // c. Get set of users who are present in List1 and List2 both (intersection of List1 & List2)
  const intersectionUsers = new Set([...set1].filter(user => set2.has(user)));

  return {
    uniqueUsersList1: Array.from(uniqueUsersList1),
    uniqueUsersList2: Array.from(uniqueUsersList2),
    intersectionUsers: Array.from(intersectionUsers),
  };
}

// Test the function with the given lists
const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const output = findUniqueUsers(List1, List2);
console.log("Unique users in List1 but not in List2:", output.uniqueUsersList1);
console.log("Unique users in List2 but not in List1:", output.uniqueUsersList2);
console.log("Users present in both List1 and List2:", output.intersectionUsers);
