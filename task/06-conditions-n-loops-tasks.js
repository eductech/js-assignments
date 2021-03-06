
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
export function getFizzBuzz(num) {
  let str = '';
  str += (num % 3 === 0) ? 'Fizz' : ''; 
  str += (num % 5 === 0) ? 'Buzz' : ''; 
  return str ? str : num ;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
export function getFactorial(n) {
  const factorial = n => {
    return (n !== 1) ? n * factorial(n - 1) : 1;
  };
  return factorial(n);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
export function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (n1; n1 <= n2; n1++) {
    sum += n1;
  }
  return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false 
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
export function isTriangle(a, b, c) {
  const cond1 = a + b > c;
  const cond2 = a + c > b;
  const cond3 = c + b > a;
  return cond1 && cond2 && cond3;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
export function doRectanglesOverlap(rect1, rect2) {
  const a = rect1;
  const b = rect2;
  a.x = a.left;
  b.x = b.left;
  a.y = a.top;
  b.y = b.top;
  a.x1 = a.left + a.width;
  b.x1 = b.left + b.width;
  a.y1 = a.top + a.height;
  b.y1 = b.top + b.height;

  return !( a.y > b.y1 || a.y1 < b.y || a.x1 < b.x || a.x > b.x1 );
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
export function isInsideCircle(circle, point) {
  const distance = Math.hypot(point.x - circle.center.x, point.y - circle.center.y);
  return distance < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
export function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    } 
  }
  return null;
}


/**
 * Returns the string representation of math interval, specified by two points and 
 * include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
export function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const string = (a < b) ? `${a}, ${b}` : `${b}, ${a}`;
  const pre = isStartIncluded ? '[' : '(';
  const post = isEndIncluded ? ']' : ')';
  return pre + string + post;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
export function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
export function reverseInteger(num) {
  return (num + '').split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
export function isCreditCardNumber(ccn) {
  const arr = [];
  ccn = ccn.toString();
  for(let i = 0; i < ccn.length; i++) {
    if (i % 2 === 1) {
      const m = parseInt(ccn[ccn.length - i - 1]) * 2;
      if (m > 9) {
        arr.push(m - 9);
      } else {
        arr.push(m);
      } 
    } else {
      const n = parseInt(ccn[ccn.length - i - 1]);
      arr.push(n);
    }
  }
  const summ = arr.reduce((a, b) => a + b);
  return (summ % 10 === 0);
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
export function getDigitalRoot(num) {
  num += '';
  num = num.split('');
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
  num = num.reduce(reducer, 0);
  while (num > 9) {
    num = num + '';
    num = num.split('');
    const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
    num = num.reduce(reducer, 0);
  }
  return num;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
export function isBracketsBalanced(str) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '<') {
      stack.push(str[i]);
    } else {
      const last = stack.pop();

      if (str[i] !== map[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
export function timespanToHumanString(startDate, endDate) {
  const span = endDate - startDate;
  if(span < 45001) {
    return 'a few seconds ago';
  } else if (span < 90001) {
    return 'a minute ago';
  } else if (span < 2700001 ) {
    return `${Math.round((span-1) / 60000)} minutes ago`;
  } else if (span < 5400001) {
    return 'an hour ago';
  } else if (span < 79200001) {
    return `${Math.round((span-1) / 3600000)} hours ago`;
  } else if (span < 129600001) {
    return 'a day ago';
  } else if (span < 2160000001) { //
    return `${Math.round((span-1) / 86400000)} days ago`;
  } else if (span < 3888000001) { //
    return 'a month ago';
  } else if (span < 29808000001) {
    return `${Math.round((span-1) / 2592000000)} months ago`;
  } else if (span < 47088000001) {
    return 'a year ago';
  } else if (span > 47088000000) {
    return `${Math.round((span-1) / 31536000000.42889)} years ago`;
  }
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
export function toNaryString(num, n) {
  let numb = '';
  while(num >= n) {
    numb = num % n + numb;
    num = Math.floor(num / n);
  }
  return num % n + numb;
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
export function getCommonDirectoryPath(pathes) {
  const A = pathes.concat().sort(); 
  const a1 = A[0];
  const a2 = A[A.length-1];
  const L = a1.length;
  let i = 0;
  while(i < L && a1.charAt(i) === a2.charAt(i)) i++;
  const commonPart = a1.substring(0, i);
  return commonPart.slice(0, commonPart.lastIndexOf('/') + 1);
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
export function getMatrixProduct(m1, m2) {
  let m1Rows = m1.length; 
  let m1Cols = m1[0].length;
  let m2Cols = m2[0].length;
  const m = new Array(m1Rows);
  for (let r = 0; r < m1Rows; ++r) {
    m[r] = new Array(m2Cols);
    for (let c = 0; c < m2Cols; ++c) {
      m[r][c] = 0;   
      for (let i = 0; i < m1Cols; ++i) {
        m[r][c] += m1[r][i] * m2[i][c];
      }
    }
  }
  return m;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
export function evaluateTicTacToePosition(position) {
  const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
    
  function checkWinner(player, board) {
    const sequence = [];
    for (const raw of board) {
      const a = 3 * board.indexOf(raw); 
      for (let cell = 0; cell < 3; cell++) {
        if (raw[cell] === player) {
          sequence.push(a + cell);
        }
      }
    }
    for (const winCondition of winConditions) {
      if (arrayContainsArray(sequence, winCondition)) {
        return true;
      }  
    }
    return false;
  }

  function arrayContainsArray (superset, subset) {
    if (0 === subset.length) {
      return false;
    }
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0);
    });
  }

  return (checkWinner('X', position)) ? 'X' : (checkWinner('0', position)) ? '0' : undefined; 
}
