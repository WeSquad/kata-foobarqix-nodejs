[![Build Status](https://travis-ci.org/WeSquad/kata-foobarqix-nodejs.svg?branch=jgrande-implementation)](https://travis-ci.org/WeSquad/kata-foobarqix-nodejs)  

---

# [STATEMENT](http://codingdojo.org/kata/FooBarQix)
You should implement a function String compute(String) which implements the following rules.

## Step 1
### Rules

* If the number is divisible by 3, write "Foo" instead of the number
* If the number is divisible by 5, add "Bar"
* If the number is divisible by 7, add "Qix"
* For each digit 3, 5, 7, add "Foo", "Bar", "Qix" in the digits order.
 
### Examples

    1  => 1
    2  => 2
    3  => FooFoo (divisible by 3, contains 3)
    4  => 4
    5  => BarBar (divisible by 5, contains 5)
    6  => Foo (divisible by 3)
    7  => QixQix (divisible by 7, contains 7)
    8  => 8
    9  => Foo
    10 => Bar
    13 => Foo
    15 => FooBarBar (divisible by 3, divisible by 5, contains 5)
    21 => FooQix
    33 => FooFooFoo (divisible by 3, contains two 3)
    51 => FooBar
    53 => BarFoo

## Step 2

We have a new business request: we must keep a trace of 0 in numbers, each 0 must be replaced by char "*".

### Examples
    
    101   => 1*1
    303   => FooFoo*Foo
    105   => FooBarQix*Bar
    10101 => FooQix**


# IMPLEMENTATION

## Understanding
Implement the following function

```javascript
function compute(n: String) => String
```

The function will take a number as a string in param and it should return either the number as string or a computed string if it match one or several rules.

## Technical stack
In order to complete this kata, I choose the following stack:
- language: `nodejs`
- unit test framework: `jest`

I choose this stack because it is easy and fast to implement.

## Conception

Basically, the program will contains 2 files:
- index.js : it will contains the `compute` function
- index.spec.js : it will contains all unit test for the kata

# RUN

**Install dependencies**
```shell
yarn install
```

**Run the tests**
```shell
yarn test
```

**Launch the program**
```shell
yarn start
```