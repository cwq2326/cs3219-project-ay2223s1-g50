export default [
  {
    "name": "Single Element in a Sorted Array",
    "description": "Given a sorted array consisting of only integers where every element appears twice except for one element which appears once\nFind this single element that appears only once\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: [1,1,2,3,3,4,4,8,8]\nOutput: 2\nExample 2:\nInput: [3,3,7,7,10,11,11]\nOutput: 10\nNote:\nYour solution should run in O(log n) time and O(1) space.\n"
  },
  {
    "name": "Coin Change 2",
    "description": "You are given coins of different denominations and a total amount of money\nWrite a function to compute the number of combinations that make up that amount\nYou may assume that you have infinite number of each kind of coin\nNote:You can assume that0 <= amount <= 50001 <= coin <= 5000the number of coins is less than 500the answer is guaranteed to fit into signed 32-bit integer",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: amount = 5, coins = [1, 2, 5]\nOutput: 4\nExplanation: there are four ways to make up the amount:\n5=55=2+2+15=2+1+1+15=1+1+1+1+1Example 2:\nInput: amount = 3, coins = [2]\nOutput: 0\nExplanation: the amount of 3 cannot be made up just with coins of 2.\nExample 3:\nInput: amount = 10, coins = [10]\nOutput: 1\n"
  },
  {
    "name": "Largest Palindrome Product",
    "description": "Find the largest palindrome made from the product of two n-digit numbers\nSince the result could be very large, you should return the largest palindrome mod 1337\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: 2\nOutput: 987\nExplanation: 99 x 91 = 9009, 9009 % 1337 = 987\nNote:\nThe range of n is [1,8].\n"
  },
  {
    "name": "Find All Duplicates in an Array",
    "description": "Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once\nFind all the elements that appear twice in this array\nCould you do it without extra space and in O(n) runtime?",
    "difficulty": "hard",
    "examples": "Example:\nInput:\n[4,3,2,7,8,2,3,1]Output:\n[2,3]"
  },
  {
    "name": "Two Sum",
    "description": "Given an array of integers, return indices of the two numbers such that they add up to a specific target\nYou may assume that each input would have exactly one solution, and you may not use the same element twice\n",
    "difficulty": "easy",
    "examples": "Example:\nGiven nums = [2, 7, 11, 15], target = 9,Because nums[0] + nums[1] = 2 + 7 = 9,return [0, 1].\n"
  },
  {
    "name": "Add Two Numbers",
    "description": "You are given two non-empty linked lists representing two non-negative integers\nThe digits are stored in reverse order and each of their nodes contain a single digit\nAdd the two numbers and return it as a linked list\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself\nInput: (2 -> 4 -> 3) + (5 -> 6 -> 4)Output: 7 -> 0 -> 8",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Longest Substring Without Repeating Characters",
    "description": "Given a string, find the length of the longest substring without repeating characters\n",
    "difficulty": "easy",
    "examples": "Examples:\nGiven \"abcabcbb\", the answer is \"abc\", which the length is 3.\nGiven \"bbbbb\", the answer is \"b\", with the length of 1.\nGiven \"pwwkew\", the answer is \"wke\", with the length of 3. Note that the answer must be a substring, \"pwke\" is a subsequence and not a substring.\n"
  },
  {
    "name": "Median of Two Sorted Arrays",
    "description": "There are two sorted arrays nums1 and nums2 of size m and n respectively\nFind the median of the two sorted arrays\nThe overall run time complexity should be O(log (m+n))\n",
    "difficulty": "medium",
    "examples": "Example 1:\nnums1 = [1, 3]nums2 = [2]The median is 2.0\nExample 2:\nnums1 = [1, 2]nums2 = [3, 4]The median is (2 + 3)/2 = 2.5\n"
  },
  {
    "name": "Longest Palindromic Substring",
    "description": "Given a string s, find the longest palindromic substring in s\nYou may assume that the maximum length of s is 1000\n",
    "difficulty": "easy",
    "examples": "Example:\nInput: \"babad\"\nOutput: \"bab\"\nNote: \"aba\" is also a valid answer.\nExample:\nInput: \"cbbd\"\nOutput: \"bb\"\n"
  },
  {
    "name": "ZigZag Conversion",
    "description": "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)P   A   H   NA P L S I I GY   I   RAnd then read line by line: \"PAHNAPLSIIGYIR\"Write the code that will take a string and make this conversion given a number of rows:string convert(string text, int nRows);convert(\"PAYPALISHIRING\", 3) should return \"PAHNAPLSIIGYIR\"\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Reverse Integer",
    "description": "Reverse digits of an integer\n",
    "difficulty": "hard",
    "examples": "Example1: x =  123, return  321\nExample2: x = -123, return -321\nclick to show spoilers.\nHave you thought about this?Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!\nIf the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.\nDid you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?\nFor the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.\nNote:\nThe input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.\n"
  },
  {
    "name": "String to Integer (atoi)",
    "description": "Implement atoi to convert a string to an integer\nHint: Carefully consider all possible input cases\nIf you want a challenge, please do not see below and ask yourself what are the possible input cases\nNotes:It is intended for this problem to be specified vaguely (ie, no given input specs)\nYou are responsible to gather all the input requirements up front\nUpdate (2015-02-10):The signature of the C++ function had been updated\nIf you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition\nspoilers alert\n\n\nclick to show requirements for atoi\nRequirements for atoi:The function first discards as many whitespace characters as necessary until the first non-whitespace character is found\nThen, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value\nThe string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function\nIf the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed\nIf no valid conversion could be performed, a zero value is returned\nIf the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Palindrome Number",
    "description": "Determine whether an integer is a palindrome\nDo this without extra space\nclick to show spoilers\nSome hints:Could negative integers be palindromes? (ie, -1)If you are thinking of converting the integer to string, note the restriction of using extra space\nYou could also try reversing an integer\nHowever, if you have solved the problem \"Reverse Integer\", you know that the reversed integer might overflow\nHow would you handle such case?There is a more generic way of solving this problem\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Regular Expression Matching",
    "description": "Implement regular expression matching with support for '\n' and '*'\n'\n' Matches any single character\n'*' Matches zero or more of the preceding element\nThe matching should cover the entire input string (not partial)\nThe function prototype should be:bool isMatch(const char *s, const char *p)",
    "difficulty": "hard",
    "examples": "Some examples:\nisMatch(\"aa\",\"a\") → falseisMatch(\"aa\",\"aa\") → trueisMatch(\"aaa\",\"aa\") → falseisMatch(\"aa\", \"a*\") → trueisMatch(\"aa\", \".*\") → true\nisMatch(\"ab\", \".*\") → true\nisMatch(\"aab\", \"c*a*b\") → true"
  },
  {
    "name": "Container With Most Water",
    "description": "Given n non-negative integers a1, a2,\n\n\n, an, where each represents a point at coordinate (i, ai)\nn vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0)\nFind two lines, which together with x-axis forms a container, such that the container contains the most water\nNote: You may not slant the container and n is at least 2\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Integer to Roman",
    "description": "Given an integer, convert it to a roman numeral\nInput is guaranteed to be within the range from 1 to 3999\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Roman to Integer",
    "description": "Given a roman numeral, convert it to an integer\nInput is guaranteed to be within the range from 1 to 3999\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Longest Common Prefix",
    "description": "Write a function to find the longest common prefix string amongst an array of strings\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "3Sum",
    "description": "Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero\nNote: The solution set must not contain duplicate triplets\n",
    "difficulty": "medium",
    "examples": "For example, given array S = [-1, 0, 1, 2, -1, -4],A solution set is:\n[  [-1, 0, 1],  [-1, -1, 2]]"
  },
  {
    "name": "3Sum Closest",
    "description": "Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target\nReturn the sum of the three integers\nYou may assume that each input would have exactly one solution\n",
    "difficulty": "medium",
    "examples": "    For example, given array S = {-1 2 1 -4}, and target = 1.\n    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).\n"
  },
  {
    "name": "Letter Combinations of a Phone Number",
    "description": "Given a digit string, return all possible letter combinations that the number could represent\nA mapping of digit to letters (just like on the telephone buttons) is given below\nInput:Digit string \"23\"Output: [\"ad\", \"ae\", \"af\", \"bd\", \"be\", \"bf\", \"cd\", \"ce\", \"cf\"]\nNote:Although the above answer is in lexicographical order, your answer could be in any order you want\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "4Sum",
    "description": "Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target\nNote: The solution set must not contain duplicate quadruplets\n",
    "difficulty": "medium",
    "examples": "For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.\nA solution set is:\n[  [-1,  0, 0, 1],  [-2, -1, 1, 2],  [-2,  0, 0, 2]]"
  },
  {
    "name": "Remove Nth Node From End of List",
    "description": "Given a linked list, remove the nth node from the end of list and return its head\n",
    "difficulty": "hard",
    "examples": "For example,   Given linked list: 1->2->3->4->5, and n = 2.\n   After removing the second node from the end, the linked list becomes 1->2->3->5.\nNote:\nGiven n will always be valid.\nTry to do this in one pass.\n"
  },
  {
    "name": "Valid Parentheses",
    "description": "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid\nThe brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Merge Two Sorted Lists",
    "description": "Merge two sorted linked lists and return it as a new list\nThe new list should be made by splicing together the nodes of the first two lists\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Generate Parentheses",
    "description": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses\n",
    "difficulty": "easy",
    "examples": "For example, given n = 3, a solution set is:\n[  \"((()))\",  \"(()())\",  \"(())()\",  \"()(())\",  \"()()()\"]"
  },
  {
    "name": "Merge k Sorted Lists",
    "description": "Merge k sorted linked lists and return it as one sorted list\nAnalyze and describe its complexity\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Swap Nodes in Pairs",
    "description": "Given a linked list, swap every two adjacent nodes and return its head\n",
    "difficulty": "hard",
    "examples": "For example,Given 1->2->3->4, you should return the list as 2->1->4->3.\nYour algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.\n"
  },
  {
    "name": "Reverse Nodes in k-Group",
    "description": "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list\nk is a positive integer and is less than or equal to the length of the linked list\nIf the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is\nYou may not alter the values in the nodes, only nodes itself may be changed\nOnly constant memory is allowed\n",
    "difficulty": "medium",
    "examples": "For example,Given this linked list: 1->2->3->4->5\nFor k = 2, you should return: 2->1->4->3->5\nFor k = 3, you should return: 3->2->1->4->5\n"
  },
  {
    "name": "Remove Duplicates from Sorted Array",
    "description": "Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length\nDo not allocate extra space for another array, you must do this in place with constant memory\n",
    "difficulty": "medium",
    "examples": "For example,Given input array nums = [1,1,2],Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.\n"
  },
  {
    "name": "Remove Element",
    "description": "Given an array and a value, remove all instances of that value in place and return the new length\nDo not allocate extra space for another array, you must do this in place with constant memory\nThe order of elements can be changed\nIt doesn't matter what you leave beyond the new length\n",
    "difficulty": "easy",
    "examples": "Example:\nGiven input array nums = [3,2,2,3], val = 3Your function should return length = 2, with the first two elements of nums being 2.\n  Try two pointers.\n  Did you use the property of \"the order of elements can be changed\"?  What happens when the elements to remove are rare?"
  },
  {
    "name": "Implement strStr()",
    "description": "Implement strStr()\nReturns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Divide Two Integers",
    "description": "Divide two integers without using multiplication, division and mod operator\nIf it is overflow, return MAX_INT\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Substring with Concatenation of All Words",
    "description": "You are given a string, s, and a list of words, words, that are all of the same length\nFind all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters\n",
    "difficulty": "hard",
    "examples": "For example, given:\ns: \"barfoothefoobarman\"\nwords: [\"foo\", \"bar\"]\nYou should return the indices: [0,9].\n(order does not matter).\n"
  },
  {
    "name": "Next Permutation",
    "description": "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers\nIf such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order)\nThe replacement must be in-place, do not allocate extra memory\n",
    "difficulty": "easy",
    "examples": "Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.\n1,2,3 → 1,3,23,2,1 → 1,2,31,1,5 → 1,5,1"
  },
  {
    "name": "Longest Valid Parentheses",
    "description": "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring\nFor \"(()\", the longest valid parentheses substring is \"()\", which has length = 2\n",
    "difficulty": "easy",
    "examples": "Another example is \")()())\", where the longest valid parentheses substring is \"()()\", which has length = 4.\n"
  },
  {
    "name": "Search in Rotated Sorted Array",
    "description": "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand\n(i\ne\n, 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2)\nYou are given a target value to search\nIf found in the array return its index, otherwise return -1\nYou may assume no duplicate exists in the array\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Search for a Range",
    "description": "Given an array of integers sorted in ascending order, find the starting and ending position of a given target value\nYour algorithm's runtime complexity must be in the order of O(log n)\nIf the target is not found in the array, return [-1, -1]\n",
    "difficulty": "hard",
    "examples": "For example,Given [5, 7, 7, 8, 8, 10] and target value 8,return [3, 4].\n"
  },
  {
    "name": "Search Insert Position",
    "description": "Given a sorted array and a target value, return the index if the target is found\nIf not, return the index where it would be if it were inserted in order\nYou may assume no duplicates in the array\n",
    "difficulty": "hard",
    "examples": "Here are few examples.\n[1,3,5,6], 5 → 2[1,3,5,6], 2 → 1[1,3,5,6], 7 → 4[1,3,5,6], 0 → 0"
  },
  {
    "name": "Valid Sudoku",
    "description": "Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules\nThe Sudoku board could be partially filled, where empty cells are filled with the character '\n'\nA partially filled sudoku which is valid\nNote:A valid Sudoku board (partially filled) is not necessarily solvable\nOnly the filled cells need to be validated\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Sudoku Solver",
    "description": "Write a program to solve a Sudoku puzzle by filling the empty cells\nEmpty cells are indicated by the character '\n'\nYou may assume that there will be only one unique solution\nA sudoku puzzle\n\n\n\n\n\nand its solution numbers marked in red\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Count and Say",
    "description": "The count-and-say sequence is the sequence of integers beginning as follows:1, 11, 21, 1211, 111221,\n\n\n1 is read off as \"one 1\" or 11\n11 is read off as \"two 1s\" or 21\n21 is read off as \"one 2, then one 1\" or 1211\nGiven an integer n, generate the nth sequence\nNote: The sequence of integers will be represented as a string\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Combination Sum",
    "description": "Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T\nThe same repeated number may be chosen from C unlimited number of times\nNote:All numbers (including target) will be positive integers\nThe solution set must not contain duplicate combinations\n",
    "difficulty": "medium",
    "examples": "For example, given candidate set [2, 3, 6, 7] and target 7,A solution set is:\n[  [7],  [2, 2, 3]]"
  },
  {
    "name": "Combination Sum II",
    "description": "Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T\nEach number in C may only be used once in the combination\nNote:All numbers (including target) will be positive integers\nThe solution set must not contain duplicate combinations\n",
    "difficulty": "medium",
    "examples": "For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,A solution set is:\n[  [1, 7],  [1, 2, 5],  [2, 6],  [1, 1, 6]]"
  },
  {
    "name": "First Missing Positive",
    "description": "Given an unsorted integer array, find the first missing positive integer\n",
    "difficulty": "hard",
    "examples": "For example,Given [1,2,0] return 3,and [3,4,-1,1] return 2.\nYour algorithm should run in O(n) time and uses constant space.\n"
  },
  {
    "name": "Trapping Rain Water",
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining\n",
    "difficulty": "hard",
    "examples": "For example,Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.\nThe above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!\n"
  },
  {
    "name": "Multiply Strings",
    "description": "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2\nNote:The length of both num1 and num2 is < 110\nBoth num1 and num2 contains only digits 0-9\nBoth num1 and num2 does not contain any leading zero\nYou must not use any built-in BigInteger library or convert the inputs to integer directly\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Wildcard Matching",
    "description": "Implement wildcard pattern matching with support for '?' and '*'\n'?' Matches any single character\n'*' Matches any sequence of characters (including the empty sequence)\nThe matching should cover the entire input string (not partial)\nThe function prototype should be:bool isMatch(const char *s, const char *p)",
    "difficulty": "easy",
    "examples": "Some examples:\nisMatch(\"aa\",\"a\") → falseisMatch(\"aa\",\"aa\") → trueisMatch(\"aaa\",\"aa\") → falseisMatch(\"aa\", \"*\") → trueisMatch(\"aa\", \"a*\") → trueisMatch(\"ab\", \"?*\") → trueisMatch(\"aab\", \"c*a*b\") → false"
  },
  {
    "name": "Jump Game II",
    "description": "Given an array of non-negative integers, you are initially positioned at the first index of the array\nEach element in the array represents your maximum jump length at that position\nYour goal is to reach the last index in the minimum number of jumps\n",
    "difficulty": "easy",
    "examples": "For example:\nGiven array A = [2,3,1,1,4]The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)\nNote:\nYou can assume that you can always reach the last index.\n"
  },
  {
    "name": "Permutations",
    "description": "Given a collection of distinct numbers, return all possible permutations\n",
    "difficulty": "easy",
    "examples": "For example,[1,2,3] have the following permutations:\n[  [1,2,3],  [1,3,2],  [2,1,3],  [2,3,1],  [3,1,2],  [3,2,1]]"
  },
  {
    "name": "Permutations II",
    "description": "Given a collection of numbers that might contain duplicates, return all possible unique permutations\n",
    "difficulty": "medium",
    "examples": "For example,[1,1,2] have the following unique permutations:\n[  [1,1,2],  [1,2,1],  [2,1,1]]"
  },
  {
    "name": "Rotate Image",
    "description": "You are given an n x n 2D matrix representing an image\nRotate the image by 90 degrees (clockwise)\nFollow up:Could you do this in-place?",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Group Anagrams",
    "description": "Given an array of strings, group anagrams together\n",
    "difficulty": "easy",
    "examples": "For example, given: [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"],\nReturn:\n[  [\"ate\", \"eat\",\"tea\"],  [\"nat\",\"tan\"],  [\"bat\"]]Note: All inputs will be in lower-case.\n"
  },
  {
    "name": "Pow(x, n)",
    "description": "Implement pow(x, n)\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "N-Queens",
    "description": "The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other\nGiven an integer n, return all distinct solutions to the n-queens puzzle\nEach solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '\n' both indicate a queen and an empty space respectively\n",
    "difficulty": "medium",
    "examples": "For example,There exist two distinct solutions to the 4-queens puzzle:\n[ [\".Q..\",  // Solution 1\n  \"...Q\",\n  \"Q...\",\n  \"..Q.\"],\n [\"..Q.\",  // Solution 2\n  \"Q...\",\n  \"...Q\",\n  \".Q..\"]\n]"
  },
  {
    "name": "N-Queens II",
    "description": "Follow up for N-Queens problem\nNow, instead outputting board configurations, return the total number of distinct solutions\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Maximum Subarray",
    "description": "Find the contiguous subarray within an array (containing at least one number) which has the largest sum\n",
    "difficulty": "easy",
    "examples": "For example, given the array [-2,1,-3,4,-1,2,1,-5,4],the contiguous subarray [4,-1,2,1] has the largest sum = 6.\nclick to show more practice.\nMore practice:\nIf you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.\n"
  },
  {
    "name": "Spiral Matrix",
    "description": "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order\n",
    "difficulty": "easy",
    "examples": "For example,Given the following matrix:\n[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]You should return [1,2,3,6,9,8,7,4,5].\n"
  },
  {
    "name": "Jump Game",
    "description": "Given an array of non-negative integers, you are initially positioned at the first index of the array\nEach element in the array represents your maximum jump length at that position\nDetermine if you are able to reach the last index\n",
    "difficulty": "easy",
    "examples": "For example:\nA = [2,3,1,1,4], return true.\nA = [3,2,1,0,4], return false.\n"
  },
  {
    "name": "Merge Intervals",
    "description": "Given a collection of intervals, merge all overlapping intervals\n",
    "difficulty": "medium",
    "examples": "For example,Given [1,3],[2,6],[8,10],[15,18],return [1,6],[8,10],[15,18].\n"
  },
  {
    "name": "Insert Interval",
    "description": "Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary)\nYou may assume that the intervals were initially sorted according to their start times\n",
    "difficulty": "easy",
    "examples": "Example 1:\nGiven intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].\nExample 2:\nGiven [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].\nThis is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].\n"
  },
  {
    "name": "Length of Last Word",
    "description": "Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string\nIf the last word does not exist, return 0\nNote: A word is defined as a character sequence consists of non-space characters only\n",
    "difficulty": "medium",
    "examples": "For example,Given s = \"Hello World\",return 5.\n"
  },
  {
    "name": "Spiral Matrix II",
    "description": "Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order\n",
    "difficulty": "medium",
    "examples": "For example,Given n = 3,You should return the following matrix:\n[ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ]]"
  },
  {
    "name": "Permutation Sequence",
    "description": "The set [1,2,3,…,n] contains a total of n! unique permutations\nBy listing and labeling all of the permutations in order,We get the following sequence (ie, for n = 3):\"123\"\"132\"\"213\"\"231\"\"312\"\"321\"Given n and k, return the kth permutation sequence\nNote: Given n will be between 1 and 9 inclusive\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Rotate List",
    "description": "Given a list, rotate the list to the right by k places, where k is non-negative\n",
    "difficulty": "easy",
    "examples": "For example:\nGiven 1->2->3->4->5->NULL and k = 2,return 4->5->1->2->3->NULL.\n"
  },
  {
    "name": "Unique Paths",
    "description": "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below)\nThe robot can only move either down or right at any point in time\nThe robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below)\nHow many possible unique paths are there?Above is a 3 x 7 grid\nHow many possible unique paths are there?Note: m and n will be at most 100\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Unique Paths II",
    "description": "Follow up for \"Unique Paths\":Now consider if some obstacles are added to the grids\nHow many unique paths would there be?An obstacle and empty space is marked as 1 and 0 respectively in the grid\n",
    "difficulty": "medium",
    "examples": "For example,There is one obstacle in the middle of a 3x3 grid as illustrated below.\n[  [0,0,0],  [0,1,0],  [0,0,0]]The total number of unique paths is 2.\nNote: m and n will be at most 100.\n"
  },
  {
    "name": "Minimum Path Sum",
    "description": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path\nNote: You can only move either down or right at any point in time\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Valid Number",
    "description": "Validate if a given string is numeric\n",
    "difficulty": "hard",
    "examples": "Some examples:\n\"0\" => true\"   0.1  \" => true\n\"abc\" => false\"1 a\" => false\"2e10\" => trueNote: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.\nUpdate (2015-02-10):\nThe signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.\n"
  },
  {
    "name": "Plus One",
    "description": "Given a non-negative integer represented as a non-empty array of digits, plus one to the integer\nYou may assume the integer do not contain any leading zero, except the number 0 itself\nThe digits are stored such that the most significant digit is at the head of the list\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Add Binary",
    "description": "Given two binary strings, return their sum (also a binary string)\n",
    "difficulty": "medium",
    "examples": "For example,a = \"11\"b = \"1\"Return \"100\".\n"
  },
  {
    "name": "Text Justification",
    "description": "Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified\nYou should pack your words in a greedy approach; that is, pack as many words as you can in each line\nPad extra spaces ' ' when necessary so that each line has exactly L characters\nExtra spaces between words should be distributed as evenly as possible\nIf the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right\nFor the last line of text, it should be left justified and no extra space is inserted between words\n",
    "difficulty": "hard",
    "examples": "For example,words: [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"]\nL: 16.\nReturn the formatted lines as:\n[   \"This    is    an\",   \"example  of text\",   \"justification.  \"\n]Note: Each word is guaranteed not to exceed L in length.\nclick to show corner cases.\nCorner Cases:\nA line other than the last line might contain only one word. What should you do in this case?\nIn this case, that line should be left-justified.\n"
  },
  {
    "name": "Sqrt(x)",
    "description": "Implement int sqrt(int x)\nCompute and return the square root of x\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Climbing Stairs",
    "description": "You are climbing a stair case\nIt takes n steps to reach to the top\nEach time you can either climb 1 or 2 steps\nIn how many distinct ways can you climb to the top?Note: Given n will be a positive integer\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Simplify Path",
    "description": "Given an absolute path for a file (Unix-style), simplify it\n",
    "difficulty": "easy",
    "examples": "For example,path = \"/home/\", => \"/home\"path = \"/a/./b/../../c/\", => \"/c\"\nclick to show corner cases.\nCorner Cases:\nDid you consider the case where path = \"/../\"?\nIn this case, you should return \"/\".\nAnother corner case is the path might contain multiple slashes '/' together, such as \"/home//foo/\".\nIn this case, you should ignore redundant slashes and return \"/home/foo\".\n"
  },
  {
    "name": "Edit Distance",
    "description": "Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2\n(each operation is counted as 1 step\n)You have the following 3 operations permitted on a word:a) Insert a characterb) Delete a characterc) Replace a character",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Set Matrix Zeroes",
    "description": "Given a m x n matrix, if an element is 0, set its entire row and column to 0\nDo it in place\nclick to show follow up\nFollow up:Did you use extra space?A straight forward solution using O(mn) space is probably a bad idea\nA simple improvement uses O(m + n) space, but still not the best solution\nCould you devise a constant space solution?",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Search a 2D Matrix",
    "description": "Write an efficient algorithm that searches for a value in an m x n matrix\nThis matrix has the following properties:Integers in each row are sorted from left to right\nThe first integer of each row is greater than the last integer of the previous row\n",
    "difficulty": "easy",
    "examples": "For example,Consider the following matrix:\n[  [1,   3,  5,  7],  [10, 11, 16, 20],  [23, 30, 34, 50]]Given target = 3, return true.\n"
  },
  {
    "name": "Sort Colors",
    "description": "Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue\nHere, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively\nNote:You are not suppose to use the library's sort function for this problem\nclick to show follow up\nFollow up:A rather straight forward solution is a two-pass algorithm using counting sort\nFirst, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's\nCould you come up with an one-pass algorithm using only constant space?",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Minimum Window Substring",
    "description": "Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n)\n",
    "difficulty": "medium",
    "examples": "For example,S = \"ADOBECODEBANC\"T = \"ABC\"Minimum window is \"BANC\".\nNote:\nIf there is no such window in S that covers all characters in T, return the empty string \"\".\nIf there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.\n"
  },
  {
    "name": "Combinations",
    "description": "Given two integers n and k, return all possible combinations of k numbers out of 1\n\n\nn\n",
    "difficulty": "hard",
    "examples": "For example,If n = 4 and k = 2, a solution is:\n[  [2,4],  [3,4],  [2,3],  [1,2],  [1,3],  [1,4],]"
  },
  {
    "name": "Subsets",
    "description": "Given a set of distinct integers, nums, return all possible subsets\nNote: The solution set must not contain duplicate subsets\n",
    "difficulty": "medium",
    "examples": "For example,If nums = [1,2,3], a solution is:\n[  [3],  [1],  [2],  [1,2,3],  [1,3],  [2,3],  [1,2],  []]"
  },
  {
    "name": "Word Search",
    "description": "Given a 2D board and a word, find if the word exists in the grid\nThe word can be constructed from letters of sequentially adjacent cell, where \"adjacent\" cells are those horizontally or vertically neighboring\nThe same letter cell may not be used more than once\n",
    "difficulty": "hard",
    "examples": "For example,Given board =[  ['A','B','C','E'],  ['S','F','C','S'],  ['A','D','E','E']]word = \"ABCCED\", -> returns true,word = \"SEE\", -> returns true,word = \"ABCB\", -> returns false.\n"
  },
  {
    "name": "Remove Duplicates from Sorted Array II",
    "description": "Follow up for \"Remove Duplicates\":What if duplicates are allowed at most twice?",
    "difficulty": "hard",
    "examples": "For example,Given sorted array nums = [1,1,1,2,2,3],Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.\n"
  },
  {
    "name": "Search in Rotated Sorted Array II",
    "description": "Follow up for \"Search in Rotated Sorted Array\":What if duplicates are allowed?Would this affect the run-time complexity? How and why?Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand\n(i\ne\n, 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2)\nWrite a function to determine if a given target is in the array\nThe array may contain duplicates\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Remove Duplicates from Sorted List II",
    "description": "Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list\n",
    "difficulty": "easy",
    "examples": "For example,Given 1->2->3->3->4->4->5, return 1->2->5.\nGiven 1->1->1->2->3, return 2->3.\n"
  },
  {
    "name": "Remove Duplicates from Sorted List",
    "description": "Given a sorted linked list, delete all duplicates such that each element appear only once\n",
    "difficulty": "medium",
    "examples": "For example,Given 1->1->2, return 1->2.\nGiven 1->1->2->3->3, return 1->2->3.\n"
  },
  {
    "name": "Largest Rectangle in Histogram",
    "description": "Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram\nAbove is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3]\nThe largest rectangle is shown in the shaded area, which has area = 10 unit\n",
    "difficulty": "easy",
    "examples": "For example,Given heights = [2,1,5,6,2,3],return 10.\n"
  },
  {
    "name": "Maximal Rectangle",
    "description": "Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area\n",
    "difficulty": "easy",
    "examples": "For example, given the following matrix:\n1 0 1 0 01 0 1 1 11 1 1 1 11 0 0 1 0Return 6.\n"
  },
  {
    "name": "Partition List",
    "description": "Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x\nYou should preserve the original relative order of the nodes in each of the two partitions\n",
    "difficulty": "medium",
    "examples": "For example,Given 1->4->3->2->5->2 and x = 3,return 1->2->2->4->3->5.\n"
  },
  {
    "name": "Scramble String",
    "description": "Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively\nBelow is one possible representation of s1 = \"great\":great/    \\gr    eat/ \\    /  \\g   r  e   at/ \\a   tTo scramble the string, we may choose any non-leaf node and swap its two children\n",
    "difficulty": "medium",
    "examples": "For example, if we choose the node \"gr\" and swap its two children, it produces a scrambled string \"rgeat\".\n    rgeat   /    \\  rg    eat / \\    /  \\r   g  e   at           / \\          a   tWe say that \"rgeat\" is a scrambled string of \"great\".\nSimilarly, if we continue to swap the children of nodes \"eat\" and \"at\", it produces a scrambled string \"rgtae\".\n    rgtae   /    \\  rg    tae / \\    /  \\r   g  ta  e       / \\      t   aWe say that \"rgtae\" is a scrambled string of \"great\".\nGiven two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.\n"
  },
  {
    "name": "Merge Sorted Array",
    "description": "Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array\nNote:You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2\nThe number of elements initialized in nums1 and nums2 are m and n respectively\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Gray Code",
    "description": "The gray code is a binary numeral system where two successive values differ in only one bit\nGiven a non-negative integer n representing the total number of bits in the code, print the sequence of gray code\nA gray code sequence must begin with 0\n",
    "difficulty": "medium",
    "examples": "For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:\n00 - 001 - 111 - 310 - 2Note:\nFor a given n, a gray code sequence is not uniquely defined.\nFor example, [0,2,3,1] is also a valid gray code sequence according to the above definition.\nFor now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.\n"
  },
  {
    "name": "Subsets II",
    "description": "Given a collection of integers that might contain duplicates, nums, return all possible subsets\nNote: The solution set must not contain duplicate subsets\n",
    "difficulty": "hard",
    "examples": "For example,If nums = [1,2,2], a solution is:\n[  [2],  [1],  [1,2,2],  [2,2],  [1,2],  []]"
  },
  {
    "name": "Decode Ways",
    "description": "A message containing letters from A-Z is being encoded to numbers using the following mapping:'A' -> 1'B' -> 2\n\n\n'Z' -> 26Given an encoded message containing digits, determine the total number of ways to decode it\n",
    "difficulty": "medium",
    "examples": "For example,Given encoded message \"12\",it could be decoded as \"AB\" (1 2) or \"L\" (12).\nThe number of ways decoding \"12\" is 2.\n"
  },
  {
    "name": "Reverse Linked List II",
    "description": "Reverse a linked list from position m to n\nDo it in-place and in one-pass\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven 1->2->3->4->5->NULL, m = 2 and n = 4,return 1->4->3->2->5->NULL.\nNote:\nGiven m, n satisfy the following condition:\n1 ≤ m ≤ n ≤ length of list.\n"
  },
  {
    "name": "Restore IP Addresses",
    "description": "Given a string containing only digits, restore it by returning all possible valid IP address combinations\n",
    "difficulty": "easy",
    "examples": "For example:\nGiven \"25525511135\",return [\"255.255.11.135\", \"255.255.111.35\"]. (Order does not matter)\n"
  },
  {
    "name": "Binary Tree Inorder Traversal",
    "description": "Given a binary tree, return the inorder traversal of its nodes' values\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven binary tree [1,null,2,3],   1    \\     2    /   3return [1,3,2].\nNote: Recursive solution is trivial, could you do it iteratively?\n"
  },
  {
    "name": "Unique Binary Search Trees II",
    "description": "Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1\n\n\nn\n",
    "difficulty": "medium",
    "examples": "For example,Given n = 3, your program should return all 5 unique BST's shown below.\n   1         3     3      2      1    \\       /     /      / \\      \\     3     2     1      1   3      2    /     /       \\                 \\   2     1         2                 3"
  },
  {
    "name": "Unique Binary Search Trees",
    "description": "Given n, how many structurally unique BST's (binary search trees) that store values 1\n\n\nn?",
    "difficulty": "easy",
    "examples": "For example,Given n = 3, there are a total of 5 unique BST's.\n   1         3     3      2      1    \\       /     /      / \\      \\     3     2     1      1   3      2    /     /       \\                 \\   2     1         2                 3"
  },
  {
    "name": "Interleaving String",
    "description": "Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2\n",
    "difficulty": "easy",
    "examples": "For example,Given:\ns1 = \"aabcc\",s2 = \"dbbca\",When s3 = \"aadbbcbcac\", return true.\nWhen s3 = \"aadbbbaccc\", return false.\n"
  },
  {
    "name": "Validate Binary Search Tree",
    "description": "Given a binary tree, determine if it is a valid binary search tree (BST)\nAssume a BST is defined as follows:The left subtree of a node contains only nodes with keys less than the node's key\nThe right subtree of a node contains only nodes with keys greater than the node's key\nBoth the left and right subtrees must also be binary search trees\n",
    "difficulty": "easy",
    "examples": "Example 1:\n    2   / \\  1   3Binary tree [2,1,3], return true.\nExample 2:\n    1   / \\  2   3Binary tree [1,2,3], return false.\n"
  },
  {
    "name": "Recover Binary Search Tree",
    "description": "Two elements of a binary search tree (BST) are swapped by mistake\nRecover the tree without changing its structure\nNote:A solution using O(n) space is pretty straight forward\nCould you devise a constant space solution?",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Same Tree",
    "description": "Given two binary trees, write a function to check if they are equal or not\nTwo binary trees are considered equal if they are structurally identical and the nodes have the same value\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Symmetric Tree",
    "description": "Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center)\n",
    "difficulty": "hard",
    "examples": "For example, this binary tree [1,2,2,3,4,4,3] is symmetric:\n    1   / \\  2   2 / \\ / \\3  4 4  3But the following [1,2,2,null,3,null,3]  is not:\n    1   / \\  2   2   \\   \\   3    3Note:\nBonus points if you could solve it both recursively and iteratively.\n"
  },
  {
    "name": "Binary Tree Level Order Traversal",
    "description": "Given a binary tree, return the level order traversal of its nodes' values\n(ie, from left to right, level by level)\n",
    "difficulty": "easy",
    "examples": "For example:\nGiven binary tree [3,9,20,null,null,15,7],    3   / \\  9  20    /  \\   15   7return its level order traversal as:\n[  [3],  [9,20],  [15,7]]"
  },
  {
    "name": "Binary Tree Zigzag Level Order Traversal",
    "description": "Given a binary tree, return the zigzag level order traversal of its nodes' values\n(ie, from left to right, then right to left for the next level and alternate between)\n",
    "difficulty": "medium",
    "examples": "For example:\nGiven binary tree [3,9,20,null,null,15,7],    3   / \\  9  20    /  \\   15   7return its zigzag level order traversal as:\n[  [3],  [20,9],  [15,7]]"
  },
  {
    "name": "Maximum Depth of Binary Tree",
    "description": "Given a binary tree, find its maximum depth\nThe maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Construct Binary Tree from Preorder and Inorder Traversal",
    "description": "Given preorder and inorder traversal of a tree, construct the binary tree\nNote:You may assume that duplicates do not exist in the tree\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Construct Binary Tree from Inorder and Postorder Traversal",
    "description": "Given inorder and postorder traversal of a tree, construct the binary tree\nNote:You may assume that duplicates do not exist in the tree\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Binary Tree Level Order Traversal II",
    "description": "Given a binary tree, return the bottom-up level order traversal of its nodes' values\n(ie, from left to right, level by level from leaf to root)\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven binary tree [3,9,20,null,null,15,7],    3   / \\  9  20    /  \\   15   7return its bottom-up level order traversal as:\n[  [15,7],  [9,20],  [3]]"
  },
  {
    "name": "Convert Sorted Array to Binary Search Tree",
    "description": "Given an array where elements are sorted in ascending order, convert it to a height balanced BST\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Convert Sorted List to Binary Search Tree",
    "description": "Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Balanced Binary Tree",
    "description": "Given a binary tree, determine if it is height-balanced\nFor this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Minimum Depth of Binary Tree",
    "description": "Given a binary tree, find its minimum depth\nThe minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Path Sum",
    "description": "Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven the below binary tree and sum = 22,              5             / \\            4   8           /   / \\          11  13  4         /  \\      \\        7    2      1return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.\n"
  },
  {
    "name": "Path Sum II",
    "description": "Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum\n",
    "difficulty": "easy",
    "examples": "For example:\nGiven the below binary tree and sum = 22,              5             / \\            4   8           /   / \\          11  13  4         /  \\    / \\        7    2  5   1return[   [5,4,11,2],   [5,8,4,5]]"
  },
  {
    "name": "Flatten Binary Tree to Linked List",
    "description": "Given a binary tree, flatten it to a linked list in-place\n",
    "difficulty": "easy",
    "examples": "For example,Given         1        / \\       2   5      / \\   \\     3   4   6The flattened tree should look like:\n   1    \\     2      \\       3        \\         4          \\           5            \\             6click to show hints.\nHints:\nIf you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.\n"
  },
  {
    "name": "Distinct Subsequences",
    "description": "Given a string S and a string T, count the number of distinct subsequences of T in S\nA subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters\n(ie, \"ACE\" is a subsequence of \"ABCDE\" while \"AEC\" is not)\n",
    "difficulty": "hard",
    "examples": "Here is an example:\nS = \"rabbbit\", T = \"rabbit\"Return 3.\n"
  },
  {
    "name": "Populating Next Right Pointers in Each Node",
    "description": "Given a binary treestruct TreeLinkNode {TreeLinkNode *left;TreeLinkNode *right;TreeLinkNode *next;}Populate each next pointer to point to its next right node\nIf there is no next right node, the next pointer should be set to NULL\nInitially, all next pointers are set to NULL\nNote:You may only use constant extra space\nYou may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children)\n",
    "difficulty": "medium",
    "examples": "For example,Given the following perfect binary tree,         1       /  \\      2    3     / \\  / \\    4  5  6  7After calling your function, the tree should look like:\n         1 -> NULL       /  \\      2 -> 3 -> NULL     / \\  / \\    4->5->6->7 -> NULL"
  },
  {
    "name": "Populating Next Right Pointers in Each Node II",
    "description": "Follow up for problem \"Populating Next Right Pointers in Each Node\"\nWhat if the given tree could be any binary tree? Would your previous solution still work?Note:You may only use constant extra space\n",
    "difficulty": "medium",
    "examples": "For example,Given the following binary tree,         1       /  \\      2    3     / \\    \\    4   5    7After calling your function, the tree should look like:\n         1 -> NULL       /  \\      2 -> 3 -> NULL     / \\    \\    4-> 5 -> 7 -> NULL"
  },
  {
    "name": "Pascal's Triangle",
    "description": "Given numRows, generate the first numRows of Pascal's triangle\n",
    "difficulty": "easy",
    "examples": "For example, given numRows = 5,Return[     [1],    [1,1],   [1,2,1],  [1,3,3,1], [1,4,6,4,1]]"
  },
  {
    "name": "Pascal's Triangle II",
    "description": "Given an index k, return the kth row of the Pascal's triangle\n",
    "difficulty": "easy",
    "examples": "For example, given k = 3,Return [1,3,3,1].\nNote:\nCould you optimize your algorithm to use only O(k) extra space?"
  },
  {
    "name": "Triangle",
    "description": "Given a triangle, find the minimum path sum from top to bottom\nEach step you may move to adjacent numbers on the row below\n",
    "difficulty": "easy",
    "examples": "For example, given the following triangle[     [2],    [3,4],   [6,5,7],  [4,1,8,3]]The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).\nNote:\nBonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.\n"
  },
  {
    "name": "Best Time to Buy and Sell Stock",
    "description": "Say you have an array for which the ith element is the price of a given stock on day i\nIf you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: [7, 1, 5, 3, 6, 4]\nOutput: 5\nmax. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)\nExample 2:\nInput: [7, 6, 4, 3, 1]\nOutput: 0\nIn this case, no transaction is done, i.e. max profit = 0.\n"
  },
  {
    "name": "Best Time to Buy and Sell Stock II",
    "description": "Say you have an array for which the ith element is the price of a given stock on day i\nDesign an algorithm to find the maximum profit\nYou may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times)\nHowever, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again)\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Best Time to Buy and Sell Stock III",
    "description": "Say you have an array for which the ith element is the price of a given stock on day i\nDesign an algorithm to find the maximum profit\nYou may complete at most two transactions\nNote:You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again)\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Binary Tree Maximum Path Sum",
    "description": "Given a binary tree, find the maximum path sum\nFor this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections\nThe path must contain at least one node and does not need to go through the root\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven the below binary tree,       1      / \\     2   3Return 6.\n"
  },
  {
    "name": "Valid Palindrome",
    "description": "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases\n",
    "difficulty": "easy",
    "examples": "For example,\"A man, a plan, a canal: Panama\" is a palindrome.\n\"race a car\" is not a palindrome.\nNote:\nHave you consider that the string might be empty? This is a good question to ask during an interview.\nFor the purpose of this problem, we define empty string as valid palindrome.\n"
  },
  {
    "name": "Word Ladder II",
    "description": "Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:Only one letter can be changed at a timeEach transformed word must exist in the word list\nNote that beginWord is not a transformed word\n",
    "difficulty": "medium",
    "examples": "For example,Given:\nbeginWord = \"hit\"endWord = \"cog\"wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]Return  [    [\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],    [\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]  ]Note:\nReturn an empty list if there is no such transformation sequence.\nAll words have the same length.\nAll words contain only lowercase alphabetic characters.\nYou may assume no duplicates in the word list.\nYou may assume beginWord and endWord are non-empty and are not the same.\nUPDATE (2017/1/20):\nThe wordList parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n"
  },
  {
    "name": "Word Ladder",
    "description": "Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:Only one letter can be changed at a time\nEach transformed word must exist in the word list\nNote that beginWord is not a transformed word\n",
    "difficulty": "easy",
    "examples": "For example,Given:\nbeginWord = \"hit\"endWord = \"cog\"wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]As one shortest transformation is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\",return its length 5.\nNote:\nReturn 0 if there is no such transformation sequence.\nAll words have the same length.\nAll words contain only lowercase alphabetic characters.\nYou may assume no duplicates in the word list.\nYou may assume beginWord and endWord are non-empty and are not the same.\nUPDATE (2017/1/20):\nThe wordList parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n"
  },
  {
    "name": "Longest Consecutive Sequence",
    "description": "Given an unsorted array of integers, find the length of the longest consecutive elements sequence\n",
    "difficulty": "medium",
    "examples": "For example,Given [100, 4, 200, 1, 3, 2],The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.\nYour algorithm should run in O(n) complexity.\n"
  },
  {
    "name": "Sum Root to Leaf Numbers",
    "description": "Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number\n",
    "difficulty": "medium",
    "examples": "An example is the root-to-leaf path 1->2->3 which represents the number 123.\nFind the total sum of all root-to-leaf numbers.\nFor example,    1   / \\  2   3The root-to-leaf path 1->2 represents the number 12.\nThe root-to-leaf path 1->3 represents the number 13.\nReturn the sum = 12 + 13 = 25.\n"
  },
  {
    "name": "Surrounded Regions",
    "description": "Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'\nA region is captured by flipping all 'O's into 'X's in that surrounded region\n",
    "difficulty": "medium",
    "examples": "For example,X X X XX O O XX X O XX O X XAfter running your function, the board should be:\nX X X XX X X XX X X XX O X X"
  },
  {
    "name": "Palindrome Partitioning",
    "description": "Given a string s, partition s such that every substring of the partition is a palindrome\nReturn all possible palindrome partitioning of s\n",
    "difficulty": "easy",
    "examples": "For example, given s = \"aab\",Return[  [\"aa\",\"b\"],  [\"a\",\"a\",\"b\"]]"
  },
  {
    "name": "Palindrome Partitioning II",
    "description": "Given a string s, partition s such that every substring of the partition is a palindrome\nReturn the minimum cuts needed for a palindrome partitioning of s\n",
    "difficulty": "medium",
    "examples": "For example, given s = \"aab\",Return 1 since the palindrome partitioning [\"aa\",\"b\"] could be produced using 1 cut.\n"
  },
  {
    "name": "Clone Graph",
    "description": "Clone an undirected graph\nEach node in the graph contains a label and a list of its neighbors\nOJ's undirected graph serialization:Nodes are labeled uniquely\nWe use # as a separator for each node, and , as a separator for node label and each neighbor of the node\n",
    "difficulty": "hard",
    "examples": "As an example, consider the serialized graph {0,1,2#1,2#2,2}.\nThe graph has a total of three nodes, and therefore contains three parts as separated by #.\nFirst node is labeled as 0. Connect node 0 to both nodes 1 and 2.\nSecond node is labeled as 1. Connect node 1 to node 2.\nThird node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.\nVisually, the graph looks like the following:\n       1      / \\     /   \\    0 --- 2         / \\         \\_/"
  },
  {
    "name": "Gas Station",
    "description": "There are N gas stations along a circular route, where the amount of gas at station i is gas[i]\nYou have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1)\nYou begin the journey with an empty tank at one of the gas stations\nReturn the starting gas station's index if you can travel around the circuit once, otherwise return -1\nNote:The solution is guaranteed to be unique\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Candy",
    "description": "There are N children standing in a line\nEach child is assigned a rating value\nYou are giving candies to these children subjected to the following requirements:Each child must have at least one candy\nChildren with a higher rating get more candies than their neighbors\nWhat is the minimum candies you must give?",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Single Number",
    "description": "Given an array of integers, every element appears twice except for one\nFind that single one\nNote:Your algorithm should have a linear runtime complexity\nCould you implement it without using extra memory?",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Single Number II",
    "description": "Given an array of integers, every element appears three times except for one, which appears exactly once\nFind that single one\nNote:Your algorithm should have a linear runtime complexity\nCould you implement it without using extra memory?",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Copy List with Random Pointer",
    "description": "A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null\nReturn a deep copy of the list\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Word Break",
    "description": "Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words\nYou may assume the dictionary does not contain duplicate words\n",
    "difficulty": "easy",
    "examples": "For example, givens = \"leetcode\",dict = [\"leet\", \"code\"].\nReturn true because \"leetcode\" can be segmented as \"leet code\".\nUPDATE (2017/1/4):\nThe wordDict parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n"
  },
  {
    "name": "Word Break II",
    "description": "Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word\nYou may assume the dictionary does not contain duplicate words\nReturn all such possible sentences\n",
    "difficulty": "hard",
    "examples": "For example, givens = \"catsanddog\",dict = [\"cat\", \"cats\", \"and\", \"sand\", \"dog\"].\nA solution is [\"cats and dog\", \"cat sand dog\"].\nUPDATE (2017/1/4):\nThe wordDict parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n"
  },
  {
    "name": "Linked List Cycle",
    "description": "Given a linked list, determine if it has a cycle in it\nFollow up:Can you solve it without using extra space?",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Linked List Cycle II",
    "description": "Given a linked list, return the node where the cycle begins\nIf there is no cycle, return null\nNote: Do not modify the linked list\nFollow up:Can you solve it without using extra space?",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Reorder List",
    "description": "Given a singly linked list L: L0→L1→…→Ln-1→Ln,reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…You must do this in-place without altering the nodes' values\n",
    "difficulty": "medium",
    "examples": "For example,Given {1,2,3,4}, reorder it to {1,4,2,3}.\n"
  },
  {
    "name": "Binary Tree Preorder Traversal",
    "description": "Given a binary tree, return the preorder traversal of its nodes' values\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven binary tree {1,#,2,3},   1    \\     2    /   3return [1,2,3].\nNote: Recursive solution is trivial, could you do it iteratively?\n"
  },
  {
    "name": "Binary Tree Postorder Traversal",
    "description": "Given a binary tree, return the postorder traversal of its nodes' values\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven binary tree {1,#,2,3},   1    \\     2    /   3return [3,2,1].\nNote: Recursive solution is trivial, could you do it iteratively?\n"
  },
  {
    "name": "LRU Cache",
    "description": "Design and implement a data structure for Least Recently Used (LRU) cache\nIt should support the following operations: get and put\nget(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1\nput(key, value) - Set or insert the value if the key is not already present\nWhen the cache reached its capacity, it should invalidate the least recently used item before inserting a new item\nFollow up:Could you do both operations in O(1) time complexity?",
    "difficulty": "easy",
    "examples": "Example:\nLRUCache cache = new LRUCache( 2 /* capacity */ );cache.put(1, 1);\ncache.put(2, 2);\ncache.get(1);       // returns 1\ncache.put(3, 3);    // evicts key 2\ncache.get(2);       // returns -1 (not found)\ncache.put(4, 4);    // evicts key 1\ncache.get(1);       // returns -1 (not found)\ncache.get(3);       // returns 3\ncache.get(4);       // returns 4\n"
  },
  {
    "name": "Insertion Sort List",
    "description": "Sort a linked list using insertion sort\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Sort List",
    "description": "Sort a linked list in O(n log n) time using constant space complexity\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Max Points on a Line",
    "description": "Given n points on a 2D plane, find the maximum number of points that lie on the same straight line\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Evaluate Reverse Polish Notation",
    "description": "Evaluate the value of an arithmetic expression in Reverse Polish Notation\nValid operators are +, -, *, /\nEach operand may be an integer or another expression\n",
    "difficulty": "medium",
    "examples": "Some examples:\n  [\"2\", \"1\", \"+\", \"3\", \"*\"] -> ((2 + 1) * 3) -> 9  [\"4\", \"13\", \"5\", \"/\", \"+\"] -> (4 + (13 / 5)) -> 6"
  },
  {
    "name": "Reverse Words in a String",
    "description": "Given an input string, reverse the string word by word\n",
    "difficulty": "hard",
    "examples": "For example,Given s = \"the sky is blue\",return \"blue is sky the\".\nUpdate (2015-02-12):\nFor C programmers: Try to solve it in-place in O(1) space.\nclick to show clarification.\nClarification:\nWhat constitutes a word?A sequence of non-space characters constitutes a word.\nCould the input string contain leading or trailing spaces?Yes. However, your reversed string should not contain leading or trailing spaces.\nHow about multiple spaces between two words?Reduce them to a single space in the reversed string.\n"
  },
  {
    "name": "Maximum Product Subarray",
    "description": "Find the contiguous subarray within an array (containing at least one number) which has the largest product\n",
    "difficulty": "hard",
    "examples": "For example, given the array [2,3,-2,4],the contiguous subarray [2,3] has the largest product = 6.\n"
  },
  {
    "name": "Find Minimum in Rotated Sorted Array",
    "description": "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand\n(i\ne\n, 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2)\nFind the minimum element\nYou may assume no duplicate exists in the array\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Find Minimum in Rotated Sorted Array II",
    "description": "Follow up for \"Find Minimum in Rotated Sorted Array\":What if duplicates are allowed?Would this affect the run-time complexity? How and why?Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand\n(i\ne\n, 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2)\nFind the minimum element\nThe array may contain duplicates\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Min Stack",
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time\npush(x) -- Push element x onto stack\npop() -- Removes the element on top of the stack\ntop() -- Get the top element\ngetMin() -- Retrieve the minimum element in the stack\n",
    "difficulty": "easy",
    "examples": "Example:\nMinStack minStack = new MinStack();minStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --> Returns -3.\nminStack.pop();\nminStack.top();      --> Returns 0.\nminStack.getMin();   --> Returns -2.\n"
  },
  {
    "name": "Intersection of Two Linked Lists",
    "description": "Write a program to find the node at which the intersection of two singly linked lists begins\n",
    "difficulty": "medium",
    "examples": "For example, the following two linked lists:\nA:          a1 → a2\n                   ↘                     c1 → c2 → c3                   ↗B:     b1 → b2 → b3\nbegin to intersect at node c1.\nNotes:\nIf the two linked lists have no intersection at all, return null.\nThe linked lists must retain their original structure after the function returns.\nYou may assume there are no cycles anywhere in the entire linked structure.\nYour code should preferably run in O(n) time and use only O(1) memory.\nCredits:Special thanks to @stellari for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Find Peak Element",
    "description": "A peak element is an element that is greater than its neighbors\nGiven an input array where num[i] ≠ num[i+1], find a peak element and return its index\nThe array may contain multiple peaks, in that case return the index to any one of the peaks is fine\nYou may imagine that num[-1] = num[n] = -∞\n",
    "difficulty": "medium",
    "examples": "For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.\nclick to show spoilers.\nNote:\nYour solution should be in logarithmic complexity.\nCredits:Special thanks to @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Maximum Gap",
    "description": "Given an unsorted array, find the maximum difference between the successive elements in its sorted form\nTry to solve it in linear time/space\nReturn 0 if the array contains less than 2 elements\nYou may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range\nCredits:Special thanks to @porker2008 for adding this problem and creating all test cases\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Compare Version Numbers",
    "description": "Compare two version numbers version1 and version2\nIf version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0\nYou may assume that the version strings are non-empty and contain only digits and the\ncharacter\nThe\ncharacter does not represent a decimal point and is used to separate number sequences\nFor instance, 2\n5 is not \"two and a half\" or \"half way to version three\", it is the fifth second-level revision of the second first-level revision\n",
    "difficulty": "easy",
    "examples": "Here is an example of version numbers ordering:\n0.1 < 1.1 < 1.2 < 13.37\nCredits:Special thanks to @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Fraction to Recurring Decimal",
    "description": "Given two integers representing the numerator and denominator of a fraction, return the fraction in string format\nIf the fractional part is repeating, enclose the repeating part in parentheses\n",
    "difficulty": "easy",
    "examples": "For example,Given numerator = 1, denominator = 2, return \"0.5\".\nGiven numerator = 2, denominator = 1, return \"2\".\nGiven numerator = 2, denominator = 3, return \"0.(6)\".\n  No scary math, just apply elementary math knowledge. Still remember how to perform a long division?\n  Try a long division on 4/9, the repeating part is obvious. Now try 4/333. Do you see a pattern?\n  Be wary of edge cases! List out as many test cases as you can think of and test your code thoroughly.\nCredits:Special thanks to @Shangrila for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Two Sum II - Input array is sorted",
    "description": "Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2\nPlease note that your returned answers (both index1 and index2) are not zero-based\nYou may assume that each input would have exactly one solution and you may not use the same element twice\nInput: numbers={2, 7, 11, 15}, target=9Output: index1=1, index2=2",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Excel Sheet Column Title",
    "description": "Given a positive integer, return its corresponding column title as appear in an Excel sheet\n",
    "difficulty": "medium",
    "examples": "For example:\n    1 -> A    2 -> B    3 -> C    ...\n    26 -> Z    27 -> AA    28 -> ABCredits:Special thanks to @ifanchu for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Majority Element",
    "description": "Given an array of size n, find the majority element\nThe majority element is the element that appears more than ⌊ n/2 ⌋ times\nYou may assume that the array is non-empty and the majority element always exist in the array\nCredits:Special thanks to @ts for adding this problem and creating all test cases\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Excel Sheet Column Number",
    "description": "Related to question Excel Sheet Column TitleGiven a column title as appear in an Excel sheet, return its corresponding column number\n",
    "difficulty": "hard",
    "examples": "For example:\n    A -> 1    B -> 2    C -> 3    ...\n    Z -> 26    AA -> 27    AB -> 28Credits:Special thanks to @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Factorial Trailing Zeroes",
    "description": "Given an integer n, return the number of trailing zeroes in n!\nNote: Your solution should be in logarithmic time complexity\nCredits:Special thanks to @ts for adding this problem and creating all test cases\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Binary Search Tree Iterator",
    "description": "Implement an iterator over a binary search tree (BST)\nYour iterator will be initialized with the root node of a BST\nCalling next() will return the next smallest number in the BST\nNote: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree\nCredits:Special thanks to @ts for adding this problem and creating all test cases\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Dungeon Game",
    "description": "table\ndungeon,\ndungeon th,\ndungeon td {border:3px solid black;}\ndungeon th,\ndungeon td {text-align: center;height: 70px;width: 70px;}The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon\nThe dungeon consists of M x N rooms laid out in a 2D grid\nOur valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess\nThe knight has an initial health point represented by a positive integer\nIf at any point his health point drops to 0 or below, he dies immediately\nSome of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms;other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers)\nIn order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step\nWrite a function to determine the knight's minimum initial health so that he is able to rescue the princess\n",
    "difficulty": "hard",
    "examples": "For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN.\n-2 (K)-33-5-1011030-5 (P)Notes:\nThe knight's health has no upper bound.\nAny room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.\nCredits:Special thanks to @stellari for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Largest Number",
    "description": "Given a list of non negative integers, arrange them such that they form the largest number\n",
    "difficulty": "medium",
    "examples": "For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.\nNote: The result may be very large, so you need to return a string instead of an integer.\nCredits:Special thanks to @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Repeated DNA Sequences",
    "description": "Best Time to Buy and Sell Stock IV",
    "difficulty": "hard",
    "examples": "All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: \"ACGAATTCCG\". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.\nWrite a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.\nFor example,Given s = \"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT\",Return:\n[\"AAAAACCCCC\", \"CCCCCAAAAA\"].\nBest Time to Buy and Sell Stock IV"
  },
  {
    "name": "Rotate Array",
    "description": "Rotate an array of n elements to the right by k steps\n",
    "difficulty": "hard",
    "examples": "For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].\nNote:\nTry to come up as many solutions as you can, there are at least 3 different ways to solve this problem.\n[show hint]Hint:\nCould you do it in-place with O(1) extra space?Related problem: Reverse Words in a String II\nCredits:Special thanks to @Freezen for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Reverse Bits",
    "description": "Reverse bits of a given 32 bits unsigned integer\n",
    "difficulty": "medium",
    "examples": "For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).\nFollow up:\nIf this function is called many times, how would you optimize it?Related problem: Reverse Integer\nCredits:Special thanks to @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Number of 1 Bits",
    "description": "Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight)\n",
    "difficulty": "easy",
    "examples": "For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.\nCredits:Special thanks to @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "House Robber",
    "description": "You are a professional robber planning to rob houses along a street\nEach house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night\nGiven a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police\nCredits:Special thanks to @ifanchu for adding this problem and creating all test cases\nAlso thanks to @ts for adding additional test cases\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Binary Tree Right Side View",
    "description": "Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven the following binary tree,   1            <--- /   \\2     3         <--- \\     \\  5     4       <---You should return [1, 3, 4].\nCredits:Special thanks to @amrsaqr for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Number of Islands",
    "description": "Given a 2d grid map of '1's (land) and '0's (water), count the number of islands\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically\nYou may assume all four edges of the grid are all surrounded by water\n",
    "difficulty": "easy",
    "examples": "Example 1:\n11110110101100000000Answer: 1\nExample 2:\n11000110000010000011Answer: 3\nCredits:Special thanks to @mithmatt for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Bitwise AND of Numbers Range",
    "description": "Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive\n",
    "difficulty": "medium",
    "examples": "For example, given the range [5, 7], you should return 4.\nCredits:Special thanks to @amrsaqr for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Happy Number",
    "description": "Write an algorithm to determine if a number is \"happy\"\nA happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1\nThose numbers for which this process ends in 1 are happy numbers\n",
    "difficulty": "hard",
    "examples": "Example: 19 is a happy number\n12 + 92 = 8282 + 22 = 6862 + 82 = 10012 + 02 + 02 = 1Credits:Special thanks to @mithmatt and @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Remove Linked List Elements",
    "description": "Remove all elements from a linked list of integers that have value val\n",
    "difficulty": "medium",
    "examples": "ExampleGiven: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6,  val = 6\nReturn: 1 --> 2 --> 3 --> 4 --> 5\nCredits:Special thanks to @mithmatt for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Count Primes",
    "description": "Description:Count the number of prime numbers less than a non-negative number, n\nCredits:Special thanks to @mithmatt for adding this problem and creating all test cases\nLet's start with a isPrime function\nTo determine if a number is prime, we need to check if it is not divisible by any number less than n\nThe runtime complexity of isPrime function would be O(n) and hence counting the total prime numbers up to n would be O(n2)\nCould we do better?As we know the number must not be divisible by any number > n / 2, we can immediately cut the total iterations half by dividing only up to n / 2\nCould we still do better?Let's write down all of 12's factors:2 × 6 = 123 × 4 = 124 × 3 = 126 × 2 = 12As you can see, calculations of 4 × 3 and 6 × 2 are not necessary\nTherefore, we only need to consider factors up to √n because, if n is divisible by some number p, then n = p × q and since p ≤ q, we could derive that p ≤ √n\nOur total runtime has now improved to O(n1\n5), which is slightly better\nIs there a faster approach?public int countPrimes(int n) {int count = 0;for (int i = 1; i < n; i++) {if (isPrime(i)) count++;}return count;}private boolean isPrime(int num) {if (num <= 1) return false;// Loop's ending condition is i * i <= num instead of i <= sqrt(num)// to avoid repeatedly calling an expensive function sqrt()\nfor (int i = 2; i * i <= num; i++) {if (num % i == 0) return false;}return true;}The Sieve of Eratosthenes is one of the most efficient ways to find all prime numbers up to n\nBut don't let that name scare you, I promise that the concept is surprisingly simple\nSieve of Eratosthenes: algorithm steps for primes below 121\n\"Sieve of Eratosthenes Animation\" by SKopp is licensed under CC BY 2\n0\nWe start off with a table of n numbers\nLet's look at the first number, 2\nWe know all multiples of 2 must not be primes, so we mark them off as non-primes\nThen we look at the next number, 3\nSimilarly, all multiples of 3 such as 3 × 2 = 6, 3 × 3 = 9,\n\n\nmust not be primes, so we mark them off as well\nNow we look at the next number, 4, which was already marked off\nWhat does this tell you? Should you mark off all multiples of 4 as well?4 is not a prime because it is divisible by 2, which means all multiples of 4 must also be divisible by 2 and were already marked off\nSo we can skip 4 immediately and go to the next number, 5\nNow, all multiples of 5 such as 5 × 2 = 10, 5 × 3 = 15, 5 × 4 = 20, 5 × 5 = 25,\n\n\ncan be marked off\nThere is a slight optimization here, we do not need to start from 5 × 2 = 10\nWhere should we start marking off?In fact, we can mark off multiples of 5 starting at 5 × 5 = 25, because 5 × 2 = 10 was already marked off by multiple of 2, similarly 5 × 3 = 15 was already marked off by multiple of 3\nTherefore, if the current number is p, we can always mark off multiples of p starting at p2, then in increments of p: p2 + p, p2 + 2p,\n\n\nNow what should be the terminating loop condition?It is easy to say that the terminating loop condition is p < n, which is certainly correct but not efficient\nDo you still remember Hint #3?Yes, the terminating loop condition can be p < √n, as all non-primes ≥ √n must have already been marked off\nWhen the loop terminates, all the numbers in the table that are non-marked are prime\nThe Sieve of Eratosthenes uses an extra O(n) memory and its runtime complexity is O(n log log n)\nFor the more mathematically inclined readers, you can read more about its algorithm complexity on Wikipedia\npublic int countPrimes(int n) {boolean[] isPrime = new boolean[n];for (int i = 2; i < n; i++) {isPrime[i] = true;}// Loop's ending condition is i * i < n instead of i < sqrt(n)// to avoid repeatedly calling an expensive function sqrt()\nfor (int i = 2; i * i < n; i++) {if (!isPrime[i]) continue;for (int j = i * i; j < n; j += i) {isPrime[j] = false;}}int count = 0;for (int i = 2; i < n; i++) {if (isPrime[i]) count++;}return count;}",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Isomorphic Strings",
    "description": "Given two strings s and t, determine if they are isomorphic\nTwo strings are isomorphic if the characters in s can be replaced to get t\nAll occurrences of a character must be replaced with another character while preserving the order of characters\nNo two characters may map to the same character but a character may map to itself\n",
    "difficulty": "easy",
    "examples": "For example,Given \"egg\", \"add\", return true.\nGiven \"foo\", \"bar\", return false.\nGiven \"paper\", \"title\", return true.\nNote:\nYou may assume both s and t have the same length.\n"
  },
  {
    "name": "Reverse Linked List",
    "description": "Reverse a singly linked list\nclick to show more hints\nHint:A linked list can be reversed either iteratively or recursively\nCould you implement both?",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Course Schedule",
    "description": "There are a total of n courses you have to take, labeled from 0 to n - 1\n",
    "difficulty": "hard",
    "examples": "Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]\nGiven the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?For example:\n2, [[1,0]]There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.\n2, [[1,0],[0,1]]There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.\nNote:\nThe input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.\nYou may assume that there are no duplicate edges in the input prerequisites.\nclick to show more hints.\nHints:\nThis problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.\nTopological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.\nTopological sort could also be done via BFS.\n"
  },
  {
    "name": "Implement Trie (Prefix Tree)",
    "description": "Implement a trie with insert, search, and startsWith methods\nNote:You may assume that all inputs are consist of lowercase letters a-z\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Minimum Size Subarray Sum",
    "description": "Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s\nIf there isn't one, return 0 instead\n",
    "difficulty": "hard",
    "examples": "For example, given the array [2,3,1,2,4,3] and s = 7,the subarray [4,3] has the minimal length under the problem constraint.\nclick to show more practice.\nMore practice:\nIf you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).\nCredits:Special thanks to @Freezen for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Course Schedule II",
    "description": "There are a total of n courses you have to take, labeled from 0 to n - 1\n",
    "difficulty": "hard",
    "examples": "Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]\nGiven the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.\nThere may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.\nFor example:\n2, [[1,0]]There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]\n4, [[1,0],[2,0],[3,1],[3,2]]There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].\nNote:\nThe input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.\nYou may assume that there are no duplicate edges in the input prerequisites.\nclick to show more hints.\nHints:\nThis problem is equivalent to finding the topological order in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.\nTopological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.\nTopological sort could also be done via BFS.\n"
  },
  {
    "name": "Add and Search Word - Data structure design",
    "description": "Design a data structure that supports the following two operations:void addWord(word)bool search(word)search(word) can search a literal word or a regular expression string containing only letters a-z or\n\nA\nmeans it can represent any one letter\n",
    "difficulty": "hard",
    "examples": "For example:\naddWord(\"bad\")addWord(\"dad\")addWord(\"mad\")search(\"pad\") -> falsesearch(\"bad\") -> truesearch(\".ad\") -> true\nsearch(\"b..\") -> true\nNote:\nYou may assume that all words are consist of lowercase letters a-z.\nclick to show hint.\nYou should be familiar with how a Trie works. If not, please work on this problem: Implement Trie (Prefix Tree) first.\n"
  },
  {
    "name": "Word Search II",
    "description": "Given a 2D board and a list of words from the dictionary, find all words in the board\nEach word must be constructed from letters of sequentially adjacent cell, where \"adjacent\" cells are those horizontally or vertically neighboring\nThe same letter cell may not be used more than once in a word\n",
    "difficulty": "medium",
    "examples": "For example,Given words = [\"oath\",\"pea\",\"eat\",\"rain\"] and board =[  ['o','a','a','n'],  ['e','t','a','e'],  ['i','h','k','r'],  ['i','f','l','v']]Return [\"eat\",\"oath\"].\nNote:\nYou may assume that all inputs are consist of lowercase letters a-z.\nclick to show hint.\nYou would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?\nIf the current candidate does not exist in all words' prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.\n"
  },
  {
    "name": "House Robber II",
    "description": "Note: This is an extension of House Robber\nAfter robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention\nThis time, all houses at this place are arranged in a circle\nThat means the first house is the neighbor of the last one\nMeanwhile, the security system for these houses remain the same as for those in the previous street\nGiven a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police\nCredits:Special thanks to @Freezen for adding this problem and creating all test cases\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Shortest Palindrome",
    "description": "Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it\nFind and return the shortest palindrome you can find by performing this transformation\n",
    "difficulty": "medium",
    "examples": "For example:\nGiven \"aacecaaa\", return \"aaacecaaa\".\nGiven \"abcd\", return \"dcbabcd\".\nCredits:Special thanks to @ifanchu for adding this problem and creating all test cases. Thanks to @Freezen for additional test cases.\n"
  },
  {
    "name": "Kth Largest Element in an Array",
    "description": "Find the kth largest element in an unsorted array\nNote that it is the kth largest element in the sorted order, not the kth distinct element\n",
    "difficulty": "easy",
    "examples": "For example,Given [3,2,1,5,6,4] and k = 2, return 5.\nNote:\nYou may assume k is always valid, 1 ≤ k ≤ array's length.\nCredits:Special thanks to @mithmatt for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Combination Sum III",
    "description": "Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers\n",
    "difficulty": "medium",
    "examples": " Example 1:\nInput:  k = 3,  n = 7\nOutput:\n[[1,2,4]] Example 2:\nInput:  k = 3,  n = 9\nOutput:\n[[1,2,6], [1,3,5], [2,3,4]]Credits:Special thanks to @mithmatt for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Contains Duplicate",
    "description": "Given an array of integers, find if the array contains any duplicates\nYour function should return true if any value appears at least twice in the array, and it should return false if every element is distinct\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "The Skyline Problem",
    "description": "A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance\nNow suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B)\nThe geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height\nIt is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0\nYou may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0\nFor instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]\nThe output is a list of \"key points\" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3],\n\n\n] that uniquely defines a skyline\nA key point is the left endpoint of a horizontal line segment\nNote that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height\nAlso, the ground in between any two adjacent buildings should be considered part of the skyline contour\nFor instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]\nNotes:The number of buildings in any input list is guaranteed to be in the range [0, 10000]\nThe input list is already sorted in ascending order by the left x position Li\nThe output list must be sorted by the x position\nThere must be no consecutive horizontal lines of equal height in the output skyline\nFor instance, [\n\n\n[2 3], [4 5], [7 5], [11 5], [12 7]\n\n\n] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [\n\n\n[2 3], [4 5], [12 7],\n\n\n]Credits:Special thanks to @stellari for adding this problem, creating these two awesome images and all test cases\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Contains Duplicate II",
    "description": "Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Contains Duplicate III",
    "description": "Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Maximal Square",
    "description": "Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area\n",
    "difficulty": "medium",
    "examples": "For example, given the following matrix:\n1 0 1 0 01 0 1 1 11 1 1 1 11 0 0 1 0Return 4.\nCredits:Special thanks to @Freezen for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Count Complete Tree Nodes",
    "description": "Given a complete binary tree, count the number of nodes\nDefinition of a complete binary tree from Wikipedia:In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible\nIt can have between 1 and 2h nodes inclusive at the last level h\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Rectangle Area",
    "description": "Find the total area covered by two rectilinear rectangles in a 2D plane\nEach rectangle is defined by its bottom left corner and top right corner as shown in the figure\nAssume that the total area is never beyond the maximum possible value of int\nCredits:Special thanks to @mithmatt for adding this problem, creating the above image and all test cases\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Basic Calculator",
    "description": "Implement a basic calculator to evaluate a simple expression string\nThe expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces\nYou may assume that the given expression is always valid\n",
    "difficulty": "medium",
    "examples": "Some examples:\n\"1 + 1\" = 2\" 2-1 + 2 \" = 3\"(1+(4+5+2)-3)+(6+8)\" = 23Note: Do not use the eval built-in library function.\n"
  },
  {
    "name": "Implement Stack using Queues",
    "description": "Implement the following operations of a stack using queues\npush(x) -- Push element x onto stack\npop() -- Removes the element on top of the stack\ntop() -- Get the top element\nempty() -- Return whether the stack is empty\nNotes:You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid\nDepending on your language, queue may not be supported natively\nYou may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue\n",
    "difficulty": "medium",
    "examples": "You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and all test cases.\n"
  },
  {
    "name": "Invert Binary Tree",
    "description": "Invert a binary tree\n4/   \\2     7/ \\   / \\1   3 6   9to4/   \\7     2/ \\   / \\9   6 3   1Trivia:This problem was inspired by this original tweet by Max Howell:Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Basic Calculator II",
    "description": "Implement a basic calculator to evaluate a simple expression string\nThe expression string contains only non-negative integers, +, -, *, / operators and empty spaces\nThe integer division should truncate toward zero\nYou may assume that the given expression is always valid\n",
    "difficulty": "hard",
    "examples": "Some examples:\n\"3+2*2\" = 7\" 3/2 \" = 1\" 3+5 / 2 \" = 5Note: Do not use the eval built-in library function.\nCredits:Special thanks to @ts for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Summary Ranges",
    "description": "Given a sorted integer array without duplicates, return the summary of its ranges\n",
    "difficulty": "medium",
    "examples": "For example, given [0,1,2,4,5,7], return [\"0->2\",\"4->5\",\"7\"].\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Majority Element II",
    "description": "Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times\nThe algorithm should run in linear time and in O(1) space\nHow many majority elements could it possibly have?Do you have a better hint? Suggest it!",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Kth Smallest Element in a BST",
    "description": "Given a binary search tree, write a function kthSmallest to find the kth smallest element in it\nNote:You may assume k is always valid, 1 ≤ k ≤ BST's total elements\nFollow up:What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?Try to utilize the property of a BST\nWhat if you could modify the BST node's structure?The optimal runtime complexity is O(height of BST)\nCredits:Special thanks to @ts for adding this problem and creating all test cases\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Power of Two",
    "description": "Given an integer, write a function to determine if it is a power of two\nCredits:Special thanks to @jianchao\nli\nfighter for adding this problem and creating all test cases\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Implement Queue using Stacks",
    "description": "Implement the following operations of a queue using stacks\npush(x) -- Push element x to the back of queue\npop() -- Removes the element from in front of queue\npeek() -- Get the front element\nempty() -- Return whether the queue is empty\nNotes:You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid\nDepending on your language, stack may not be supported natively\nYou may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack\n",
    "difficulty": "medium",
    "examples": "You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).\n"
  },
  {
    "name": "Number of Digit One",
    "description": "Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n\n",
    "difficulty": "hard",
    "examples": "For example:\nGiven n = 13,Return 6, because digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.\n  Beware of overflow.\n"
  },
  {
    "name": "Palindrome Linked List",
    "description": "Given a singly linked list, determine if it is a palindrome\nFollow up:Could you do it in O(n) time and O(1) space?",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Lowest Common Ancestor of a Binary Search Tree",
    "description": "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST\nAccording to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself)\n”_______6______/              \\___2__          ___8__/      \\        /      \\0      _4       7       9/  \\3   5",
    "difficulty": "medium",
    "examples": "For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.\n"
  },
  {
    "name": "Lowest Common Ancestor of a Binary Tree",
    "description": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree\nAccording to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself)\n”_______3______/              \\___5__          ___1__/      \\        /      \\6      _2       0       8/  \\7   4",
    "difficulty": "medium",
    "examples": "For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.\n"
  },
  {
    "name": "Delete Node in a Linked List",
    "description": "Write a function to delete a node (except the tail) in a singly linked list, given only access to that node\nSupposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Product of Array Except Self",
    "description": "Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]\nSolve it without division and in O(n)\n",
    "difficulty": "easy",
    "examples": "For example, given [1,2,3,4], return [24,12,8,6].\nFollow up:\nCould you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)\n"
  },
  {
    "name": "Sliding Window Maximum",
    "description": "Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right\nYou can only see the k numbers in the window\nEach time the sliding window moves right by one position\n",
    "difficulty": "easy",
    "examples": "For example,Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.\nWindow position                Max---------------               -----[1  3  -1] -3  5  3  6  7       3 1 [3  -1  -3] 5  3  6  7       3 1  3 [-1  -3  5] 3  6  7       5 1  3  -1 [-3  5  3] 6  7       5 1  3  -1  -3 [5  3  6] 7       6 1  3  -1  -3  5 [3  6  7]      7Therefore, return the max sliding window as [3,3,5,5,6,7].\nNote:\nYou may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.\nFollow up:\nCould you solve it in linear time?  How about using a data structure such as deque (double-ended queue)?  The queue size need not be the same as the window’s size.\n  Remove redundant elements and the queue should store only elements that need to be considered.\n"
  },
  {
    "name": "Search a 2D Matrix II",
    "description": "Write an efficient algorithm that searches for a value in an m x n matrix\nThis matrix has the following properties:Integers in each row are sorted in ascending from left to right\nIntegers in each column are sorted in ascending from top to bottom\n",
    "difficulty": "medium",
    "examples": "For example,Consider the following matrix:\n[  [1,   4,  7, 11, 15],  [2,   5,  8, 12, 19],  [3,   6,  9, 16, 22],  [10, 13, 14, 17, 24],  [18, 21, 23, 26, 30]]Given target = 5, return true.\nGiven target = 20, return false.\n"
  },
  {
    "name": "Different Ways to Add Parentheses",
    "description": "Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators\nThe valid operators are +, - and *\n",
    "difficulty": "hard",
    "examples": "Example 1Input: \"2-1-1\".\n((2-1)-1) = 0(2-(1-1)) = 2Output: [0, 2]\nExample 2Input: \"2*3-4*5\"\n(2*(3-(4*5))) = -34((2*3)-(4*5)) = -14((2*(3-4))*5) = -10(2*((3-4)*5)) = -10(((2*3)-4)*5) = 10Output: [-34, -14, -10, -10, 10]\nCredits:Special thanks to @mithmatt for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Valid Anagram",
    "description": "Given two strings s and t, write a function to determine if t is an anagram of s\n",
    "difficulty": "easy",
    "examples": "For example,s = \"anagram\", t = \"nagaram\", return true.\ns = \"rat\", t = \"car\", return false.\nNote:\nYou may assume the string contains only lowercase alphabets.\nFollow up:\nWhat if the inputs contain unicode characters? How would you adapt your solution to such case?"
  },
  {
    "name": "Binary Tree Paths",
    "description": "Given a binary tree, return all root-to-leaf paths\n",
    "difficulty": "medium",
    "examples": "For example, given the following binary tree:\n   1 /   \\2     3 \\  5All root-to-leaf paths are:\n[\"1->2->5\", \"1->3\"]Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Add Digits",
    "description": "Given a non-negative integer num, repeatedly add all its digits until the result has only one digit\n",
    "difficulty": "medium",
    "examples": "For example:\nGiven num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.\nFollow up:\nCould you do it without any loop/recursion in O(1) runtime?  A naive implementation of the above process is trivial. Could you come up with other methods?\n  What are all the possible results?  How do they occur, periodically or randomly?  You may find this Wikipedia article useful.\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Single Number III",
    "description": "Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice\nFind the two elements that appear only once\n",
    "difficulty": "easy",
    "examples": "For example:\nGiven nums = [1, 2, 1, 3, 2, 5], return [3, 5].\nNote:\nThe order of the result is not important. So in the above example, [5, 3] is also correct.\nYour algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Ugly Number",
    "description": "Write a program to check whether a given number is an ugly number\n",
    "difficulty": "easy",
    "examples": "Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.\nNote that 1 is typically treated as an ugly number.\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Ugly Number II",
    "description": "Write a program to find the n-th ugly number\n",
    "difficulty": "easy",
    "examples": "Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.\nNote that 1 is typically treated as an ugly number, and n does not exceed 1690.\n  The naive approach is to call isUgly for every number until you reach the nth one. Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.\n  An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.\n  The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: L1, L2, and L3.\n  Assume you have Uk, the kth ugly number. Then Uk+1 must be Min(L1 * 2, L2 * 3, L3 * 5).\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Missing Number",
    "description": "Given an array containing n distinct numbers taken from 0, 1, 2,\n\n\n, n, find the one that is missing from the array\n",
    "difficulty": "medium",
    "examples": "For example,Given nums = [0, 1, 3] return 2.\nNote:\nYour algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Integer to English Words",
    "description": "Convert a non-negative integer to its english words representation\nGiven input is guaranteed to be less than 231 - 1\n",
    "difficulty": "medium",
    "examples": "For example,123 -> \"One Hundred Twenty Three\"12345 -> \"Twelve Thousand Three Hundred Forty Five\"1234567 -> \"One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven\"  Did you see a pattern in dividing the number into chunk of words? For example, 123 and 123000.\n  Group the number by thousands (3 digits). You can write a helper function that takes a number less than 1000 and convert just that chunk to words.\n  There are many edge cases. What are some good test cases? Does your code work with input such as 0? Or 1000010? (middle chunk is zero and should not be printed out)\n"
  },
  {
    "name": "H-Index",
    "description": "Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index\nAccording to the definition of h-index on Wikipedia: \"A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each\n\"",
    "difficulty": "easy",
    "examples": "For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.\nNote: If there are several possible values for h, the maximum one is taken as the h-index.\n  An easy approach is to sort the array first.\n  What are the possible values of h-index?  A faster approach is to use extra space.\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "H-Index II",
    "description": "Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?Expected runtime complexity is in O(log n) and the input is sorted\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "First Bad Version",
    "description": "You are a product manager and currently leading a team to develop a new product\nUnfortunately, the latest version of your product fails the quality check\nSince each version is developed based on the previous version, all the versions after a bad version are also bad\nSuppose you have n versions [1, 2,\n\n\n, n] and you want to find out the first bad one, which causes all the following ones to be bad\nYou are given an API bool isBadVersion(version) which will return whether version is bad\nImplement a function to find the first bad version\nYou should minimize the number of calls to the API\nCredits:Special thanks to @jianchao\nli\nfighter for adding this problem and creating all test cases\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Perfect Squares",
    "description": "Expression Add Operators",
    "difficulty": "medium",
    "examples": "Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.\nFor example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\nExpression Add Operators"
  },
  {
    "name": "Move Zeroes",
    "description": "Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements\n",
    "difficulty": "easy",
    "examples": "For example, given nums  = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].\nNote:\nYou must do this in-place without making a copy of the array.\nMinimize the total number of operations.\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Peeking Iterator",
    "description": "Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next()\n",
    "difficulty": "hard",
    "examples": "Here is an example. Assume that the iterator is initialized to the beginning of the list: [1, 2, 3].\nCall next() gets you 1, the first element in the list.\nNow you call peek() and it returns 2, the next element. Calling next() after that still return 2.\nYou call next() the final time and it returns 3, the last element. Calling hasNext() after that should return false.\n  Think of \"looking ahead\". You want to cache the next element.\n  Is one variable sufficient? Why or why not?  Test your design with call order of peek() before next() vs next() before peek().\n  For a clean implementation, check out Google's guava library source code.\nFollow up: How would you extend your design to be generic and work with all types, not just integer?\nCredits:Special thanks to @porker2008 for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Find the Duplicate Number",
    "description": "Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist\nAssume that there is only one duplicate number, find the duplicate one\nNote:You must not modify the array (assume the array is read only)\nYou must use only constant, O(1) extra space\nYour runtime complexity should be less than O(n2)\nThere is only one duplicate number in the array, but it could be repeated more than once\nCredits:Special thanks to @jianchao\nli\nfighter for adding this problem and creating all test cases\n",
    "difficulty": "hard",
    "examples": ""
  },
  {
    "name": "Game of Life",
    "description": "According to the Wikipedia's article: \"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970\n\"Given a board with m by n cells, each cell has an initial state live (1) or dead (0)\nEach cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):Any live cell with fewer than two live neighbors dies, as if caused by under-population\nAny live cell with two or three live neighbors lives on to the next generation\nAny live cell with more than three live neighbors dies, as if by over-population\n\nAny dead cell with exactly three live neighbors becomes a live cell, as if by reproduction\nWrite a function to compute the next state (after one update) of the board given its current state\nFollow up:Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells\nIn this question, we represent the board using a 2D array\nIn principle, the board is infinite, which would cause problems when the active area encroaches the border of the array\nHow would you address these problems?Credits:Special thanks to @jianchao\nli\nfighter for adding this problem and creating all test cases\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Word Pattern",
    "description": "Given a pattern and a string str, find if str follows the same pattern\nHere follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str\n",
    "difficulty": "easy",
    "examples": "Examples:\npattern = \"abba\", str = \"dog cat cat dog\" should return true.\npattern = \"abba\", str = \"dog cat cat fish\" should return false.\npattern = \"aaaa\", str = \"dog cat cat dog\" should return false.\npattern = \"abba\", str = \"dog dog dog dog\" should return false.\nNotes:\nYou may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.\nCredits:Special thanks to @minglotus6 for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Nim Game",
    "description": "You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones\nThe one who removes the last stone will be the winner\nYou will take the first turn to remove the stones\nBoth of you are very clever and have optimal strategies for the game\nWrite a function to determine whether you can win the game given the number of stones in the heap\n",
    "difficulty": "hard",
    "examples": "For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.\n  If there are 5 stones in the heap, could you figure out a way to remove the stones such that you will always be the winner?Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Find Median from Data Stream",
    "description": "Median is the middle value in an ordered integer list\nIf the size of the list is even, there is no middle value\nSo the median is the mean of the two middle value\n",
    "difficulty": "easy",
    "examples": "Examples:\n[2,3,4] , the median is 3[2,3], the median is (2 + 3) / 2 = 2.5\nDesign a data structure that supports the following two operations:\nvoid addNum(int num) - Add a integer number from the data stream to the data structure.\ndouble findMedian() - Return the median of all elements so far.\nFor example:\naddNum(1)addNum(2)findMedian() -> 1.5\naddNum(3)findMedian() -> 2Credits:Special thanks to @Louis1992 for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Serialize and Deserialize Binary Tree",
    "description": "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment\nDesign an algorithm to serialize and deserialize a binary tree\nThere is no restriction on how your serialization/deserialization algorithm should work\nYou just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure\n",
    "difficulty": "hard",
    "examples": "For example, you may serialize the following tree    1   / \\  2   3     / \\    4   5as \"[1,2,3,null,null,4,5]\", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.\nNote: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.\nCredits:Special thanks to @Louis1992 for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Bulls and Cows",
    "description": "You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is\nEach time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called \"bulls\") and how many digits match the secret number but locate in the wrong position (called \"cows\")\nYour friend will use successive guesses and hints to eventually derive the secret number\n",
    "difficulty": "hard",
    "examples": "For example:\nSecret number:  \"1807\"\nFriend's guess: \"7810\"\nHint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)\nWrite a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return \"1A3B\".\nPlease note that both secret number and friend's guess may contain duplicate digits, for example:\nSecret number:  \"1123\"\nFriend's guess: \"0111\"\nIn this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return \"1A1B\".\nYou may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.\nCredits:Special thanks to @jeantimex for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Longest Increasing Subsequence",
    "description": "Given an unsorted array of integers, find the length of longest increasing subsequence\n",
    "difficulty": "hard",
    "examples": "For example,Given [10, 9, 2, 5, 3, 7, 101, 18],The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.\nYour algorithm should run in O(n2) complexity.\nFollow up: Could you improve it to O(n log n) time complexity?\nCredits:Special thanks to @pbrother for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Remove Invalid Parentheses",
    "description": "Remove the minimum number of invalid parentheses in order to make the input string valid\nReturn all possible results\nNote: The input string may contain letters other than the parentheses ( and )\n",
    "difficulty": "easy",
    "examples": "Examples:\n\"()())()\" -> [\"()()()\", \"(())()\"]\"(a)())()\" -> [\"(a)()()\", \"(a())()\"]\")(\" -> [\"\"]Credits:Special thanks to @hpplayer for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Range Sum Query - Immutable",
    "description": "Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven nums = [-2, 0, 3, -5, 2, -1]sumRange(0, 2) -> 1sumRange(2, 5) -> -1sumRange(0, 5) -> -3Note:\nYou may assume that the array does not change.\nThere are many calls to sumRange function.\n"
  },
  {
    "name": "Range Sum Query 2D - Immutable",
    "description": "Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2)\nThe above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven matrix = [  [3, 0, 1, 4, 2],  [5, 6, 3, 2, 1],  [1, 2, 0, 1, 5],  [4, 1, 0, 1, 7],  [1, 0, 3, 0, 5]]sumRegion(2, 1, 4, 3) -> 8sumRegion(1, 1, 2, 2) -> 11sumRegion(1, 2, 2, 4) -> 12Note:\nYou may assume that the matrix does not change.\nThere are many calls to sumRegion function.\nYou may assume that row1 ≤ row2 and col1 ≤ col2.\n"
  },
  {
    "name": "Additive Number",
    "description": "Additive number is a string whose digits can form additive sequence\nA valid additive sequence should contain at least three numbers\nExcept for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two\n",
    "difficulty": "hard",
    "examples": "For example:\n\"112358\" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.\n1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8\"199100199\" is also an additive number, the additive sequence is: 1, 99, 100, 199.\n1 + 99 = 100, 99 + 100 = 199Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.\nGiven a string containing only digits '0'-'9', write a function to determine if it's an additive number.\nFollow up:\nHow would you handle overflow for very large input integers?Credits:Special thanks to @jeantimex for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Range Sum Query - Mutable",
    "description": "Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive\nThe update(i, val) function modifies nums by updating the element at index i to val\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven nums = [1, 3, 5]sumRange(0, 2) -> 9update(1, 2)sumRange(0, 2) -> 8Note:\nThe array is only modifiable by the update function.\nYou may assume the number of calls to update and sumRange function is distributed evenly.\n"
  },
  {
    "name": "Minimum Height Trees",
    "description": "For a undirected graph with tree characteristics, we can choose any node as the root\nThe result graph is then a rooted tree\nAmong all possible rooted trees, those with minimum height are called minimum height trees (MHTs)\nGiven such a graph, write a function to find all the MHTs and return a list of their root labels\nFormatThe graph contains n nodes which are labeled from 0 to n - 1\nYou will be given the number n and a list of undirected edges (each edge is a pair of labels)\nYou can assume that no duplicate edges will appear in edges\nSince all edges areundirected, [0, 1] is the same as [1, 0] and thus will not appear together inedges\n",
    "difficulty": "medium",
    "examples": "    Example 1:\n    Given n = 4, edges = [[1, 0], [1, 2], [1, 3]]        0        |        1       / \\      2   3    return  [1]    Example 2:\n    Given n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]     0  1  2      \\ | /        3        |        4        |        5    return  [3, 4]    How many MHTs can a graph have at most?    Note:\n    (1) According to the definition    of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by\n    exactly one path. In other words, any connected graph without simple cycles is a tree.”\n    (2) The height of a rooted tree is the number of edges on the longest downward path between the root and a    leaf.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Burst Balloons",
    "description": "Given n balloons, indexed from 0 to n-1\nEach balloon is painted with anumber on it represented by array nums\nYou are asked to burst all the balloons\nIf the you burstballoon i you will get nums[left] * nums[i] * nums[right] coins\nHere leftand right are adjacent indices of i\nAfter the burst, the left and rightthen becomes adjacent\nFind the maximum coins you can collect by bursting the balloons wisely\nNote:(1) You may imagine nums[-1] = nums[n] = 1\nThey are not real therefore you can not burst them\n(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100",
    "difficulty": "hard",
    "examples": "    Example:\n    Given [3, 1, 5, 8]    Return 167    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Super Ugly Number",
    "description": "Write a program to find the nth super ugly number\nSuper ugly numbers are positive numbers whose all prime factors are in the given prime list",
    "difficulty": "easy",
    "examples": "    primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]\n is the sequence of the first 12 super ugly numbers given primes    = [2, 7, 13, 19] of size 4.\n    Note:\n    (1) 1 is a super ugly number for any given primes.\n    (2) The given numbers in primes are in ascending order.\n    (3) 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.\n    (4) The nth super ugly number is guaranteed to fit in a 32-bit signed integer.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Count of Smaller Numbers After Self",
    "description": "You are given an integer array nums and you have to return a new counts array\nThe counts array has the property where counts[i] isthe number of smaller elements to the right of nums[i]\n",
    "difficulty": "medium",
    "examples": "Example:\nGiven nums = [5, 2, 6, 1]To the right of 5 there are 2 smaller elements (2 and 1).\nTo the right of 2 there is only 1 smaller element (1).\nTo the right of 6 there is 1 smaller element (1).\nTo the right of 1 there is 0 smaller element.\nReturn the array [2, 1, 1, 0].\n"
  },
  {
    "name": "Remove Duplicate Letters",
    "description": "Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once\nYou must make sure your result is the smallest in lexicographical order among all possible results\n",
    "difficulty": "medium",
    "examples": "Example:\nGiven \"bcabc\"Return \"abc\"Given \"cbacdcbc\"Return \"acdb\"Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Maximum Product of Word Lengths",
    "description": "Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters\nYou may assume that each word will contain only lower case letters\nIf no such two words exist, return 0\n",
    "difficulty": "easy",
    "examples": "    Example 1:\n    Given [\"abcw\", \"baz\", \"foo\", \"bar\", \"xtfn\", \"abcdef\"]    Return 16    The two words can be \"abcw\", \"xtfn\".\n    Example 2:\n    Given [\"a\", \"ab\", \"abc\", \"d\", \"cd\", \"bcd\", \"abcd\"]    Return 4    The two words can be \"ab\", \"cd\".\n    Example 3:\n    Given [\"a\", \"aa\", \"aaa\", \"aaaa\"]    Return 0    No such pair of words.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Bulb Switcher",
    "description": "There are n bulbs that are initially off\nYou first turn on all the bulbs\nThen, you turn off every second bulb\nOn the third round, you toggle every third bulb (turning on if it's off or turning off if it's on)\nFor the ith round, you toggle every i bulb\nFor the nth round, you only toggle the last bulb\nFind how many bulbs are on after n rounds\n",
    "difficulty": "easy",
    "examples": "Example:\nGiven n = 3.\nAt first, the three bulbs are [off, off, off].\nAfter first round, the three bulbs are [on, on, on].\nAfter second round, the three bulbs are [on, off, on].\nAfter third round, the three bulbs are [on, off, off].\nSo you should return 1, because there is only one bulb is on.\n"
  },
  {
    "name": "Create Maximum Number",
    "description": "Given two arrays of length m and n with digits 0-9 representing two numbers\nCreate the maximum number of length k <= m + n from digits of the two\nThe relative order of the digitsfrom the same array must be preserved\nReturn an array of the k digits\nYou should try to optimize your time and space complexity\n",
    "difficulty": "medium",
    "examples": "    Example 1:\n    nums1 = [3, 4, 6, 5]    nums2 = [9, 1, 2, 5, 8, 3]    k = 5    return [9, 8, 6, 5, 3]    Example 2:\n    nums1 = [6, 7]    nums2 = [6, 0, 4]    k = 5    return [6, 7, 6, 0, 4]    Example 3:\n    nums1 = [3, 9]    nums2 = [8, 9]    k = 3    return [9, 8, 9]Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Coin Change",
    "description": "You are given coins of different denominations and a total amount of money amount\nWrite a function to compute the fewest number of coins that you need to make up that amount\nIf that amount of money cannot be made up by any combination of the coins, return -1\n",
    "difficulty": "medium",
    "examples": "Example 1:\ncoins = [1, 2, 5], amount = 11return 3 (11 = 5 + 5 + 1)Example 2:\ncoins = [2], amount = 3return -1.\nNote:\nYou may assume that you have an infinite number of each kind of coin.\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Wiggle Sort II",
    "description": "Given an unsorted array nums, reorder it such thatnums[0] < nums[1] > nums[2] < nums[3]\n\n\n\n",
    "difficulty": "hard",
    "examples": "    Example:\n    (1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6].\n    (2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].\n    Note:\n    You may assume all input has valid answer.\n    Follow Up:\n    Can you do it in O(n) time and/or in-place with O(1) extra space?Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Power of Three",
    "description": "Given an integer, write a function to determine if it is a power of three\nFollow up:Could you do it without using any loop / recursion?Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Count of Range Sum",
    "description": "Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive\nRange sum S(i, j) is defined as the sum of the elements in nums between indices i andj (i ≤ j), inclusive\nNote:A naive algorithm of O(n2) is trivial\nYou MUST do better than that\n",
    "difficulty": "medium",
    "examples": "    Example:\n    Given nums = [-2, 5, -1], lower = -2, upper = 2,    Return 3.\n    The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Odd Even Linked List",
    "description": "Given a singly linked list, group all odd nodes together followed by the even nodes\nPlease note here we are talking about the node number and not the value in the nodes\nYou should try to do it in place\nThe program should run in O(1) space complexity and O(nodes) time complexity\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven 1->2->3->4->5->NULL,return 1->3->5->2->4->NULL.\nNote:\nThe relative order inside both the even and odd groups should remain as it was in the input.\nThe first node is considered odd, the second node even and so on ...\nCredits:Special thanks to @DjangoUnchained for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Longest Increasing Path in a Matrix",
    "description": "Given an integer matrix, find the length of the longest increasing path\nFrom each cell, you can either move to four directions: left, right, up or down\nYou may NOT move diagonally or move outside of the boundary (i\ne\nwrap-around is not allowed)\n",
    "difficulty": "easy",
    "examples": "Example 1:\nnums = [  [9,9,4],  [6,6,8],  [2,1,1]]Return 4The longest increasing path is [1, 2, 6, 9].\nExample 2:\nnums = [  [3,4,5],  [3,2,6],  [2,2,1]]Return 4The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Patching Array",
    "description": "Given a sorted positive integer array nums and an integer n, add/patch elements to the array such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array\nReturn the minimum number of patches required\n",
    "difficulty": "medium",
    "examples": "Example 1:\nnums = [1, 3], n = 6Return 1.\nCombinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.\nNow if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].\nPossible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].\nSo we only need 1 patch.\nExample 2:\nnums = [1, 5, 10], n = 20Return 2.\nThe two patches can be [2, 4].\nExample 3:\nnums = [1, 2, 2], n = 5Return 0.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Verify Preorder Serialization of a Binary Tree",
    "description": "One way to serialize a binary tree is to use pre-order traversal\nWhen we encounter a non-null node, we record the node's value\nIf it is a null node, we record using a sentinel value such as #\n_9_/   \\3     2/ \\   / \\4   1  #  6/ \\ / \\   / \\# # # #   # #",
    "difficulty": "medium",
    "examples": "For example, the above binary tree can be serialized to the string \"9,3,4,#,#,1,#,#,2,#,6,#,#\", where # represents a null node.\nGiven a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.\nEach comma separated value in the string must be either an integer or a character '#' representing null pointer.\nYou may assume that the input format is always valid, for example it could never contain two consecutive commas such as \"1,,3\".\nExample 1:\n\"9,3,4,#,#,1,#,#,2,#,6,#,#\"Return trueExample 2:\n\"1,#\"Return falseExample 3:\n\"9,#,#,1\"Return falseCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Reconstruct Itinerary",
    "description": "Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order\nAll of the tickets belong to a man who departs from JFK\nThus, the itinerary must begin with JFK\nNote:",
    "difficulty": "easy",
    "examples": "If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary [\"JFK\", \"LGA\"] has a smaller lexical order than [\"JFK\", \"LGB\"].\nAll airports are represented by three capital letters (IATA code).\nYou may assume all tickets form at least one valid itinerary.\n    Example 1:\n    tickets = [[\"MUC\", \"LHR\"], [\"JFK\", \"MUC\"], [\"SFO\", \"SJC\"], [\"LHR\", \"SFO\"]]    Return [\"JFK\", \"MUC\", \"LHR\", \"SFO\", \"SJC\"].\n    Example 2:\n    tickets = [[\"JFK\",\"SFO\"],[\"JFK\",\"ATL\"],[\"SFO\",\"ATL\"],[\"ATL\",\"JFK\"],[\"ATL\",\"SFO\"]]    Return [\"JFK\",\"ATL\",\"JFK\",\"SFO\",\"ATL\",\"SFO\"].\n    Another possible reconstruction is [\"JFK\",\"SFO\",\"ATL\",\"JFK\",\"ATL\",\"SFO\"]. But it is larger in lexical order.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Increasing Triplet Subsequence",
    "description": "Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array\nFormally the function should:Return true if there exists i, j, ksuch that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1else return false\nYour algorithm should run in O(n) time complexity and O(1) space complexity\n",
    "difficulty": "easy",
    "examples": "Examples:\nGiven [1, 2, 3, 4, 5],return true.\nGiven [5, 4, 3, 2, 1],return false.\nCredits:Special thanks to @DjangoUnchained for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Self Crossing",
    "description": "You are given an array x of n positive numbers\nYou start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west,x[2] metres to the south,x[3] metres to the east and so on\nIn other words, after each move your direction changescounter-clockwise\nWrite a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not\n",
    "difficulty": "hard",
    "examples": "Example 1:\nGiven x = [2, 1, 1, 2],┌───┐│   │└───┼──>    │Return true (self crossing)Example 2:\nGiven x = [1, 2, 3, 4],┌──────┐│      │││└────────────>Return false (not self crossing)Example 3:\nGiven x = [1, 1, 1, 1],┌───┐│   │└───┼>Return true (self crossing)Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Palindrome Pairs",
    "description": "Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i\ne\nwords[i] + words[j] is a palindrome\n",
    "difficulty": "easy",
    "examples": "    Example 1:\n    Given words = [\"bat\", \"tab\", \"cat\"]    Return [[0, 1], [1, 0]]    The palindromes are [\"battab\", \"tabbat\"]    Example 2:\n    Given words = [\"abcd\", \"dcba\", \"lls\", \"s\", \"sssll\"]    Return [[0, 1], [1, 0], [3, 2], [2, 4]]    The palindromes are [\"dcbaabcd\", \"abcddcba\", \"slls\", \"llssssll\"]Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "House Robber III",
    "description": "The thief has found himself a new place for his thievery again\nThere is only one entrance to this area, called the \"root\n\" Besides the root, each house has one and only one parent house\nAfter a tour, the smart thief realized that \"all houses in this place forms a binary tree\"\nIt will automatically contact the police if two directly-linked houses were broken into on the same night\nDetermine the maximum amount of money the thief can rob tonight without alerting the police\n",
    "difficulty": "medium",
    "examples": "Example 1:\n     3    / \\   2   3    \\   \\     3   1Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.\nExample 2:\n     3    / \\   4   5  / \\   \\ 1   3   1Maximum amount of money the thief can rob = 4 + 5 = 9.\nCredits:Special thanks to @dietpepsi for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Counting Bits",
    "description": "Given a non negative integer number num\nFor every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array\n",
    "difficulty": "medium",
    "examples": "Example:\nFor num = 5 you should return [0,1,1,2,1,2].\nFollow up:\nIt is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?\nSpace complexity should be O(n).\nCan you do it like a boss? Do it without using any builtin function like __builtin_popcount  in c++ or in any other language.\n  You should make use of what you have produced already.\n  Divide the numbers in ranges like [2-3], [4-7], [8-15] and so on. And try to generate new range from previous.\n  Or does the odd/even status of the number help you in calculating the number of 1s?Credits:Special thanks to @ syedee  for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Flatten Nested List Iterator",
    "description": "Given a nested list of integers, implement an iterator to flatten it\nEach element is either an integer, or a list -- whose elements may also be integers or other lists\n",
    "difficulty": "easy",
    "examples": "Example 1:\nGiven the list [[1,1],2,[1,1]],By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].\nExample 2:\nGiven the list [1,[4,[6]]],By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].\n"
  },
  {
    "name": "Power of Four",
    "description": "Given an integer (signed 32 bits), write a function to check whether it is a power of 4\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven num = 16, return true.\nGiven num = 5, return false.\nFollow up: Could you solve it without loops/recursion?\nCredits:Special thanks to @yukuairoy  for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Integer Break",
    "description": "Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers\nReturn the maximum product you can get\n",
    "difficulty": "easy",
    "examples": "For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).\nNote: You may assume that n is not less than 2 and not larger than 58.\n  There is a simple O(n) solution to this problem.\n  You may check the breaking results of n ranging from 7 to 10 to discover the regularities.\nCredits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Reverse String",
    "description": "Write a function that takes a string as input and returns the string reversed\n",
    "difficulty": "easy",
    "examples": "Example:\nGiven s = \"hello\", return \"olleh\".\n"
  },
  {
    "name": "Reverse Vowels of a String",
    "description": "Write a function that takes a string as input and reverse only the vowels of a string\n",
    "difficulty": "easy",
    "examples": "Example 1:\nGiven s = \"hello\", return \"holle\".\nExample 2:\nGiven s = \"leetcode\", return \"leotcede\".\nNote:\nThe vowels does not include the letter \"y\".\n"
  },
  {
    "name": "Top K Frequent Elements",
    "description": "Given a non-empty array of integers, return the k most frequent elements\n",
    "difficulty": "medium",
    "examples": "For example,Given [1,1,1,2,2,3] and k = 2, return [1,2].\nNote:\nYou may assume k is always valid, 1 ≤ k ≤ number of unique elements.\nYour algorithm's time complexity must be better than O(n log n), where n is the array's size.\n"
  },
  {
    "name": "Intersection of Two Arrays",
    "description": "Given two arrays, write a function to compute their intersection\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].\nNote:\nEach element in the result must be unique.\nThe result can be in any order.\n"
  },
  {
    "name": "Intersection of Two Arrays II",
    "description": "Given two arrays, write a function to compute their intersection\n",
    "difficulty": "easy",
    "examples": "Example:\nGiven nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].\nNote:\nEach element in the result should appear as many times as it shows in both arrays.\nThe result can be in any order.\nFollow up:\nWhat if the given array is already sorted? How would you optimize your algorithm?What if nums1's size is small compared to nums2's size? Which algorithm is better?What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?"
  },
  {
    "name": "Data Stream as Disjoint Intervals",
    "description": "Given a data stream input of non-negative integers a1, a2,\n\n\n, an,\n\n\n, summarize the numbers seen so far as a list of disjoint intervals\n",
    "difficulty": "medium",
    "examples": "For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the summary will be:\n[1, 1][1, 1], [3, 3][1, 1], [3, 3], [7, 7][1, 3], [7, 7][1, 3], [6, 7]Follow up:\nWhat if there are lots of merges and the number of disjoint intervals are small compared to the data stream's size?Credits:Special thanks to @yunhong for adding this problem and creating most of the test cases.\n"
  },
  {
    "name": "Russian Doll Envelopes",
    "description": "You have a number of envelopes with widths and heights given as a pair of integers (w, h)\nOne envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope\nWhat is the maximum number of envelopes can you Russian doll? (put one inside other)",
    "difficulty": "medium",
    "examples": "Example:\nGiven envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).\n"
  },
  {
    "name": "Design Twitter",
    "description": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed\nYour design should support the following methods:postTweet(userId, tweetId): Compose a new tweet\ngetNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed\nEach item in the news feed must be posted by users who the user followed or by the user herself\nTweets must be ordered from most recent to least recent\nfollow(followerId, followeeId): Follower follows a followee\nunfollow(followerId, followeeId): Follower unfollows a followee\n",
    "difficulty": "medium",
    "examples": "Example:\nTwitter twitter = new Twitter();// User 1 posts a new tweet (id = 5).\ntwitter.postTweet(1, 5);\n// User 1's news feed should return a list with 1 tweet id -> [5].\ntwitter.getNewsFeed(1);\n// User 1 follows user 2.\ntwitter.follow(1, 2);\n// User 2 posts a new tweet (id = 6).\ntwitter.postTweet(2, 6);\n// User 1's news feed should return a list with 2 tweet ids -> [6, 5].\n// Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.\ntwitter.getNewsFeed(1);\n// User 1 unfollows user 2.\ntwitter.unfollow(1, 2);\n// User 1's news feed should return a list with 1 tweet id -> [5],// since user 1 is no longer following user 2.\ntwitter.getNewsFeed(1);\n"
  },
  {
    "name": "Max Sum of Rectangle No Larger Than K",
    "description": "Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven matrix = [  [1,  0, 1],  [0, -2, 3]]k = 2The answer is 2. Because the sum of rectangle [[0, 1], [-2, 3]] is 2 and 2 is the max number no larger than k (k = 2).\nNote:\nThe rectangle inside the matrix must have an area > 0.\nWhat if the number of rows is much larger than the number of columns?Credits:Special thanks to @fujiaozhu for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Water and Jug Problem",
    "description": "You are given two jugs with capacities x and y litres\nThere is an infinite amount of water supply available\nYou need to determine whether it is possible to measure exactly z litres using these two jugs\nIf z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end\nOperations allowed:Fill any of the jugs completely with water\nEmpty any of the jugs\nPour water from one jug into another till the other jug is completely full or the first jug itself is empty\n",
    "difficulty": "easy",
    "examples": "Example 1: (From the famous \"Die Hard\" example)\nInput: x = 3, y = 5, z = 4\nOutput: True\nExample 2:\nInput: x = 2, y = 6, z = 5\nOutput: False\nCredits:Special thanks to @vinod23 for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Valid Perfect Square",
    "description": "Given a positive integer num, write a function which returns True if num is a perfect square else False\nNote: Do not use any built-in library function such as sqrt\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: 16\nReturns: True\nExample 2:\nInput: 14\nReturns: False\nCredits:Special thanks to @elmirap for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Largest Divisible Subset",
    "description": "Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies: Si % Sj = 0 or Sj % Si = 0\nIf there are multiple solutions, return any subset is fine\n",
    "difficulty": "medium",
    "examples": "Example 1:\nnums: [1,2,3]\nResult: [1,2] (of course, [1,3] will also be ok)\nExample 2:\nnums: [1,2,4,8]\nResult: [1,2,4,8]\nCredits:Special thanks to @Stomach_ache for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Sum of Two Integers",
    "description": "Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -\n",
    "difficulty": "medium",
    "examples": "Example:\nGiven a = 1 and b = 2, return 3.\nCredits:Special thanks to @fujiaozhu for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Super Pow",
    "description": "Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array\n",
    "difficulty": "easy",
    "examples": "Example1:\na = 2b = [3]Result: 8\nExample2:\na = 2b = [1,0]Result: 1024\nCredits:Special thanks to @Stomach_ache for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Find K Pairs with Smallest Sums",
    "description": "You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k\nDefine a pair (u,v) which consists of one element from the first array and one element from the second array\nFind the k pairs (u1,v1),(u2,v2)\n\n\n(uk,vk) with the smallest sums\n",
    "difficulty": "hard",
    "examples": "Example 1:\nGiven nums1 = [1,7,11], nums2 = [2,4,6],  k = 3Return: [1,2],[1,4],[1,6]\nThe first 3 pairs are returned from the sequence:\n[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]Example 2:\nGiven nums1 = [1,1,2], nums2 = [1,2,3],  k = 2Return: [1,1],[1,1]\nThe first 2 pairs are returned from the sequence:\n[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]Example 3:\nGiven nums1 = [1,2], nums2 = [3],  k = 3Return: [1,3],[2,3]\nAll possible pairs are returned from the sequence:\n[1,3],[2,3]Credits:Special thanks to @elmirap and @StefanPochmann for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Guess Number Higher or Lower",
    "description": "We are playing the Guess Game\nThe game is as follows:I pick a number from 1 to n\nYou have to guess which number I picked\nEvery time you guess wrong, I'll tell you whether the number is higher or lower\nYou call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):-1 : My number is lower1 : My number is higher0 : Congrats! You got it!",
    "difficulty": "hard",
    "examples": "Example:\nn = 10, I pick 6.\nReturn 6.\n"
  },
  {
    "name": "Guess Number Higher or Lower II",
    "description": "We are playing the Guess Game\nThe game is as follows:I pick a number from 1 to n\nYou have to guess which number I picked\nEvery time you guess wrong, I'll tell you whether the number I picked is higher or lower\nHowever, when you guess a particular number x,  and you guess wrong, you pay $x\nYou win the game when you guess the number I picked\n",
    "difficulty": "easy",
    "examples": "Example:\nn = 10, I pick 8.\nFirst round:  You guess 5, I tell you that it's higher. You pay $5.\nSecond round: You guess 7, I tell you that it's higher. You pay $7.\nThird round:  You guess 9, I tell you that it's lower. You pay $9.\nGame over. 8 is the number I picked.\nYou end up paying $5 + $7 + $9 = $21.\nGiven a particular n ≥ 1, find out how much money you need to have to guarantee a win.\n   The best strategy to play the game is to minimize the maximum loss you could possibly face. Another strategy is to minimize the expected loss. Here, we are interested in the first scenario.\n   Take a small example (n = 3). What do you end up paying in the worst case?\n  Check out this article if you're still stuck.\n The purely recursive implementation of minimax would be worthless for even a small n. You MUST use dynamic programming.\n As a follow-up, how would you modify your code to solve the problem of minimizing the expected loss, instead of the worst-case loss?Credits:Special thanks to @agave and @StefanPochmann for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Wiggle Subsequence",
    "description": "A sequence of numbers is called a wiggle sequence if the differences between successive numbers strictly alternate between positive and negative\nThe first difference (if one exists) may be either positive or negative\nA sequence with fewer than two elements is trivially a wiggle sequence\n",
    "difficulty": "medium",
    "examples": "For example, [1,7,4,9,2,5] is a wiggle sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. In contrast, [1,4,7,2,5] and [1,7,4,5,5] are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.\nGiven a sequence of integers, return the length of the longest subsequence that is a wiggle sequence. A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.\nExamples:\nInput: [1,7,4,9,2,5]\nOutput: 6\nThe entire sequence is a wiggle sequence.\nInput: [1,17,5,10,13,15,10,5,16,8]\nOutput: 7\nThere are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].\nInput: [1,2,3,4,5,6,7,8,9]\nOutput: 2\nFollow up:\nCan you do it in O(n) time?Credits:Special thanks to @agave and @StefanPochmann for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Combination Sum IV",
    "description": "Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target\n",
    "difficulty": "medium",
    "examples": "Example:\nnums = [1, 2, 3]target = 4The possible combination ways are:\n(1, 1, 1, 1)(1, 1, 2)(1, 2, 1)(1, 3)(2, 1, 1)(2, 2)(3, 1)Note that different sequences are counted as different combinations.\nTherefore the output is 7.\nFollow up:\nWhat if negative numbers are allowed in the given array?How does it change the problem?What limitation we need to add to the question to allow negative numbers?Credits:Special thanks to @pbrother for adding this problem and creating all test cases.\n"
  },
  {
    "name": "Kth Smallest Element in a Sorted Matrix",
    "description": "Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix\nNote that it is the kth smallest element in the sorted order, not the kth distinct element\n",
    "difficulty": "hard",
    "examples": "Example:\nmatrix = [   [ 1,  5,  9],   [10, 11, 13],   [12, 13, 15]],k = 8,return 13.\nNote:\nYou may assume k is always valid, 1 ≤ k ≤ n2.\n"
  },
  {
    "name": "Insert Delete GetRandom O(1)",
    "description": "Design a data structure that supports all following operations in average O(1) time\ninsert(val): Inserts an item val to the set if not already present\nremove(val): Removes an item val from the set if present\ngetRandom: Returns a random element from current set of elements\nEach element must have the same probability of being returned\n",
    "difficulty": "medium",
    "examples": "Example:\n// Init an empty set.\nRandomizedSet randomSet = new RandomizedSet();// Inserts 1 to the set. Returns true as 1 was inserted successfully.\nrandomSet.insert(1);\n// Returns false as 2 does not exist in the set.\nrandomSet.remove(2);\n// Inserts 2 to the set, returns true. Set now contains [1,2].\nrandomSet.insert(2);\n// getRandom should return either 1 or 2 randomly.\nrandomSet.getRandom();\n// Removes 1 from the set, returns true. Set now contains [2].\nrandomSet.remove(1);\n// 2 was already in the set, so return false.\nrandomSet.insert(2);\n// Since 2 is the only number in the set, getRandom always return 2.\nrandomSet.getRandom();\n"
  },
  {
    "name": "Insert Delete GetRandom O(1) - Duplicates allowed",
    "description": "Design a data structure that supports all following operations in average O(1) time\nNote: Duplicate elements are allowed\ninsert(val): Inserts an item val to the collection\nremove(val): Removes an item val from the collection if present\ngetRandom: Returns a random element from current collection of elements\nThe probability of each element being returned is linearly related to the number of same value the collection contains\n",
    "difficulty": "medium",
    "examples": "Example:\n// Init an empty collection.\nRandomizedCollection collection = new RandomizedCollection();// Inserts 1 to the collection. Returns true as the collection did not contain 1.\ncollection.insert(1);\n// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].\ncollection.insert(1);\n// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].\ncollection.insert(2);\n// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.\ncollection.getRandom();\n// Removes 1 from the collection, returns true. Collection now contains [1,2].\ncollection.remove(1);\n// getRandom should return 1 and 2 both equally likely.\ncollection.getRandom();\n"
  },
  {
    "name": "Linked List Random Node",
    "description": "Given a singly linked list, return a random node's value from the linked list\nEach node must have the same probability of being chosen\nFollow up:What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?",
    "difficulty": "easy",
    "examples": "Example:\n// Init a singly linked list [1,2,3].\nListNode head = new ListNode(1);head.next = new ListNode(2);\nhead.next.next = new ListNode(3);\nSolution solution = new Solution(head);// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.\nsolution.getRandom();\n"
  },
  {
    "name": "Ransom Note",
    "description": "Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransomnote can be constructed from the magazines ; otherwise, it will return false\nEach letter in the magazine string can only be used once in your ransom note\nNote:You may assume that both strings contain only lowercase letters\ncanConstruct(\"a\", \"b\") -> falsecanConstruct(\"aa\", \"ab\") -> falsecanConstruct(\"aa\", \"aab\") -> true",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Shuffle an Array",
    "description": "Shuffle a set of numbers without duplicates\n",
    "difficulty": "easy",
    "examples": "Example:\n// Init an array with set 1, 2, and 3.\nint[] nums = {1,2,3};Solution solution = new Solution(nums);// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.\nsolution.shuffle();\n// Resets the array back to its original configuration [1,2,3].\nsolution.reset();\n// Returns the random shuffling of array [1,2,3].\nsolution.shuffle();\n"
  },
  {
    "name": "Mini Parser",
    "description": "Given a nested list of integers represented as a string, implement a parser to deserialize it\nEach element is either an integer, or a list -- whose elements may also be integers or other lists\nNote:You may assume that the string is well-formed:String is non-empty\nString does not contain white spaces\nString contains only digits 0-9, [, - ,, ]\n",
    "difficulty": "hard",
    "examples": "Example 1:\nGiven s = \"324\",You should return a NestedInteger object which contains a single integer 324.\nExample 2:\nGiven s = \"[123,[456,[789]]]\",Return a NestedInteger object containing a nested list with 2 elements:\n1. An integer containing value 123.\n2. A nested list containing two elements:\n    i.  An integer containing value 456.\n    ii. A nested list with one element:\n         a. An integer containing value 789.\n"
  },
  {
    "name": "Lexicographical Numbers",
    "description": "Given an integer n, return 1 - n in lexicographical order\n",
    "difficulty": "hard",
    "examples": "For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].\nPlease optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.\n"
  },
  {
    "name": "First Unique Character in a String",
    "description": "Given a string, find the first non-repeating character in it and return it's index\nIf it doesn't exist, return -1\n",
    "difficulty": "medium",
    "examples": "Examples:\ns = \"leetcode\"return 0.\ns = \"loveleetcode\",return 2.\nNote: You may assume the string contain only lowercase letters.\n"
  },
  {
    "name": "Longest Absolute File Path",
    "description": "Suppose we abstract our file system by a string in the following manner:The string \"dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile\next\" represents:dirsubdir1subdir2file\nextThe directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file\next\nThe string \"dir\\n\\tsubdir1\\n\\t\\tfile1\next\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2\next\" represents:dirsubdir1file1\nextsubsubdir1subdir2subsubdir2file2\nextThe directory dir contains two sub-directories subdir1 and subdir2\nsubdir1 contains a file file1\next and an empty second-level sub-directory subsubdir1\nsubdir2 contains a second-level sub-directory subsubdir2 containing a file file2\next\n",
    "difficulty": "medium",
    "examples": "We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is \"dir/subdir2/subsubdir2/file2.ext\", and its length is 32 (not including the double quotes).\nGiven a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.\nNote:\nThe name of a file contains at least a . and an extension.\nThe name of a directory or sub-directory will not contain a ..\nTime complexity required: O(n) where n is the size of the input string.\nNotice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.\n"
  },
  {
    "name": "Find the Difference",
    "description": "Given two strings s and t which consist of only lowercase letters\nString t is generated by random shuffling string s and then add one more letter at a random position\nFind the letter that was added in t\n",
    "difficulty": "hard",
    "examples": "Example:\nInput:\ns = \"abcd\"t = \"abcde\"Output:\neExplanation:\n'e' is the letter that was added.\n"
  },
  {
    "name": "Elimination Game",
    "description": "There is a list of sorted integers from 1 to n\nStarting from left to right, remove the first number and every other number afterward until you reach the end of the list\nRepeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers\nWe keep repeating the steps again, alternating left to right and right to left, until a single number remains\nFind the last number that remains starting with a list of length n\n",
    "difficulty": "hard",
    "examples": "Example:\nInput:\nn = 9,1 2 3 4 5 6 7 8 92 4 6 82 66Output:\n6"
  },
  {
    "name": "Perfect Rectangle",
    "description": "Given N axis-aligned rectangles where N > 0, determine if they all together form an exact cover of a rectangular region\n",
    "difficulty": "easy",
    "examples": "Each rectangle is represented as a bottom-left point and a top-right point. For example, a unit square is represented as [1,1,2,2]. (coordinate of bottom-left point is (1, 1) and top-right point is (2, 2)).\nExample 1:\nrectangles = [  [1,1,3,3],  [3,1,4,2],  [3,2,4,4],  [1,3,2,4],  [2,3,3,4]]Return true. All 5 rectangles together form an exact cover of a rectangular region.\nExample 2:\nrectangles = [  [1,1,2,3],  [1,3,2,4],  [3,1,4,2],  [3,2,4,4]]Return false. Because there is a gap between the two rectangular regions.\nExample 3:\nrectangles = [  [1,1,3,3],  [3,1,4,2],  [1,3,2,4],  [3,2,4,4]]Return false. Because there is a gap in the top center.\nExample 4:\nrectangles = [  [1,1,3,3],  [3,1,4,2],  [1,3,2,4],  [2,2,4,4]]Return false. Because two of the rectangles overlap with each other.\n"
  },
  {
    "name": "Is Subsequence",
    "description": "Given a string s and a string t, check if s is subsequence of t\nYou may assume that there is only lower case English letters in both s and t\nt is potentially a very long (length ~= 500,000) string, and s is a short string (<=100)\nA subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters\n(ie, \"ace\" is a subsequence of \"abcde\" while \"aec\" is not)\n",
    "difficulty": "easy",
    "examples": "Example 1:\ns = \"abc\", t = \"ahbgdc\"Return true.\nExample 2:\ns = \"axc\", t = \"ahbgdc\"Return false.\nFollow up:\nIf there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?\nCredits:Special thanks to @pbrother for adding this problem and creating all test cases.\n"
  },
  {
    "name": "UTF-8 Validation",
    "description": "A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:For 1-byte character, the first bit is a 0, followed by its unicode code\nFor n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1 bytes with most significant 2 bits being 10\nThis is how the UTF-8 encoding would work:Char\nnumber range  |        UTF-8 octet sequence(hexadecimal)    |              (binary)--------------------+---------------------------------------------0000 0000-0000 007F | 0xxxxxxx0000 0080-0000 07FF | 110xxxxx 10xxxxxx0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxxGiven an array of integers representing the data, return whether it is a valid utf-8 encoding\nNote:The input is an array of integers\nOnly the least significant 8 bits of each integer is used to store the data\nThis means each integer represents only 1 byte of data\n",
    "difficulty": "hard",
    "examples": "Example 1:\ndata = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.\nReturn true.\nIt is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.\nExample 2:\ndata = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.\nReturn false.\nThe first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.\nThe next byte is a continuation byte which starts with 10 and that's correct.\nBut the second continuation byte does not start with 10, so it is invalid.\n"
  },
  {
    "name": "Decode String",
    "description": "Given an encoded string, return it's decoded string\nThe encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times\nNote that k is guaranteed to be a positive integer\nYou may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc\n",
    "difficulty": "hard",
    "examples": "Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].\nExamples:\ns = \"3[a]2[bc]\", return \"aaabcbc\".\ns = \"3[a2[c]]\", return \"accaccacc\".\ns = \"2[abc]3[cd]ef\", return \"abcabccdcdcdef\".\n"
  },
  {
    "name": "Longest Substring with At Least K Repeating Characters",
    "description": "Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput:\ns = \"aaabb\", k = 3Output:\n3The longest substring is \"aaa\", as 'a' is repeated 3 times.\nExample 2:\nInput:\ns = \"ababbc\", k = 2Output:\n5The longest substring is \"ababb\", as 'a' is repeated 2 times and 'b' is repeated 3 times.\n"
  },
  {
    "name": "Rotate Function",
    "description": "Given an array of integers A and let n to be its length\nAssume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a \"rotation function\" F on A as follow:F(k) = 0 * Bk[0] + 1 * Bk[1] +\n\n\n+ (n-1) * Bk[n-1]\nCalculate the maximum value of F(0), F(1),\n\n\n, F(n-1)\nNote:n is guaranteed to be less than 105\n",
    "difficulty": "hard",
    "examples": "Example:\nA = [4, 3, 2, 6]F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.\n"
  },
  {
    "name": "Integer Replacement",
    "description": "Given a positive integer n and you can do operations as follow:If n is even, replace n with n/2\nIf n is odd, you can replace n with either n + 1 or n - 1\nWhat is the minimum number of replacements needed for n to become 1?",
    "difficulty": "medium",
    "examples": "Example 1:\nInput:\n8Output:\n3Explanation:\n8 -> 4 -> 2 -> 1Example 2:\nInput:\n7Output:\n4Explanation:\n7 -> 8 -> 4 -> 2 -> 1or7 -> 6 -> 3 -> 2 -> 1"
  },
  {
    "name": "Random Pick Index",
    "description": "Given an array of integers with possible duplicates, randomly output the index of a given target number\nYou can assume that the given target number must exist in the array\nNote:The array size can be very large\nSolution that uses too much extra space will not pass the judge\n",
    "difficulty": "easy",
    "examples": "Example:\nint[] nums = new int[] {1,2,3,3,3};Solution solution = new Solution(nums);// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.\nsolution.pick(3);\n// pick(1) should return 0. Since in the array only nums[0] is equal to 1.\nsolution.pick(1);\n"
  },
  {
    "name": "Evaluate Division",
    "description": "Equations are given in the format A / B = k, where  A and B are variables represented as strings, and k is a real number (floating point number)\nGiven some queries, return the answers\nIf the answer does not exist, return -1\n0\n",
    "difficulty": "easy",
    "examples": "Example:\nGiven  a / b = 2.0, b / c = 3.0. queries are:  a / c = ?,  b / a = ?, a / e = ?,  a / a = ?, x / x = ? . return  [6.0, 0.5, -1.0, 1.0, -1.0 ].\nThe input is:  vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return  vector<double>.\nAccording to the example above:\nequations = [ [\"a\", \"b\"], [\"b\", \"c\"] ],values = [2.0, 3.0],\nqueries = [ [\"a\", \"c\"], [\"b\", \"a\"], [\"a\", \"e\"], [\"a\", \"a\"], [\"x\", \"x\"] ].\nThe input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.\n"
  },
  {
    "name": "Nth Digit",
    "description": "Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,\n\n\nNote:n is positive and will fit within the range of a 32-bit signed integer (n < 231)\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput:\n3Output:\n3Example 2:\nInput:\n11Output:\n0Explanation:\nThe 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.\n"
  },
  {
    "name": "Binary Watch",
    "description": "A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59)\nEach LED represents a zero or one, with the least significant bit on the right\n",
    "difficulty": "hard",
    "examples": "For example, the above binary watch reads \"3:25\".\nGiven a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.\nExample:\nInput: n = 1Return: [\"1:00\", \"2:00\", \"4:00\", \"8:00\", \"0:01\", \"0:02\", \"0:04\", \"0:08\", \"0:16\", \"0:32\"]\nNote:\nThe order of output does not matter.\nThe hour must not contain a leading zero, for example \"01:00\" is not valid, it should be \"1:00\".\nThe minute must be consist of two digits and may contain a leading zero, for example \"10:2\" is not valid, it should be \"10:02\".\n"
  },
  {
    "name": "Remove K Digits",
    "description": "Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible\nNote:The length of num is less than 10002 and will be ≥ k\nThe given num does not contain any leading zero\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: num = \"1432219\", k = 3\nOutput: \"1219\"\nExplanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.\nExample 2:\nInput: num = \"10200\", k = 1\nOutput: \"200\"\nExplanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.\nExample 3:\nInput: num = \"10\", k = 2\nOutput: \"0\"\nExplanation: Remove all the digits from the number and it is left with nothing which is 0.\n"
  },
  {
    "name": "Frog Jump",
    "description": "A frog is crossing a river\nThe river is divided into x units and at each unit there may or may not exist a stone\nThe frog can jump on a stone, but it must not jump into the water\nGiven a list of stones' positions (in units) in sorted ascending order, determine if the frog is able to cross the river by landing on the last stone\nInitially, the frog is on the first stone and assume the first jump must be 1 unit\nIf the frog's last jump was k units, then its next jump must be either k - 1, k, or k + 1 units\nNote that the frog can only jump in the forward direction\nNote:The number of stones is ≥ 2 and is < 1,100\nEach stone's position will be a non-negative integer < 231\nThe first stone's position is always 0\n",
    "difficulty": "hard",
    "examples": "Example 1:\n[0,1,3,5,6,8,12,17]There are a total of 8 stones.\nThe first stone at the 0th unit, second stone at the 1st unit,third stone at the 3rd unit, and so on...\nThe last stone at the 17th unit.\nReturn true. The frog can jump to the last stone by jumping\n1 unit to the 2nd stone, then 2 units to the 3rd stone, then2 units to the 4th stone, then 3 units to the 6th stone,4 units to the 7th stone, and 5 units to the 8th stone.\nExample 2:\n[0,1,2,3,4,8,9,11]Return false. There is no way to jump to the last stone as\nthe gap between the 5th and 6th stone is too large.\n"
  },
  {
    "name": "Sum of Left Leaves",
    "description": "Find the sum of all left leaves in a given binary tree\n",
    "difficulty": "hard",
    "examples": "Example:\n    3   / \\  9  20    /  \\   15   7There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.\n"
  },
  {
    "name": "Convert a Number to Hexadecimal",
    "description": "Given an integer, write an algorithm to convert it to hexadecimal\nFor negative integer, two’s complement method is used\nNote:All letters in hexadecimal (a-f) must be in lowercase\nThe hexadecimal string must not contain extra leading 0s\nIf the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character\nThe given number is guaranteed to fit within the range of a 32-bit signed integer\nYou must not use any method provided by the library which converts/formats the number to hex directly\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput:\n26Output:\n\"1a\"Example 2:\nInput:\n-1Output:\n\"ffffffff\""
  },
  {
    "name": "Queue Reconstruction by Height",
    "description": "Suppose you have a random list of people standing in a queue\nEach person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h\nWrite an algorithm to reconstruct the queue\nNote:The number of people is less than 1,100\n",
    "difficulty": "hard",
    "examples": "ExampleInput:\n[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]Output:\n[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]"
  },
  {
    "name": "Trapping Rain Water II",
    "description": "Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining\nNote:Both m and n are less than 110\nThe height of each unit cell is greater than 0 and is less than 20,000\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven the following 3x6 height map:\n[  [1,4,3,1,3,2],  [3,2,1,3,2,4],  [2,3,3,2,3,1]]Return 4.\nThe above image represents the elevation map [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] before the rain.\nAfter the rain, water are trapped between the blocks. The total volume of water trapped is 4.\n"
  },
  {
    "name": "Longest Palindrome",
    "description": "Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters\n",
    "difficulty": "medium",
    "examples": "This is case sensitive, for example \"Aa\" is not considered a palindrome here.\nNote:\nAssume the length of given string will not exceed 1,010.\nExample:\nInput:\n\"abccccdd\"Output:\n7Explanation:\nOne longest palindrome that can be built is \"dccaccd\", whose length is 7.\n"
  },
  {
    "name": "Split Array Largest Sum",
    "description": "Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays\nWrite an algorithm to minimize the largest sum among these m subarrays\nNote:If n is the length of array, assume the following constraints are satisfied:1 ≤ n ≤ 10001 ≤ m ≤ min(50, n)",
    "difficulty": "hard",
    "examples": "Examples:\nInput:\nnums = [7,2,5,10,8]m = 2Output:\n18Explanation:\nThere are four ways to split nums into two subarrays.\nThe best way is to split it into [7,2,5] and [10,8],where the largest sum among the two subarrays is only 18.\n"
  },
  {
    "name": "Fizz Buzz",
    "description": "Write a program that outputs the string representation of numbers from 1 to n\nBut for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”\nFor numbers which are multiples of both three and five output “FizzBuzz”\n",
    "difficulty": "medium",
    "examples": "Example:\nn = 15,Return:\n[    \"1\",    \"2\",    \"Fizz\",    \"4\",    \"Buzz\",    \"Fizz\",    \"7\",    \"8\",    \"Fizz\",    \"Buzz\",    \"11\",    \"Fizz\",    \"13\",    \"14\",    \"FizzBuzz\"]"
  },
  {
    "name": "Arithmetic Slices",
    "description": "A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same\n",
    "difficulty": "hard",
    "examples": "For example, these are arithmetic sequence:\n1, 3, 5, 7, 97, 7, 7, 73, -1, -5, -9The following sequence is not arithmetic. 1, 1, 2, 5, 7\nA zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.\nA slice (P, Q) of array A is called arithmetic if the sequence:\n    A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.\nThe function should return the number of arithmetic slices in the array A.\nExample:\nA = [1, 2, 3, 4]return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.\n"
  },
  {
    "name": "Third Maximum Number",
    "description": "Given a non-empty array of integers, return the third maximum number in this array\nIf it does not exist, return the maximum number\nThe time complexity must be in O(n)\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: [3, 2, 1]\nOutput: 1\nExplanation: The third maximum is 1.\nExample 2:\nInput: [1, 2]\nOutput: 2\nExplanation: The third maximum does not exist, so the maximum (2) is returned instead.\nExample 3:\nInput: [2, 2, 3, 1]\nOutput: 1\nExplanation: Note that the third maximum here means the third maximum distinct number.\nBoth numbers with value 2 are both considered as second maximum.\n"
  },
  {
    "name": "Add Strings",
    "description": "Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2\nNote:The length of both num1 and num2 is < 5100\nBoth num1 and num2 contains only digits 0-9\nBoth num1 and num2 does not contain any leading zero\nYou must not use any built-in BigInteger library or convert the inputs to integer directly\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Partition Equal Subset Sum",
    "description": "Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal\nNote:Each of the array element will not exceed 100\nThe array size will not exceed 200\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [1, 5, 11, 5]\nOutput: true\nExplanation: The array can be partitioned as [1, 5, 5] and [11].\nExample 2:\nInput: [1, 2, 3, 5]\nOutput: false\nExplanation: The array cannot be partitioned into equal sum subsets.\n"
  },
  {
    "name": "Pacific Atlantic Water Flow",
    "description": "Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the \"Pacific ocean\" touches the left and top edges of the matrix and the \"Atlantic ocean\" touches the right and bottom edges\nWater can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower\nFind the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean\nNote:The order of returned grid coordinates does not matter\nBoth m and n are less than 150\n",
    "difficulty": "easy",
    "examples": "Example:\nGiven the following 5x5 matrix:\n  Pacific ~   ~   ~   ~   ~       ~  1   2   2   3  (5) *       ~  3   2   3  (4) (4) *       ~  2   4  (5)  3   1  *       ~ (6) (7)  1   4   5  *       ~ (5)  1   1   2   4  *          *   *   *   *   * AtlanticReturn:\n[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).\n"
  },
  {
    "name": "Battleships in a Board",
    "description": "Given an 2D board, count how many battleships are in it\nThe battleships are represented with 'X's, empty slots are represented with '\n's\nYou may assume the following rules:You receive a valid board, made of only battleships or empty slots\nBattleships can only be placed horizontally or vertically\nIn other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size\nAt least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships\n",
    "difficulty": "medium",
    "examples": "Example:\nX..X\n...X\n...X\nIn the above board there are 2 battleships.\nInvalid Example:\n...X\nXXXX...X\nThis is an invalid board that you will not receive - as battleships will always have a cell separating between them.\nFollow up:Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?\n"
  },
  {
    "name": "Strong Password Checker",
    "description": "A password is considered strong if below conditions are all met:It has at least 6 characters and at most 20 characters\nIt must contain at least one lowercase letter, at least one uppercase letter, and at least one digit\nIt must NOT contain three repeating characters in a row (\"\n\n\naaa\n\n\n\" is weak, but \"\n\n\naa\n\n\na\n\n\n\" is strong, assuming other conditions are met)\nWrite a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password\nIf s is already strong, return 0\nInsertion, deletion or replace of any one character are all considered as one change\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Maximum XOR of Two Numbers in an Array",
    "description": "Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231\nFind the maximum result of ai XOR aj, where 0 ≤ i, j < n\nCould you do this in O(n) runtime?",
    "difficulty": "hard",
    "examples": "Example:\nInput: [3, 10, 5, 25, 2, 8]\nOutput: 28\nExplanation: The maximum result is 5 ^ 25 = 28.\n"
  },
  {
    "name": "Reconstruct Original Digits from English",
    "description": "Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order\nNote:Input contains only lowercase English letters\nInput is guaranteed to be valid and can be transformed to its original digits\nThat means invalid inputs such as \"abc\" or \"zerone\" are not permitted\nInput length is less than 50,000\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: \"owoztneoer\"\nOutput: \"012\"\nExample 2:\nInput: \"fviefuro\"\nOutput: \"45\"\n"
  },
  {
    "name": "Longest Repeating Character Replacement",
    "description": "Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most k times\nFind the length of a longest substring containing all repeating letters you can get after performing the above operations\nNote:Both the string's length and k will not exceed 104\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput:\ns = \"ABAB\", k = 2Output:\n4Explanation:\nReplace the two 'A's with two 'B's or vice versa.\nExample 2:\nInput:\ns = \"AABABBA\", k = 1Output:\n4Explanation:\nReplace the one 'A' in the middle with 'B' and form \"AABBBBA\".\nThe substring \"BBBB\" has the longest repeating letters, which is 4.\n"
  },
  {
    "name": "All O`one Data Structure",
    "description": "Implement a data structure supporting the following operations:Inc(Key) - Inserts a new key  with value 1\nOr increments an existing key by 1\nKey is guaranteed to be a non-empty string\nDec(Key) - If Key's value is 1, remove it from the data structure\nOtherwise decrements an existing key by 1\nIf the key does not exist, this function does nothing\nKey is guaranteed to be a non-empty string\nGetMaxKey() - Returns one of the keys with maximal value\nIf no element exists, return an empty string \"\"\nGetMinKey() - Returns one of the keys with minimal value\nIf no element exists, return an empty string \"\"\nChallenge: Perform all these in O(1) time complexity\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Number of Segments in a String",
    "description": "Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters\nPlease note that the string does not contain any non-printable characters\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: \"Hello, my name is John\"\nOutput: 5\n"
  },
  {
    "name": "Non-overlapping Intervals",
    "description": "Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping\nNote:You may assume the interval's end point is always bigger than its start point\nIntervals like [1,2] and [2,3] have borders \"touching\" but they don't overlap each other\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: [ [1,2], [2,3], [3,4], [1,3] ]\nOutput: 1\nExplanation: [1,3] can be removed and the rest of intervals are non-overlapping.\nExample 2:\nInput: [ [1,2], [1,2], [1,2] ]\nOutput: 2\nExplanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.\nExample 3:\nInput: [ [1,2], [2,3] ]\nOutput: 0\nExplanation: You don't need to remove any of the intervals since they're already non-overlapping.\n"
  },
  {
    "name": "Find Right Interval",
    "description": "Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the \"right\" of i\nFor any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the \"right\" relationship for interval i\nIf the interval j doesn't exist, store -1 for the interval i\nFinally, you need output the stored value of each interval as an array\nNote:You may assume the interval's end point is always bigger than its start point\nYou may assume none of these intervals have the same start point\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: [ [1,2] ]\nOutput: [-1]\nExplanation: There is only one interval in the collection, so it outputs -1.\nExample 2:\nInput: [ [3,4], [2,3], [1,2] ]\nOutput: [-1, 0, 1]\nExplanation: There is no satisfied \"right\" interval for [3,4].\nFor [2,3], the interval [3,4] has minimum-\"right\" start point;For [1,2], the interval [2,3] has minimum-\"right\" start point.\nExample 3:\nInput: [ [1,4], [2,3], [3,4] ]\nOutput: [-1, 2, -1]\nExplanation: There is no satisfied \"right\" interval for [1,4] and [3,4].\nFor [2,3], the interval [3,4] has minimum-\"right\" start point.\n"
  },
  {
    "name": "Path Sum III",
    "description": "You are given a binary tree in which each node contains an integer value\nFind the number of paths that sum to a given value\nThe path does not need to start or end at the root or a leaf, but it must go downwards(traveling only from parent nodes to child nodes)\nThe tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000\n",
    "difficulty": "easy",
    "examples": "Example:\nroot = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8      10     /  \\    5   -3   / \\    \\  3   2   11 / \\   \\3  -2   1Return 3. The paths that sum to 8 are:\n1.  5 -> 3\n2.  5 -> 2 -> 1\n3. -3 -> 11\n"
  },
  {
    "name": "Find All Anagrams in a String",
    "description": "Given a string s and a non-empty string p, find all the start indices of p's anagrams in s\nStrings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100\nThe order of output does not matter\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput:\ns: \"cbaebabacd\" p: \"abc\"\nOutput:\n[0, 6]Explanation:\nThe substring with start index = 0 is \"cba\", which is an anagram of \"abc\".\nThe substring with start index = 6 is \"bac\", which is an anagram of \"abc\".\nExample 2:\nInput:\ns: \"abab\" p: \"ab\"\nOutput:\n[0, 1, 2]Explanation:\nThe substring with start index = 0 is \"ab\", which is an anagram of \"ab\".\nThe substring with start index = 1 is \"ba\", which is an anagram of \"ab\".\nThe substring with start index = 2 is \"ab\", which is an anagram of \"ab\".\n"
  },
  {
    "name": "K-th Smallest in Lexicographical Order",
    "description": "Given integers n and k, find the lexicographically k-th smallest integer in the range from 1 to n\nNote: 1 ≤ k ≤ n ≤ 109\n",
    "difficulty": "easy",
    "examples": "Example:\nInput:\nn: 13   k: 2\nOutput:\n10Explanation:\nThe lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.\n"
  },
  {
    "name": "Arranging Coins",
    "description": "You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins\nGiven n, find the total number of full staircase rows that can be formed\nn is a non-negative integer and fits within the range of a 32-bit signed integer\n",
    "difficulty": "easy",
    "examples": "Example 1:\nn = 5The coins can form the following rows:\n¤¤ ¤¤ ¤Because the 3rd row is incomplete, we return 2.\nExample 2:\nn = 8The coins can form the following rows:\n¤¤ ¤¤ ¤ ¤¤ ¤Because the 4th row is incomplete, we return 3.\n"
  },
  {
    "name": "Add Two Numbers II",
    "description": "You are given two non-empty linked lists representing two non-negative integers\nThe most significant digit comes first and each of their nodes contain a single digit\nAdd the two numbers and return it as a linked list\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself\nFollow up:What if you cannot modify the input lists? In other words, reversing the lists is not allowed\n",
    "difficulty": "easy",
    "examples": "Example:\nInput: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)\nOutput: 7 -> 8 -> 0 -> 7\n"
  },
  {
    "name": "Arithmetic Slices II - Subsequence",
    "description": "A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same\n",
    "difficulty": "easy",
    "examples": "For example, these are arithmetic sequences:\n1, 3, 5, 7, 97, 7, 7, 73, -1, -5, -9The following sequence is not arithmetic. 1, 1, 2, 5, 7\nA zero-indexed array A consisting of N numbers is given. A subsequence slice of that array is any sequence of integers (P0, P1, ..., Pk) such that 0 ≤ P0 < P1 < ... < Pk < N.\nA subsequence slice (P0, P1, ..., Pk) of array A is called arithmetic if the sequence A[P0], A[P1], ..., A[Pk-1], A[Pk] is arithmetic. In particular, this means that k ≥ 2.\nThe function should return the number of arithmetic subsequence slices in the array A.\nThe input contains N integers. Every integer is in the range of -231 and 231-1 and 0 ≤ N ≤ 1000. The output is guaranteed to be less than 231-1.\nExample:\nInput: [2, 4, 6, 8, 10]\nOutput: 7\nExplanation:\nAll arithmetic subsequence slices are:\n[2,4,6][4,6,8][6,8,10][2,4,6,8][4,6,8,10][2,4,6,8,10][2,6,10]"
  },
  {
    "name": "Number of Boomerangs",
    "description": "Given n points in the plane that are all pairwise distinct, a \"boomerang\" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters)\nFind the number of boomerangs\nYou may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive)\n",
    "difficulty": "hard",
    "examples": "Example:\nInput:\n[[0,0],[1,0],[2,0]]Output:\n2Explanation:\nThe two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]"
  },
  {
    "name": "Find All Numbers Disappeared in an Array",
    "description": "Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once\nFind all the elements of [1, n] inclusive that do not appear in this array\nCould you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space\n",
    "difficulty": "hard",
    "examples": "Example:\nInput:\n[4,3,2,7,8,2,3,1]Output:\n[5,6]"
  },
  {
    "name": "Serialize and Deserialize BST",
    "description": "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment\nDesign an algorithm to serialize and deserialize a binary search tree\nThere is no restriction on how your serialization/deserialization algorithm should work\nYou just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure\nThe encoded string should be as compact as possible\nNote: Do not use class member/global/static variables to store states\nYour serialize and deserialize algorithms should be stateless\n",
    "difficulty": "easy",
    "examples": ""
  },
  {
    "name": "Delete Node in a BST",
    "description": "Given a root node reference of a BST and a key, delete the node with the given key in the BST\nReturn the root node reference (possibly updated) of the BST\nBasically, the deletion can be divided into two stages:Search for a node to remove\nIf the node is found, delete the node\nNote: Time complexity should be O(height of tree)\n",
    "difficulty": "medium",
    "examples": "Example:\nroot = [5,3,6,2,4,null,7]key = 3    5   / \\  3   6 / \\   \\2   4   7Given key to delete is 3. So we find the node with value 3 and delete it.\nOne valid answer is [5,4,6,2,null,null,7], shown in the following BST.\n    5   / \\  4   6 /     \\2       7Another valid answer is [5,2,6,null,4,null,7].\n    5   / \\  2   6   \\   \\    4   7"
  },
  {
    "name": "Sort Characters By Frequency",
    "description": "Given a string, sort it in decreasing order based on the frequency of characters\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput:\n\"tree\"Output:\n\"eert\"Explanation:\n'e' appears twice while 'r' and 't' both appear once.\nSo 'e' must appear before both 'r' and 't'. Therefore \"eetr\" is also a valid answer.\nExample 2:\nInput:\n\"cccaaa\"Output:\n\"cccaaa\"Explanation:\nBoth 'c' and 'a' appear three times, so \"aaaccc\" is also a valid answer.\nNote that \"cacaca\" is incorrect, as the same characters must be together.\nExample 3:\nInput:\n\"Aabb\"Output:\n\"bbAa\"Explanation:\n\"bbaA\" is also a valid answer, but \"Aabb\" is incorrect.\nNote that 'A' and 'a' are treated as two different characters.\n"
  },
  {
    "name": "Minimum Moves to Equal Array Elements",
    "description": "Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1\n",
    "difficulty": "hard",
    "examples": "Example:\nInput:\n[1,2,3]Output:\n3Explanation:\nOnly three moves are needed (remember each move increments two elements):\n[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]"
  },
  {
    "name": "4Sum II",
    "description": "Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero\nTo make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500\nAll integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1\n",
    "difficulty": "easy",
    "examples": "Example:\nInput:\nA = [ 1, 2]B = [-2,-1]C = [-1, 2]D = [ 0, 2]Output:\n2Explanation:\nThe two tuples are:\n1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0\n2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0\n"
  },
  {
    "name": "Assign Cookies",
    "description": "Assume you are an awesome parent and want to give your children some cookies\nBut, you should give each child at most one cookie\nEach child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj\nIf sj >= gi, we can assign the cookie j to the child i, and the child i will be content\nYour goal is to maximize the number of your content children and output the maximum number\nNote:You may assume the greed factor is always positive\nYou cannot assign more than one cookie to one child\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: [1,2,3], [1,1]\nOutput: 1\nExplanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.\nAnd even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.\nYou need to output 1.\nExample 2:\nInput: [1,2], [1,2,3]\nOutput: 2\nExplanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.\nYou have 3 cookies and their sizes are big enough to gratify all of the children,You need to output 2.\n"
  },
  {
    "name": "132 Pattern",
    "description": "Given a sequence of n integers a1, a2,\n\n\n, an, a 132 pattern is a subsequence ai, aj, ak suchthat i < j < k and ai < ak < aj\nDesign an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list\nNote: n will be less than 15,000\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [1, 2, 3, 4]\nOutput: False\nExplanation: There is no 132 pattern in the sequence.\nExample 2:\nInput: [3, 1, 4, 2]\nOutput: True\nExplanation: There is a 132 pattern in the sequence: [1, 4, 2].\nExample 3:\nInput: [-1, 3, 2, 0]\nOutput: True\nExplanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].\n"
  },
  {
    "name": "Repeated Substring Pattern",
    "description": "Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together\nYou may assume the given string consists of lowercase English letters only and its length  will not exceed 10000\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: \"abab\"\nOutput: True\nExplanation: It's the substring \"ab\" twice.\nExample 2:\nInput: \"aba\"\nOutput: False\nExample 3:\nInput: \"abcabcabcabc\"\nOutput: True\nExplanation: It's the substring \"abc\" four times. (And the substring \"abcabc\" twice.)\n"
  },
  {
    "name": "LFU Cache",
    "description": "Design and implement a data structure for Least Frequently Used (LFU) cache\nIt should support the following operations: get and put\nget(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1\nput(key, value) - Set or insert the value if the key is not already present\nWhen the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item\nFor the purpose of this problem, when there is a tie (i\ne\n, two or more keys that have the same frequency), the least recently used key would be evicted\nFollow up:Could you do both operations in O(1) time complexity?",
    "difficulty": "medium",
    "examples": "Example:\nLFUCache cache = new LFUCache( 2 /* capacity */ );cache.put(1, 1);\ncache.put(2, 2);\ncache.get(1);       // returns 1\ncache.put(3, 3);    // evicts key 2\ncache.get(2);       // returns -1 (not found)\ncache.get(3);       // returns 3.\ncache.put(4, 4);    // evicts key 1.\ncache.get(1);       // returns -1 (not found)\ncache.get(3);       // returns 3\ncache.get(4);       // returns 4\n"
  },
  {
    "name": "Hamming Distance",
    "description": "The Hamming distance between two integers is the number of positions at which the corresponding bits are different\nGiven two integers x and y, calculate the Hamming distance\nNote:0 ≤ x, y < 231\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: x = 1, y = 4\nOutput: 2\nExplanation:\n1   (0 0 0 1)4   (0 1 0 0)       ↑   ↑The above arrows point to positions where the corresponding bits are different.\n"
  },
  {
    "name": "Minimum Moves to Equal Array Elements II",
    "description": "Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1\nYou may assume the array's length is at most 10,000\n",
    "difficulty": "medium",
    "examples": "Example:\nInput:\n[1,2,3]Output:\n2Explanation:\nOnly two moves are needed (remember each move increments or decrements one element):\n[1,2,3]  =>  [2,2,3]  =>  [2,2,2]"
  },
  {
    "name": "Island Perimeter",
    "description": "You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water\nGrid cells are connected horizontally/vertically (not diagonally)\nThe grid is completely surrounded by water, and there is exactly one island (i\ne\n, one or more connected land cells)\nThe island doesn't have \"lakes\" (water inside that isn't connected to the water around the island)\nOne cell is a square with side length 1\nThe grid is rectangular, width and height don't exceed 100\nDetermine the perimeter of the island\n",
    "difficulty": "medium",
    "examples": "Example:\n[[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]]Answer: 16\nExplanation: The perimeter is the 16 yellow stripes in the image below:\n"
  },
  {
    "name": "Can I Win",
    "description": "In the \"100 game,\" two players take turns adding, to a running total, any integer from 1\n\n10\nThe player who first causes the running total to reach or exceed 100 wins\nWhat if we change the game so that players cannot re-use integers?",
    "difficulty": "medium",
    "examples": "For example, two players might take turns drawing from a common pool of numbers of 1..15 without replacement until they reach a total >= 100.\nGiven an integer maxChoosableInteger and another integer desiredTotal, determine if the first player to move can force a win, assuming both players play optimally.\nYou can always assume that maxChoosableInteger will not be larger than 20 and desiredTotal will not be larger than 300.\nExampleInput:\nmaxChoosableInteger = 10desiredTotal = 11Output:\nfalseExplanation:\nNo matter which integer the first player choose, the first player will lose.\nThe first player can choose an integer from 1 up to 10.\nIf the first player choose 1, the second player can only choose integers from 2 up to 10.\nThe second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.\nSame with other integers chosen by the first player, the second player will always win.\n"
  },
  {
    "name": "Count The Repetitions",
    "description": "Unique Substrings in Wraparound String",
    "difficulty": "easy",
    "examples": "Define S = [s,n] as the string S which consists of n connected strings s. For example, [\"abc\", 3] =\"abcabcabc\".\nOn the other hand, we define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1. For example, “abc”  can be obtained from “abdbec” based on our definition, but it can not be obtained from “acbbe”.\nYou are given two non-empty strings s1 and s2 (each at most 100 characters long) and two integers 0 ≤ n1 ≤ 106 and 1 ≤ n2 ≤ 106. Now consider the strings S1 and S2, where S1=[s1,n1] and S2=[s2,n2]. Find the maximum integer M such that [S2,M] can be obtained from S1.\nExample:\nInput:\ns1=\"acb\", n1=4s2=\"ab\", n2=2Return:\n2Unique Substrings in Wraparound String"
  },
  {
    "name": "Validate IP Address",
    "description": "Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither\nIPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots (\"\n\"), e\ng\n,172\n16\n254\n1;",
    "difficulty": "easy",
    "examples": "Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.\nIPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (\":\"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).\nHowever, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.\nBesides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.\nNote:\nYou may assume there is no extra space or special characters in the input string.\nExample 1:\nInput: \"172.16.254.1\"\nOutput: \"IPv4\"\nExplanation: This is a valid IPv4 address, return \"IPv4\".\nExample 2:\nInput: \"2001:0db8:85a3:0:0:8A2E:0370:7334\"\nOutput: \"IPv6\"\nExplanation: This is a valid IPv6 address, return \"IPv6\".\nExample 3:\nInput: \"256.256.256.256\"\nOutput: \"Neither\"\nExplanation: This is neither a IPv4 address nor a IPv6 address.\n"
  },
  {
    "name": "Concatenated Words",
    "description": "Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words\nA concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: [\"cat\",\"cats\",\"catsdogcats\",\"dog\",\"dogcatsdog\",\"hippopotamuses\",\"rat\",\"ratcatdogcat\"]\nOutput: [\"catsdogcats\",\"dogcatsdog\",\"ratcatdogcat\"]\nExplanation: \"catsdogcats\" can be concatenated by \"cats\", \"dog\" and \"cats\";  \"dogcatsdog\" can be concatenated by \"dog\", \"cats\" and \"dog\"; \"ratcatdogcat\" can be concatenated by \"rat\", \"cat\", \"dog\" and \"cat\".\nNote:\nThe number of elements of the given array will not exceed 10,000The length sum of elements in the given array will not exceed 600,000.\nAll the input string will only include lower case letters.\nThe returned elements order does not matter.\n"
  },
  {
    "name": "Matchsticks to Square",
    "description": "Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out a way you can make one square by using up all those matchsticks\nYou should not break any stick, but you can link them up, and each matchstick must be used exactly one time\nYour input will be several matchsticks the girl has, represented with their stick length\nYour output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [1,1,2,2,2]\nOutput: true\nExplanation: You can form a square with length 2, one side of the square came two sticks with length 1.\nExample 2:\nInput: [3,3,3,3,4]\nOutput: false\nExplanation: You cannot find a way to form a square with all the matchsticks.\nNote:\nThe length sum of the given matchsticks is in the range of 0 to 10^9.\nThe length of the given matchstick array will not exceed 15.\n"
  },
  {
    "name": "Ones and Zeroes",
    "description": "In the computer world, use restricted resource you have to generate maximum benefit is what we always want to pursue\nFor now, suppose you are a dominator of m 0s and n 1s respectively\nOn the other hand, there is an array with strings consisting of only 0s and 1s\nNow your task is to find the maximum number of strings that you can form with given m 0s and n 1s\nEach 0 and 1 can be used at most once\nNote:The given numbers of 0s and 1s will both not exceed 100The size of given string array won't exceed 600\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: Array = {\"10\", \"0001\", \"111001\", \"1\", \"0\"}, m = 5, n = 3\nOutput: 4\nExplanation: This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are “10,”0001”,”1”,”0”\nExample 2:\nInput: Array = {\"10\", \"0\", \"1\"}, m = 1, n = 1\nOutput: 2\nExplanation: You could form \"10\", but then you'd have nothing left. Better form \"0\" and \"1\".\n"
  },
  {
    "name": "Heaters",
    "description": "Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses\nNow, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters\nSo, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters\nNote:Numbers of houses and heaters you are given are non-negative and will not exceed 25000\nPositions of houses and heaters you are given are non-negative and will not exceed 10^9\nAs long as a house is in the heaters' warm radius range, it can be warmed\nAll the heaters follow your radius standard and the warm radius will the same\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [1,2,3],[2]\nOutput: 1\nExplanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.\nExample 2:\nInput: [1,2,3,4],[1,4]\nOutput: 1\nExplanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.\n"
  },
  {
    "name": "Number Complement",
    "description": "Given a positive integer, output its complement number\nThe complement strategy is to flip the bits of its binary representation\nNote:The given integer is guaranteed to fit within the range of a 32-bit signed integer\nYou could assume no leading zero bit in the integer’s binary representation\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: 5\nOutput: 2\nExplanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.\nExample 2:\nInput: 1\nOutput: 0\nExplanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.\n"
  },
  {
    "name": "Total Hamming Distance",
    "description": "The Hamming distance between two integers is the number of positions at which the corresponding bits are different\nNow your job is to find the total Hamming distance between all pairs of the given numbers\n",
    "difficulty": "medium",
    "examples": "Example:\nInput: 4, 14, 2\nOutput: 6\nExplanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just\nshowing the four bits relevant in this case). So the answer will be:\nHammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.\nNote:\nElements of the given array are in the range of 0  to 10^9Length of the array will not exceed 10^4.\n"
  },
  {
    "name": "Sliding Window Median",
    "description": "Median is the middle value in an ordered integer list\nIf the size of the list is even, there is no middle value\nSo the median is the mean of the two middle value\n",
    "difficulty": "easy",
    "examples": "Examples:\n[2,3,4] , the median is 3[2,3], the median is (2 + 3) / 2 = 2.5\nGiven an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.\nFor example,Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.\nWindow position                Median---------------               -----[1  3  -1] -3  5  3  6  7       1 1 [3  -1  -3] 5  3  6  7       -1 1  3 [-1  -3  5] 3  6  7       -1 1  3  -1 [-3  5  3] 6  7       3 1  3  -1  -3 [5  3  6] 7       5 1  3  -1  -3  5 [3  6  7]      6Therefore, return the median sliding window as [1,-1,-1,3,5,6].\nNote:\nYou may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.\n"
  },
  {
    "name": "Magical String",
    "description": "A magical string S consists of only '1' and '2' and obeys the following rules:The string S is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string S itself\nThe first few elements of string S is the following:S = \"1221121221221121122……\"If we group the consecutive '1's and '2's in S, it will be:1   22  11  2  1  22  1  22  11  2  11  22\n\n\n\n\n\nand the occurrences of '1's or '2's in each group are:1   2    2    1   1    2     1    2     2    1    2    2\n\n\n\n\n\nYou can see that the occurrence sequence above is the S itself\nGiven an integer N as input, return the number of '1's in the first N number in the magical string S\nNote:N will not exceed 100,000\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: 6\nOutput: 3\nExplanation: The first 6 elements of magical string S is \"12211\" and it contains three 1's, so return 3.\n"
  },
  {
    "name": "License Key Formatting",
    "description": "Now you are given a string S, which represents a software license key which we would like to format\nThe string S is composed of alphanumerical characters and dashes\nThe dashes split the alphanumerical characters within the string into groups\n(i\ne\nif there are M dashes, the string is split into M+1 groups)\nThe dashes in the given string are possibly misplaced\nWe want each group of characters to be of length K (except for possibly the first group, which could be shorter, but still must contain at least one character)\nTo satisfy this requirement, we will reinsert dashes\nAdditionally, all the lower case letters in the string must be converted to upper case\nSo, you are given a non-empty string S, representing a license key to format, and an integer K\nAnd you need to return the license key formatted according to the description above\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: S = \"2-4A0r7-4k\", K = 4\nOutput: \"24A0-R74K\"\nExplanation: The string S has been split into two parts, each part has 4 characters.\nExample 2:\nInput: S = \"2-4A0r7-4k\", K = 3\nOutput: \"24-A0R-74K\"\nExplanation: The string S has been split into three parts, each part has 3 characters except the first part as it could be shorter as said above.\nNote:\nThe length of string S will not exceed 12,000, and K is a positive integer.\nString S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).\nString S is non-empty.\n"
  },
  {
    "name": "Smallest Good Base",
    "description": "For an integer n, we call k>=2 a good base of n, if all digits of n base k are 1\nNow given a string representing n, you should return the smallest good base of n in string format\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: \"13\"\nOutput: \"3\"\nExplanation: 13 base 3 is 111.\nExample 2:\nInput: \"4681\"\nOutput: \"8\"\nExplanation: 4681 base 8 is 11111.\nExample 3:\nInput: \"1000000000000000000\"\nOutput: \"999999999999999999\"\nExplanation: 1000000000000000000 base 999999999999999999 is 11.\nNote:\nThe range of n is [3, 10^18].\nThe string representing n is always valid and will not have leading zeros.\n"
  },
  {
    "name": "Max Consecutive Ones",
    "description": "Given a binary array, find the maximum number of consecutive 1s in this array\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: [1,1,0,1,1,1]\nOutput: 3\nExplanation: The first two digits or the last three digits are consecutive 1s.\n    The maximum number of consecutive 1s is 3.\nNote:\nThe input array will only contain 0 and 1.\nThe length of input array is a positive integer and will not exceed 10,000"
  },
  {
    "name": "Predict the Winner",
    "description": "Given an array of scores that are non-negative integers\nPlayer 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on\nEach time a player picks a number, that number will not be available for the next player\nThis continues until all the scores have been chosen\nThe player with the maximum score wins\nGiven an array of scores, predict whether player 1 is the winner\nYou can assume each player plays to maximize his score\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [1, 5, 2]\nOutput: False\nExplanation: Initially, player 1 can choose between 1 and 2. If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. Hence, player 1 will never be the winner and you need to return False.\nExample 2:\nInput: [1, 5, 233, 7]\nOutput: True\nExplanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.\nNote:\n1 <= length of the array <= 20.\nAny scores in the given array are non-negative integers and will not exceed 10,000,000.\nIf the scores of both players are equal, then player 1 is still the winner.\n"
  },
  {
    "name": "Zuma Game",
    "description": "Think about Zuma Game\nYou have a row of balls on the table, colored red(R), yellow(Y), blue(B), green(G), and white(W)\nYou also have several balls in your hand\nEach time, you may choose a ball in your hand, and insert it into the row (including the leftmost place and rightmost place)\nThen, if there is a group of 3 or more balls in the same color touching, remove these balls\nKeep doing this until no more balls can be removed\nFind the minimal balls you have to insert to remove all the balls on the table\nIf you cannot remove all the balls, output -1\n",
    "difficulty": "hard",
    "examples": "Examples:\nInput: \"WRRBBW\", \"RB\"\nOutput: -1\nExplanation: WRRBBW -> WRR[R]BBW -> WBBW -> WBB[B]W -> WW\nInput: \"WWRRBBWW\", \"WRBRW\"\nOutput: 2\nExplanation: WWRRBBWW -> WWRR[R]BBWW -> WWBBWW -> WWBB[B]WW -> WWWW -> empty\nInput:\"G\", \"GGGGG\"\nOutput: 2\nExplanation: G -> G[G] -> GG[G] -> empty\nInput: \"RBYYBBRRB\", \"YRBGB\"\nOutput: 3\nExplanation: RBYYBBRRB -> RBYY[Y]BBRRB -> RBBBRRB -> RRRB -> B -> B[B] -> BB[B] -> empty\nNote:\nYou may assume that the initial row of balls on the table won’t have any 3 or more consecutive balls with the same color.\nThe number of balls on the table won't exceed 20, and the string represents these balls is called \"board\" in the input.\nThe number of balls in your hand won't exceed 5, and the string represents these balls is called \"hand\" in the input.\nBoth input strings will be non-empty and only contain characters 'R','Y','B','G','W'.\n"
  },
  {
    "name": "Increasing Subsequences",
    "description": "Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2\n",
    "difficulty": "easy",
    "examples": "Example:\nInput: [4, 6, 7, 7]\nOutput: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]\nNote:\nThe length of the given array will not exceed 15.\nThe range of integer in the given array is [-100,100].\nThe given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.\n"
  },
  {
    "name": "Construct the Rectangle",
    "description": "For a web developer, it is very important to know how to design a web page's size\nSo, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:1\nThe area of the rectangular web page you designed must equal to the given target area\n2\nThe width W should not be larger than the length L, which means L >= W\n3\nThe difference between length L and width W should be as small as possible\nYou need to output the length L and the width W of the web page you designed in sequence\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: 4\nOutput: [2, 2]\nExplanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].\nBut according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.\nNote:\nThe given area won't exceed 10,000,000 and is a positive integerThe web page's width and length you designed must be positive integers.\n"
  },
  {
    "name": "Reverse Pairs",
    "description": "Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j]\nYou need to return the number of important reverse pairs in the given array\n",
    "difficulty": "medium",
    "examples": "Example1:\nInput: [1,3,2,3,1]\nOutput: 2\nExample2:\nInput: [2,4,3,5,1]\nOutput: 3\nNote:\nThe length of the given array will not exceed 50,000.\nAll the numbers in the input array are in the range of 32-bit integer.\n"
  },
  {
    "name": "Target Sum",
    "description": "You are given a list of non-negative integers, a1, a2,\n\n\n, an, and a target, S\nNow you have 2 symbols + and -\nFor each integer, you should choose one from + and - as its new symbol\nFind out how many ways to assign symbols to make sum of integers equal to target S\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: nums is [1, 1, 1, 1, 1], S is 3.\nOutput: 5\nExplanation:\n-1+1+1+1+1 = 3+1-1+1+1+1 = 3+1+1-1+1+1 = 3+1+1+1-1+1 = 3+1+1+1+1-1 = 3There are 5 ways to assign symbols to make the sum of nums be target 3.\nNote:\nThe length of the given array is positive and will not exceed 20.\nThe sum of elements in the given array will not exceed 1000.\nYour output answer is guaranteed to be fitted in a 32-bit integer.\n"
  },
  {
    "name": "Teemo Attacking",
    "description": "In LLP world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition\nNow, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition\nYou may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [1,4], 2\nOutput: 4\nExplanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately. This poisoned status will last 2 seconds until the end of time point 2. And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds. So you finally need to output 4.\nExample 2:\nInput: [1,2], 2\nOutput: 3\nExplanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned. This poisoned status will last 2 seconds until the end of time point 2. However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status. Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3. So you finally need to output 3.\nNote:\nYou may assume the length of given time series array won't exceed 10000.\nYou may assume the numbers in the Teemo's attacking time series and his poisoning time duration per attacking are non-negative integers, which won't exceed 10,000,000.\n"
  },
  {
    "name": "Next Greater Element I",
    "description": "You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2\nFind all the next greater numbers for nums1's elements in the corresponding places of nums2\nThe Next Greater Number of a number x in nums1 is the first greater number to its right in nums2\nIf it does not exist, output -1 for this number\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: nums1 = [4,1,2], nums2 = [1,3,4,2].\nOutput: [-1,3,-1]\nExplanation:\n    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.\n    For number 1 in the first array, the next greater number for it in the second array is 3.\n    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.\nExample 2:\nInput: nums1 = [2,4], nums2 = [1,2,3,4].\nOutput: [3,-1]\nExplanation:\n    For number 2 in the first array, the next greater number for it in the second array is 3.\n    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.\nNote:\nAll elements in nums1 and nums2 are unique.\nThe length of both nums1 and nums2 would not exceed 1000.\n"
  },
  {
    "name": "Diagonal Traverse",
    "description": "Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image\n",
    "difficulty": "hard",
    "examples": "Example:\nInput:\n[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]Output:  [1,2,4,7,5,3,6,8,9]\nExplanation:\nNote:\nThe total number of elements of the given matrix will not exceed 10,000.\n"
  },
  {
    "name": "Keyboard Row",
    "description": "Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [\"Hello\", \"Alaska\", \"Dad\", \"Peace\"]\nOutput: [\"Alaska\", \"Dad\"]\nNote:\nYou may use one character in the keyboard more than once.\nYou may assume the input string will only contain letters of alphabet.\n"
  },
  {
    "name": "Find Mode in Binary Search Tree",
    "description": "Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST\nAssume a BST is defined as follows:The left subtree of a node contains only nodes with keys less than or equal to the node's key\nThe right subtree of a node contains only nodes with keys greater than or equal to the node's key\nBoth the left and right subtrees must also be binary search trees\n",
    "difficulty": "medium",
    "examples": "For example:\nGiven BST [1,null,2,2],   1    \\     2    /   2return [2].\nNote:\nIf a tree has more than one mode, you can return them in any order.\nFollow up:\nCould you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).\n"
  },
  {
    "name": "IPO",
    "description": "Suppose LeetCode will start its IPO soon\nIn order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO\nSince it has limited resources, it can only finish at most k distinct projects before the IPO\nHelp LeetCode design the best way to maximize its total capital after finishing at most k distinct projects\nYou are given several projects\nFor each project i, it has a pure profit Pi and a minimum capital of Ci is needed to start the corresponding project\nInitially, you have W capital\nWhen you finish a project, you will obtain its pure profit and the profit will be added to your total capital\nTo sum up, pick a list of at most k distinct projects from given projects to maximize your final capital, and output your final maximized capital\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].\nOutput: 4\nExplanation: Since your initial capital is 0, you can only start the project indexed 0.\n             After finishing it you will obtain profit 1 and your capital becomes 1.\n             With capital 1, you can either start the project indexed 1 or the project indexed 2.\n             Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.\n             Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.\nNote:\nYou may assume all numbers in the input are non-negative integers.\nThe length of Profits array and Capital array will not exceed 50,000.\nThe answer is guaranteed to fit in a 32-bit signed integer.\n"
  },
  {
    "name": "Next Greater Element II",
    "description": "Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element\nThe Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number\nIf it doesn't exist, output -1 for this number\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: [1,2,1]\nOutput: [2,-1,2]\nExplanation: The first 1's next greater number is 2; The number 2 can't find next greater number; The second 1's next greater number needs to search circularly, which is also 2.\nNote:\nThe length of given array won't exceed 10000.\n"
  },
  {
    "name": "Base 7",
    "description": "Given an integer, return its base 7 string representation\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: 100\nOutput: \"202\"\nExample 2:\nInput: -7\nOutput: \"-10\"\nNote:\nThe input will be in range of [-1e7, 1e7].\n"
  },
  {
    "name": "Relative Ranks",
    "description": "Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: \"Gold Medal\", \"Silver Medal\" and \"Bronze Medal\"\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: [5, 4, 3, 2, 1]\nOutput: [\"Gold Medal\", \"Silver Medal\", \"Bronze Medal\", \"4\", \"5\"]\nExplanation: The first three athletes got the top three highest scores, so they got \"Gold Medal\", \"Silver Medal\" and \"Bronze Medal\". For the left two athletes, you just need to output their relative ranks according to their scores.\nNote:\nN is a positive integer and won't exceed 10,000.\nAll the scores of athletes are guaranteed to be unique.\n"
  },
  {
    "name": "Perfect Number",
    "description": "We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself\nNow, given an integer n, write a function that returns true when it is a perfect number and false when it is not\n",
    "difficulty": "easy",
    "examples": "Example:\nInput: 28\nOutput: True\nExplanation: 28 = 1 + 2 + 4 + 7 + 14\nNote:\nThe input number n will not exceed 100,000,000. (1e8)\n"
  },
  {
    "name": "Most Frequent Subtree Sum",
    "description": "Given the root of a tree, you are asked to find the most frequent subtree sum\nThe subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself)\nSo what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order\n",
    "difficulty": "easy",
    "examples": "Examples 1Input:\n  5 /  \\2   -3return [2, -3, 4], since all the values happen only once, return all of them in any order.\nExamples 2Input:\n  5 /  \\2   -5return [2], since 2 happens twice, however -5 only occur once.\nNote:\nYou may assume the sum of values in any subtree is in the range of 32-bit signed integer.\n"
  },
  {
    "name": "Find Bottom Left Tree Value",
    "description": "Given a binary tree, find the leftmost value in the last row of the tree\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput:\n    2   / \\  1   3Output:\n1  Example 2:\nInput:\n        1       / \\      2   3     /   / \\    4   5   6       /      7Output:\n7Note:\nYou may assume the tree (i.e., the given root node) is not NULL.\n"
  },
  {
    "name": "Freedom Trail",
    "description": "In the video game Fallout 4, the quest \"Road to Freedom\" requires players to reach a metal dial called the \"Freedom Trail Ring\", and use the dial to spell a specific keyword in order to open the door\nGiven a string ring, which represents the code engraved on the outer ring and another string key, which represents the keyword needs to be spelled\nYou need to find the minimum number of steps in order to spell all the characters in the keyword\nInitially, the first character of the ring is aligned at 12:00 direction\nYou need to spell all the characters in the string key one by one by rotating the ring clockwise or anticlockwise to make each character of the string key aligned at 12:00 direction and then by pressing the center button\nAt the stage of rotating the ring to spell the key character key[i]:You can rotate the ring clockwise or anticlockwise one place, which counts as 1 step\nThe final purpose of the rotation is to align one of the string ring's characters at the 12:00 direction, where this character must equal to the character key[i]\nIf the character key[i] has been aligned at the 12:00 direction, you need to press the center button to spell, which also counts as 1 step\nAfter the pressing, you could begin to spell the next character in the key (next stage), otherwise, you've finished all the spelling\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: ring = \"godding\", key = \"gd\"\nOutput: 4\nExplanation: For the first key character 'g', since it is already in place, we just need 1 step to spell this character.  For the second key character 'd', we need to rotate the ring \"godding\" anticlockwise by two steps to make it become \"ddinggo\". Also, we need 1 more step for spelling. So the final output is 4.\nNote:\nLength of both ring and key will be in range 1 to 100.\nThere are only lowercase letters in both strings and might be some duplcate characters in both strings.\nIt's guaranteed that string key could always be spelled by rotating the string ring.\n"
  },
  {
    "name": "Find Largest Value in Each Tree Row",
    "description": "You need to find the largest value in each row of a binary tree\n",
    "difficulty": "easy",
    "examples": "Example:\nInput:\n          1         / \\        3   2       / \\   \\      5   3   9Output: [1, 3, 9]\n"
  },
  {
    "name": "Longest Palindromic Subsequence",
    "description": "Given a string s, find the longest palindromic subsequence's length in s\nYou may assume that the maximum length of s is 1000\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput:\n\"bbbab\"Output:\n4One possible longest palindromic subsequence is \"bbbb\".\nExample 2:\nInput:\n\"cbbd\"Output:\n2One possible longest palindromic subsequence is \"bb\".\n"
  },
  {
    "name": "Super Washing Machines",
    "description": "You have n super washing machines on a line\nInitially, each washing machine has some dresses or is empty\nFor each move, you could choose any m (1 ≤ m ≤ n) washing machines, and pass one dress of each washing machine to one of its adjacent washing machines  at the same time\nGiven an integer array representing the number of dresses in each washing machine from left to right on the line, you should find the minimum number of moves to make all the washing machines have the same number of dresses\nIf it is not possible to do it, return -1\n",
    "difficulty": "hard",
    "examples": "Example1Input: [1,0,5]\nOutput: 3\nExplanation:\n1st move:    1     0 <-- 5    =>    1     1     4\n2nd move:    1 <-- 1 <-- 4    =>    2     1     3\n3rd move:    2     1 <-- 3    =>    2     2     2\nExample2Input: [0,3,0]\nOutput: 2\nExplanation:\n1st move:    0 <-- 3     0    =>    1     2     0\n2nd move:    1     2 --> 0    =>    1     1     1\nExample3Input: [0,2,0]\nOutput: -1\nExplanation:\nIt's impossible to make all the three washing machines have the same number of dresses.\nNote:\nThe range of n is [1, 10000].\nThe range of dresses number in a super washing machine is [0, 1e5].\n"
  },
  {
    "name": "Detect Capital",
    "description": "Given a word, you need to judge whether the usage of capitals in it is right or not\nWe define the usage of capitals in a word to be right when one of the following cases holds:All letters in this word are capitals, like \"USA\"\nAll letters in this word are not capitals, like \"leetcode\"\nOnly the first letter in this word is capital if it has more than one letter, like \"Google\"\nOtherwise, we define that this word doesn't use capitals in a right way\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: \"USA\"\nOutput: True\nExample 2:\nInput: \"FlaG\"\nOutput: False\nNote:\nThe input will be a non-empty word consisting of uppercase and lowercase latin letters.\n"
  },
  {
    "name": "Longest Uncommon Subsequence II",
    "description": "Given a list of strings, you need to find the longest uncommon subsequence among them\nThe longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings\nA subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements\nTrivially, any string is a subsequence of itself and an empty string is a subsequence of any string\nThe input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence\nIf the longest uncommon subsequence doesn't exist, return -1\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: \"aba\", \"cdc\", \"eae\"\nOutput: 3\nNote:\nAll the given strings' lengths will not exceed 10.\nThe length of the given list will be in the range of [2, 50].\n"
  },
  {
    "name": "Continuous Subarray Sum",
    "description": "Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: [23, 2, 4, 6, 7],  k=6\nOutput: True\nExplanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.\nExample 2:\nInput: [23, 2, 6, 4, 7],  k=6\nOutput: True\nExplanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.\nNote:\nThe length of the array won't exceed 10,000.\nYou may assume the sum of all the numbers is in the range of a signed 32-bit integer.\n"
  },
  {
    "name": "Longest Word in Dictionary through Deleting",
    "description": "Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string\nIf there are more than one possible results, return the longest word with the smallest lexicographical order\nIf there is no possible result, return the empty string\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput:\ns = \"abpcplea\", d = [\"ale\",\"apple\",\"monkey\",\"plea\"]Output:\n\"apple\"Example 2:\nInput:\ns = \"abpcplea\", d = [\"a\",\"b\",\"c\"]Output:\n\"a\"Note:\nAll the strings in the input will only contain lower-case letters.\nThe size of the dictionary won't exceed 1,000.\nThe length of all the strings in the input won't exceed 1,000.\n"
  },
  {
    "name": "Contiguous Array",
    "description": "Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1\n",
    "difficulty": "medium",
    "examples": "Example 1:\nInput: [0,1]\nOutput: 2\nExplanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.\nExample 2:\nInput: [0,1,0]\nOutput: 2\nExplanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.\nNote:\nThe length of the given binary array will not exceed 50,000.\n"
  },
  {
    "name": "Beautiful Arrangement",
    "description": "Suppose you have N integers from 1 to N\nWe define a beautiful arrangement as an array that is constructed by these N numbers successfully if one of the following is true for the ith position (1 ≤ i ≤ N) in this array:The number at the ith position is divisible by i\ni is divisible by the number at the ith position\nNow given N, how many beautiful arrangements can you construct?",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: 2\nOutput: 2\nExplanation:\nThe first beautiful arrangement is [1, 2]:\nNumber at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).\nNumber at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).\nThe second beautiful arrangement is [2, 1]:\nNumber at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).\nNumber at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.\nNote:\nN is a positive integer and will not exceed 15.\n"
  },
  {
    "name": "Minesweeper",
    "description": "Let's play the minesweeper game (Wikipedia, online game)!You are given a 2D char matrix representing the game board\n'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine\nNow given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:If a mine ('M') is revealed, then the game is over - change it to 'X'\nIf an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively\nIf an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines\nReturn the board when no more squares will be revealed\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput:\n[['E', 'E', 'E', 'E', 'E'], ['E', 'E', 'M', 'E', 'E'], ['E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E']]Click : [3,0]\nOutput:\n[['B', '1', 'E', '1', 'B'], ['B', '1', 'M', '1', 'B'], ['B', '1', '1', '1', 'B'], ['B', 'B', 'B', 'B', 'B']]Explanation:\nExample 2:\nInput:\n[['B', '1', 'E', '1', 'B'], ['B', '1', 'M', '1', 'B'], ['B', '1', '1', '1', 'B'], ['B', 'B', 'B', 'B', 'B']]Click : [1,2]\nOutput:\n[['B', '1', 'E', '1', 'B'], ['B', '1', 'X', '1', 'B'], ['B', '1', '1', '1', 'B'], ['B', 'B', 'B', 'B', 'B']]Explanation:\nNote:\nThe range of the input matrix's height and width is [1,50].\nThe click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.\nThe input board won't be a stage when game is over (some mines have been revealed).\nFor simplicity, not mentioned rules should be ignored in this problem. For example, you don't need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares.\n"
  },
  {
    "name": "Minimum Absolute Difference in BST",
    "description": "Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes\n",
    "difficulty": "hard",
    "examples": "Example:\nInput:\n   1    \\     3    /   2Output:\n1Explanation:\nThe minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).\nNote:\nThere are at least two nodes in this BST.\n"
  },
  {
    "name": "K-diff Pairs in an Array",
    "description": "Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array\nHere a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput: [3, 1, 4, 1, 5], k = 2\nOutput: 2\nExplanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).Although we have two 1s in the input, we should only return the number of unique pairs.\nExample 2:\nInput:[1, 2, 3, 4, 5], k = 1\nOutput: 4\nExplanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).\nExample 3:\nInput: [1, 3, 1, 5, 4], k = 0\nOutput: 1\nExplanation: There is one 0-diff pair in the array, (1, 1).\nNote:\nThe pairs (i, j) and (j, i) count as the same pair.\nThe length of the array won't exceed 10,000.\nAll the integers in the given input belong to the range: [-1e7, 1e7].\n"
  },
  {
    "name": "Encode and Decode TinyURL",
    "description": "Note: This is a companion problem to the System Design problem: Design TinyURL\nTinyURL is a URL shortening service where you enter a URL such as https://leetcode\ncom/problems/design-tinyurl and it returns a short URL such as http://tinyurl\ncom/4e9iAk\nDesign the encode and decode methods for the TinyURL service\nThere is no restriction on how your encode/decode algorithm should work\nYou just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Complex Number Multiplication",
    "description": "Given two strings representing two complex numbers\nYou need to return a string representing their multiplication\nNote i2 = -1 according to the definition\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: \"1+1i\", \"1+1i\"\nOutput: \"0+2i\"\nExplanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.\nExample 2:\nInput: \"1+-1i\", \"1+-1i\"\nOutput: \"0+-2i\"\nExplanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.\nNote:\nThe input strings will not have extra blank.\nThe input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.\n"
  },
  {
    "name": "Convert BST to Greater Tree",
    "description": "Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: The root of a Binary Search Tree like this:\n              5            /   \\           2     13Output: The root of a Greater Tree like this:\n             18            /   \\          20     13"
  },
  {
    "name": "Minimum Time Difference",
    "description": "Given a list of 24-hour clock time points in \"Hour:Minutes\" format, find the minimum minutes difference between any two time points in the list\n",
    "difficulty": "easy",
    "examples": "Example 1:\nInput: [\"23:59\",\"00:00\"]\nOutput: 1\nNote:\nThe number of time points in the given list is at least 2 and won't exceed 20000.\nThe input time is legal and ranges from 00:00 to 23:59.\n"
  },
  {
    "name": "Reverse String II",
    "description": "Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string\nIf there are less than k characters left, reverse all of them\nIf there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original\n",
    "difficulty": "hard",
    "examples": "Example:\nInput: s = \"abcdefg\", k = 2\nOutput: \"bacdfeg\"\nRestrictions:\n The string consists of lower English letters only.\n Length of the given string and k will in the range [1, 10000]"
  },
  {
    "name": "01 Matrix",
    "description": "Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell\nThe distance between two adjacent cells is 1\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput:\n0 0 00 1 00 0 0Output:\n0 0 00 1 00 0 0Example 2:\nInput:\n0 0 00 1 01 1 1Output:\n0 0 00 1 01 2 1Note:\nThe number of elements of the given matrix will not exceed 10,000.\nThere are at least one 0 in the given matrix.\nThe cells are adjacent in only four directions: up, down, left and right.\n"
  },
  {
    "name": "Diameter of Binary Tree",
    "description": "Given a binary tree, you need to compute the length of the diameter of the tree\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree\nThis path may or may not pass through the root\n",
    "difficulty": "hard",
    "examples": "Example:\nGiven a binary tree          1         / \\        2   3       / \\      4   5Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].\nNote:\nThe length of path between two nodes is represented by the number of edges between them.\n"
  },
  {
    "name": "Remove Boxes",
    "description": "Given several boxes with different colors represented by different positive numbers\nYou may experience several rounds to remove boxes until there is no box left\nEach time you can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove them and get k*k points\nFind the maximum points you can get\n",
    "difficulty": "hard",
    "examples": "Example 1:\nInput:\n[1, 3, 2, 2, 2, 3, 4, 3, 1]Output:\n23Explanation:\n[1, 3, 2, 2, 2, 3, 4, 3, 1]----> [1, 3, 3, 4, 3, 1] (3*3=9 points)----> [1, 3, 3, 3, 1] (1*1=1 points)----> [1, 1] (3*3=9 points)----> [] (2*2=4 points)Note:\nThe number of boxes n would not exceed 100.\n"
  },
  {
    "name": "Friend Circles",
    "description": "Design TinyURL",
    "difficulty": "hard",
    "examples": "There are N students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.\nGiven a N*N matrix M representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.\nExample 1:\nInput:\n[[1,1,0], [1,1,0], [0,0,1]]Output: 2\nExplanation:The 0th and 1st students are direct friends, so they are in a friend circle. The 2nd student himself is in a friend circle. So return 2.\nExample 2:\nInput:\n[[1,1,0], [1,1,1], [0,1,1]]Output: 1\nExplanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.\nNote:\nN is in range [1,200].\nM[i][i] = 1 for all students.\nIf M[i][j] = 1, then M[j][i] = 1.\nDesign TinyURL"
  },
  {
    "name": "Poor Pigs",
    "description": "There are 1000 buckets, one and only one of them contains poison, the rest are filled with water\nThey all look the same\nIf a pig drinks that poison it will die within 15 minutes\nWhat is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour\nAnswer this question, and write an algorithm for the follow-up general case\nFollow-up:If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the \"poison\" bucket within p minutes? There is exact one bucket with poison\n",
    "difficulty": "medium",
    "examples": ""
  },
  {
    "name": "Minimum Genetic Mutation",
    "description": "A gene string can be represented by an 8-character long string, with choices from \"A\", \"C\", \"G\", \"T\"\nSuppose we need to investigate about a mutation (mutation from \"start\" to \"end\"), where ONE mutation is defined as ONE single character changed in the gene string\n",
    "difficulty": "easy",
    "examples": "For example, \"AACCGGTT\" -> \"AACCGGTA\" is 1 mutation.\nAlso, there is a given gene \"bank\", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.\nNow, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from \"start\" to \"end\". If there is no such a mutation, return -1.\nNote:\nStarting point is assumed to be valid, so it might not be included in the bank.\nIf multiple mutations are needed, all mutations during in the sequence must be valid.\nYou may assume start and end string is not the same.\nExample 1:\nstart: \"AACCGGTT\"\nend:   \"AACCGGTA\"\nbank: [\"AACCGGTA\"]\nreturn: 1\nExample 2:\nstart: \"AACCGGTT\"\nend:   \"AAACGGTA\"\nbank: [\"AACCGGTA\", \"AACCGCTA\", \"AAACGGTA\"]\nreturn: 2\nExample 3:\nstart: \"AAAAACCC\"\nend:   \"AACCCCCC\"\nbank: [\"AAAACCCC\", \"AAACCCCC\", \"AACCCCCC\"]\nreturn: 3\n"
  }
];