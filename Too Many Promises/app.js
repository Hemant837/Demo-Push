const posts = [{ title: "POST1" }];
let lastUserActivityTime = null;

// Function to update the user's last activity time
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastUserActivityTime = new Date();
      resolve(lastUserActivityTime);
    }, 1000);
  });
}

// Function to create the user
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST2" });
      resolve();
    }, 2000);
  });
}

// Function to delete the post
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

// Function to log all the posts created and lastActivityTime of the user
function logPostsAndActivityTime() {
  console.log(
    "Before Creating post, user Last Activity Time:",
    lastUserActivityTime
  );
  console.log("After creating posts:", posts);
}

// Chainning Of Promises with Promsie all and async await

let waitingforUser = Promise.all([createPost(), updateLastUserActivityTime()]);
async function loadingData() {
  try {
    await waitingforUser;
    logPostsAndActivityTime();
    const deletedPost = await deletePost();
    console.log("Deleted Post:", deletedPost);
    console.log("New set of Posts:", posts);
    console.log("User Last Activity Time:", lastUserActivityTime);
  } catch (error) {
    console.log(error);
  }
}

loadingData();