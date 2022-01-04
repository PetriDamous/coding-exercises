/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 143;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
const hasEnoughKarma = karma > 100 ? true : false;

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
const canUpvote = hasEnoughKarma && isModerator;

console.log("canUpvote:", canUpvote);


/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
const canDelete = hasEnoughKarma && isModerator;

console.log("canDelete:", canDelete);


// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

const response = "JohnDoe";
const hasValidEmail = true;
const user = hasValidEmail && (response || "guest");
// console.log("user: ", user);

// 1. JohnDoe
// 2. false
// 3. "guest"