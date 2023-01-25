import express from 'express'
import cors from 'cors'
import Question from './model/QuestionModel.js'
import DIFFICULTY from './const.js'
import { FRONTEND_SERVICE_LOCAL_URL, FRONTEND_SERVICE_PROD_URL } from './url.js'
import cookieParser from 'cookie-parser'
import auth from './auth.js'
import 'dotenv/config.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    origin: [FRONTEND_SERVICE_LOCAL_URL, FRONTEND_SERVICE_PROD_URL],
    credentials: true,
  })
) // config cors so that front-end can use
app.options('*', cors())
app.use(cookieParser())

// Populate database with sample questions for demo
const populate = async () => {
  await Question.createQuestion(
    'Single Element in a Sorted Array',
    'Given a sorted array consisting of only integers where every element appears twice except for one element which appears once\nFind this single element that appears only once\n',
    'medium',
    'Example 1:\nInput: [1,1,2,3,3,4,4,8,8]\nOutput: 2\nExample 2:\nInput: [3,3,7,7,10,11,11]\nOutput: 10\nNote:\nYour solution should run in O(log n) time and O(1) space.\n'
  )
  await Question.createQuestion(
    'Coin Change 2',
    'You are given coins of different denominations and a total amount of money\nWrite a function to compute the number of combinations that make up that amount\nYou may assume that you have infinite number of each kind of coin\nNote:You can assume that0 <= amount <= 50001 <= coin <= 5000the number of coins is less than 500the answer is guaranteed to fit into signed 32-bit integer',
    'medium',
    'Example 1:\nInput: amount = 5, coins = [1, 2, 5]\nOutput: 4\nExplanation: there are four ways to make up the amount:\n5=55=2+2+15=2+1+1+15=1+1+1+1+1Example 2:\nInput: amount = 3, coins = [2]\nOutput: 0\nExplanation: the amount of 3 cannot be made up just with coins of 2.\nExample 3:\nInput: amount = 10, coins = [10]\nOutput: 1\n'
  )
  await Question.createQuestion(
    '3Sum',
    'Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero\nNote: The solution set must not contain duplicate triplets\n',
    'medium',
    'For example, given array S = [-1, 0, 1, 2, -1, -4],A solution set is:\n[  [-1, 0, 1],  [-1, -1, 2]]'
  )
  await Question.createQuestion(
    '4Sum',
    'Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target\nNote: The solution set must not contain duplicate quadruplets\n',
    'medium',
    'For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.\nA solution set is:\n[  [-1,  0, 0, 1],  [-2, -1, 1, 2],  [-2,  0, 0, 2]]'
  )

  await Question.createQuestion(
    'Largest Palindrome Product',
    'Find the largest palindrome made from the product of two n-digit numbers\nSince the result could be very large, you should return the largest palindrome mod 1337\n',
    'hard',
    'Example:\nInput: 2\nOutput: 987\nExplanation: 99 x 91 = 9009, 9009 % 1337 = 987\nNote:\nThe range of n is [1,8].\n'
  )
  await Question.createQuestion(
    'Find All Duplicates in an Array',
    'Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once\nFind all the elements that appear twice in this array\nCould you do it without extra space and in O(n) runtime?',
    'hard',
    'Example:\nInput:\n[4,3,2,7,8,2,3,1]Output:\n[2,3]'
  )
  await Question.createQuestion(
    'Reverse Integer',
    'Reverse digits of an integer\n',
    'hard',
    "Example1: x =  123, return  321\nExample2: x = -123, return -321\nclick to show spoilers.\nHave you thought about this?Here are some good question to ask before coding. Bonus points for you if you have already thought through this!\nIf the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.\nDid you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?\nFor the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.\nNote:\nThe input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.\n"
  )
  await Question.createQuestion(
    'Substring with Concatenation of All Words',
    'You are given a string, s, and a list of words, words, that are all of the same length\nFind all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters\n',
    'hard',
    'For example, given:\ns: "barfoothefoobarman"\nwords: ["foo", "bar"]\nYou should return the indices: [0,9].\n(order does not matter).\n'
  )

  await Question.createQuestion(
    'Two Sum',
    'Given an array of integers, return indices of the two numbers such that they add up to a specific target\nYou may assume that each input would have exactly one solution, and you may not use the same element twice\n',
    'easy',
    'Example:\nGiven nums = [2, 7, 11, 15], target = 9,Because nums[0] + nums[1] = 2 + 7 = 9,return [0, 1].\n'
  )
  await Question.createQuestion(
    'Longest Substring Without Repeating Characters',
    'Given a string, find the length of the longest substring without repeating characters\n',
    'easy',
    'Examples:\nGiven "abcabcbb", the answer is "abc", which the length is 3.\nGiven "bbbbb", the answer is "b", with the length of 1.\nGiven "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.\n'
  )
  await Question.createQuestion(
    'Longest Palindromic Substring',
    'Given a string s, find the longest palindromic substring in s\nYou may assume that the maximum length of s is 1000\n',
    'easy',
    'Example:\nInput: "babad"\nOutput: "bab"\nNote: "aba" is also a valid answer.\nExample:\nInput: "cbbd"\nOutput: "bb"\n'
  )
  await Question.createQuestion(
    'Wildcard Matching',
    "Implement wildcard pattern matching with support for '?' and '*'\n'?' Matches any single character\n'*' Matches any sequence of characters (including the empty sequence)\nThe matching should cover the entire input string (not partial)\nThe function prototype should be:bool isMatch(const char *s, const char *p)",
    'easy',
    'Some examples:\nisMatch("aa","a") → falseisMatch("aa","aa") → trueisMatch("aaa","aa") → falseisMatch("aa", "*") → trueisMatch("aa", "a*") → trueisMatch("ab", "?*") → trueisMatch("aab", "c*a*b") → false'
  )
}

