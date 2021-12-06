# Feedback 
## Personal notes on implementation
For each of the excercises I will make a comment on the efficiency of the selected algorithm to achieve the solution along with possible suggestions to extend upon the current solution
### Credit card number masking
The algorithm at its worst case is O(n) time complexity due to the `join` operation that is made on the empty array that is used to form the substring with the masked digits. This is because the empty array that is formed to make the join will always have *n - 5* elements, and the `join` operation needs to iterate over the whole array to make the concatenation. It is also linear in terms of space complexity due to this array that depends on the size of the input. 

With this implementation it is possible to access the unmodified credit card number directly from the function parameter and if need be, the masked string could be stored in a variable rather than be returned. Another extension on the implementation that could be made is to check for a limit on the length of the credit card number to mask if given a different set of requirements. 
### Ordinal numbers
This is a quite simple algorthim, where the most expensive operation is converting the recieved number to a string to extract the digits. 

This code could be modified to handle conversion to ordinal numbers as text (for example returning fourth as well as 4th), but some additional special cases would have to be taken into consideration. 
### Reverse polish notation calculator
This implementation is linear in time complexity in its worst case, dependent on the size of the expression that is to be evaluated. This expression is iterated over completely to search for the solution. Because of this same reason, space complexity is also linear. 

The stack being used stores the numbers that are evaluated in the expression and while it is true that the stack at its most holds half the expression (when all the numbers precede the operators) because of how Big O notation works, *n/2* is the same as *n*. 

Some refactoring could be made in the future to move the evaluation of the operator into another function in case that different operators were added for some reason. 
## Personal notes on the challenge
This was a very rewarding and insightful experience. I got to implement a unit testing framework for the first time and also get more hands on experience with Typescript. 

I pushed myself to take a test driven approach to solving these excercises, so first I wrote test cases for each of the problems at hand. Then I did some research on common unit testing frameworks, and decided that Jest would be a nice unit testing framework to get started with as my first experience. I really enjoyed the experience and came away very impressed with what one can achieve when taking this approach along with implementing some automation to the testing process.

I also setup a Typescript project from scratch for the first time. It was easier than I thought to make the transition, and I would certainly attribute it to being familiar with JavaScript obviously but also using C++ very frequently made it really natural to pick up the differences. I now see the clear benefits of using TypeScript and am looking forward to creating my next NodeJS project with TypeScript. 

I honestly wasn't really aware of the value of taking a test driven approach, but after this challenge I will definitely seek to improve in my knowledge of implementing this methodology in my everyday tasks as a developer. With doing my first real work on Typescript, I am also now more confident than ever that whenever I am faced with a task where I need to transition to a new language, I will be capable of doing so quickly and efficiently. 

All in all, I honestly think that regardless of the outcome of this recruiting process I come away as a better software developer from this experience. 