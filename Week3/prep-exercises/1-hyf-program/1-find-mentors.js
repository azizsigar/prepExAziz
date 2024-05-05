import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
  return mentors.reduce((newArr, mentor) => {
    if (mentor.canTeach.includes(moduleName)) {
      newArr.push(mentor.name);
    }
    return newArr;
  }, []);

}
console.log(possibleMentorsForModule('using-apis'));
/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = () => {
  const mentorsForModule = possibleMentorsForModule('using-apis');
  if (mentorsForModule.length === 0) {
    return "No mentor available for this module";
  }
  const randomIndex = Math.floor(Math.random() * mentorsForModule.length);
  return mentorsForModule[randomIndex];
};
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('javascript'));