populate();

app.get('/', (_, res) => res.send('Question service is running well!'))

app.post('/get-two-questions-by-diff', async (req, res) => {
  console.log('\nGETTING 2 QUESTIONS BY DIFFICULTY...')

  // TOKEN/ROLE AUTH
  try {
    await auth.validateAccessTokenAndRole(req, auth.ROLES.User)
  } catch (e) {
    console.log(`\nAUTH FAILED: ${JSON.stringify(e)}`)
    if (!e.response) {
      console.log(
        `[GET 2 QUESTIONS BY DIFFICULTY][AUTH] Could not call user service! Error:\n ${e}`
      )
      return res
        .status(500)
        .json({ error: 'Had problem calling user service!' })
    }
    return res.status(e.response.status).json(e.response.data)
  }

  // VALIDATION
  let { difficulty } = req.body
  difficulty = difficulty.toLowerCase()
  if (!difficulty) {
    console.log(
      '[GET 2 QUESTIONS BY DIFFICULTY][VALIDATION] Missing difficulty!'
    )
    return res.status(400).json({
      error: 'Please provide a difficulty level!',
    })
  }
  if (!Object.values(DIFFICULTY).includes(difficulty)) {
    console.log(
      '[GET 2 QUESTIONS BY DIFFICULTY][VALIDATION] Invalid difficulty!'
    )
    return res.status(400).json({
      error: 'Please provide a valid difficulty level (easy, medium, hard)! ',
    })
  }

  // RETRIEVE QUESTIONS
  const questions = await Question.getQuestionsByDifficulty(difficulty)
  if (!questions) {
    console.log(
      `[GET 2 QUESTIONS BY DIFFICULTY][FAILURE] Server could not get questions by difficulty ${difficulty}!`
    )
    return res
      .status(500)
      .json({ error: 'Could not get questions by difficulty!' })
  }
  if (questions.length < 2) {
    console.log(
      `[GET 2 QUESTIONS BY DIFFICULTY][FAILURE] Server could not get at least 2 questions by difficulty ${difficulty}!`
    )
    return res
      .status(500)
      .json({ error: 'Could not get at least 2 questions by difficulty!' })
  }

  const twoQuestions = []
  twoQuestions.push(questions.splice(Math.random() * questions.length, 1))
  twoQuestions.push(questions.splice(Math.random() * questions.length, 1))

  console.log(
    `[GET 2 QUESTIONS BY DIFFICULTY][SUCCESS] Server retrieved questions by ${difficulty} successfully!`
  )
  console.log(twoQuestions)
  return res.status(201).json({
    success: `Retrieved 2 questions by difficulty successfully!`,
    questionOne: twoQuestions[0],
    questionTwo: twoQuestions[1],
  })
})

app.post('/create-question', async (req, res) => {
  console.log('\nCREATING QUESTION...')

  // TOKEN/ROLE AUTH
  try {
    await auth.validateAccessTokenAndRole(req, auth.ROLES.Admin)
  } catch (e) {
    console.log(`\nAUTH FAILED:\n ${JSON.stringify(e)}`)
    if (!e.response) {
      console.log(
        `[GET 2 QUESTIONS BY DIFFICULTY][AUTH] Could not call user service! Error:\n ${e}`
      )
      return res
        .status(500)
        .json({ error: 'Had problem calling user service!' })
    }
    return res.status(e.response.status).json(e.response.data)
  }

  // VALIDATION
  const { name, description, difficulty, examples } = req.body
  if (!name || !description || !difficulty || !examples) {
    console.log(
      '[CREATE][VALIDATION] Missing name/description/difficulty/examples!'
    )
    return res.status(400).json({
      error: 'Please provide name, description, difficulty, and examples!',
    })
  }
  if (!Object.values(DIFFICULTY).includes(difficulty)) {
    console.log(
      '[GET 2 QUESTIONS BY DIFFICULTY][VALIDATION] Invalid difficulty!'
    )
    return res.status(400).json({
      error: 'Please provide a valid difficulty level (easy, medium, hard)! ',
    })
  }

  // CREATE QUESTION
  const newQuestion = await Question.createQuestion(
    name,
    description,
    difficulty,
    examples
  )
  if (!newQuestion) {
    console.log(
      `[CREATE][FAILURE] Server could not create new question ${name}!`
    )
    return res.status(500).json({ error: 'Could not create new question!' })
  }

  console.log(
    `[CREATE][SUCCESS] Server created new question ${name} successfully!`
  )
  console.log(newQuestion)
  return res
    .status(201)
    .json({ success: `Created new question ${name} successfully!` })
})

export default app
