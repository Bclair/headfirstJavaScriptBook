var moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}


/*
So far, we've been able to translate certain thoughts into JavaScript code, like, "Are these things equal?" with ===, or, "Is one thing greater than another thing?" with >.

In English, sometimes we say "both of these things" or "either one of these things." Let's translate those phrases into JavaScript with some special operators called logical operators.

To say "both must be true," we can use &&.
To say "either can be true," we can use ||.
To say "I want to make sure this is the opposite of what it really is," we can use !.
To say "these should not be equal to each other," we can use !==.
*/
if (stopLight === 'green' && pedestrians === false) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }
  /*
  In the example above, we make sure that the stopLight is 'green' and && there are no pedestrians before we log 'Go!'.
If either of those conditions are false, we log 'Stop'.
Just like the operators we learned previously, these logical operators will return either true or false.

These logical operators are helpful when writing if/else statements, since they let us make sure multiple variables are true or false.
*/

var moonPhase = 'full';
var foggyNight = true;

if (moonPhase === 'full' && foggyNight) {
  console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' || foggyNight) {
  console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

/*
switch Statements
Before we move on, let's circle back to else if statements.

Using else if is a great tool for when we have a few different conditions we'd like to consider.

else if is limited however. If we want to write a program with 25 different conditions, like a JavaScript cash register, we'd have to write a lot of code, and it can be difficult to read and understand.

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

Note: To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read. Part of being a good developer is writing code that both computers and other humans can read.

switch statements look like this:

var groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
The switch keyword initiates the statement, and is followed by ( ... ), which contains the condition that each case will compare to. In the example, the condition is groceryItem.
Inside the block, { ... }, there are cases. case is like the else if part of an if/else if/else statement. The word following the first case is 'tomato'. If groceryItem equalled 'tomato', that case's console.log would run.
groceryItem equals 'papaya', so the first and second case statements are skipped. The third case runs since the case is 'papaya' matches groceryItem's value. This particular program will log out: 'Papayas are $1.29'.
Then the program stops with the break keyword. This keyword will prevent the switch statement from executing any more of its code.
At the end of each switch statement, there is a default condition. If none of the cases are true, then this code will run. */

var moonPhase = 'full';

switch (moonPhase) {
 case 'full':
    console.log('Howwwwlll!!');
    break;
 case 'mostly full':
    console.log('Arms and legs are getting harrier');
    break;
 case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}