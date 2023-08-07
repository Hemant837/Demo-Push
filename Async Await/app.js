console.log("1st person Entered");
console.log("2nd person Entered");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve("tickets"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  const addButter = new Promise((resolve, reject) => resolve("butter"));

  // Task 1 - GetColdrinls Promise
  const getColdDrinks = new Promise((resolve, reject) => resolve("Cold Drink"));

  let ticket = await promiseWifeBringingTickets;

  console.log(`wife: i have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no i'm hungry");

  let popcorn = await getPopcorn;

  console.log(`husband: i got the ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife: I need butter on my popcorn");

  let butter = await addButter;

  console.log(`husband: i got the ${butter}`);
  console.log("husband: anything else darling?");
  console.log("wife: I'm thirsty, get some drink's for me dear");

  let colddrinks = await getColdDrinks;

  console.log(`husband: Here is your ${colddrinks}`);
  console.log("husband: anything else darling?");
  console.log("wife: let's go we are getting late");
  console.log("husband: Yeah let's go");

  return ticket;
};

preMovie().then((m) => console.log(m));

console.log("4th person Entered");
console.log("5th person Entered");
