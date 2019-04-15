# blockchain-hw-4
Ashley Huynh
CSC 4980 Assignment #4

# How to Run Programs:

## Prerequisites:
* ###### Make sure you are in the `blockchain-hw-4` directory.

* ###### Make sure you have Truffle version 0.5.0

* ###### Make sure you have `testrpc`. If you don't, run `npm install -g ethereumjs-testrpc`.

## Instructions:
* Run `truffle compile`

* Run `truffle migrate --reset`

* Now, to run the tests, open a new tab (make sure it's in the `blockchain-hw-4` directory still) and run `testrpc`.

* In current tab, still in `blockchain-hw-4` directory, run `truffle test test/hello_eth_salon.js` -- this should run all tests (and they should be passing!)

## About the Tests...

* Test 1: setInstructors(address _address, uint _age, string memory _fName, string memory _lName)
  ```/*
  * This test makes sure that the setInstructors() method actually
  * sets instructors in the desired instructors array that setInstructors
  * is supposed to populate. To do this, it calls a new instance of the Courses contract and then
  *  the setInstructors() function and then asserts if the expected components of the element in setInstructor
  * (the instructor's age, first, and last name) are correct to the true components.
  */```

* Test 2: getInstructors()
  ```/*
  * This test tests getting instructors by calling a new instance of the Courses
  * contract and then setting two different instructors -- if this and the setInstructors() test don't pass, we have reason
  * to believe it's setInstructor that failed. It'll then call getInstructors() and then assert that the elements
  * returned from getInstructors are equal to the array given (an array of addresses from the desired accounts)
  */```

* Test 3: getInstructor(address _address)
  ```/*
  * This test calls a new instance of the Courses contract and then sets an instructor.
  * After setting the instructor, it checks to make sure that the instructor's age,
  * first, and last name returned by the getInstructor() function matches expected values for each instructor.
  */```

* Test 4: countInstructors()
 ```/*
  * This test calls a new instance of the Courses contract and then sets three instructors.
  * Then, it calls the countInstructors() function and asserts that the result is equal to the expected
  * value (in this case, three).
  */```

