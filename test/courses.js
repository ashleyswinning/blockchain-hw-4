var Courses = artifacts.require("./Courses.sol");

contract('Courses', function(accounts) {

  /*
  * This test makes sure that the setInstructors() method actually
  * sets instructors in the desired instructors array that setInstructors
  * is supposed to populate. To do this, it calls a new instance of the Courses contract and then
  *  the setInstructors() function and then asserts if the expected components of the element in setInstructor
  * (the instructor's age, first, and last name) are correct to the true components.
  */
  // setInstructors() test
  it("Testing setInstructor() function...", function(done) {
    Courses.deployed().then(function(contract) {
      // set parameters using accounts[0] address, 32 as age, and Ashley Huynh as first and last name
      contract.setInstructor(accounts[0], 32, "Ashley", "Huynh");
      // check instructors array for address of accounts[0] and return its values
      return contract.instructors.call(accounts[0]);
    }).then(function(result){
      //check that age was assigned correctly
      assert.isTrue(result[0].toNumber() === 32);
      //check that first name was assigned correctly
      assert.isTrue(result[1] === "Ashley");
      //check that last name was assigned correctly
      assert.isTrue(result[2] === "Huynh");
      done();
    })
  });

  /*
  * This test tests getting instructors by calling a new instance of the Courses
  * contract and then setting two different instructors -- if this and the setInstructors() test don't pass, we have reason
  * to believe it's setInstructor that failed. It'll then call getInstructors() and then assert that the elements
  * returned from getInstructors are equal to the array given (an array of addresses from the desired accounts)
  */
  // getInstructors() test
  it("Testing getInstructors() function...", function(done) {
    Courses.new().then(function(contract) {
      // set parameters using accounts[0] address, 32 as age, and Ashley Huynh as first and last name
      contract.setInstructor(accounts[0], 32, "Ashley", "Huynh");
      // set parameters using accounts[1] address, 42 as age, and Ron Swanson as first and last name
      contract.setInstructor(accounts[1], 42, "Ron", "Swanson");
      return contract.getInstructors.call();
    }).then(function(result){
      var accountsArray = [accounts[0], accounts[1]];
      //check that it returns the right array length as the original array
      //also check that every element matches elements in the other array
      assert((result.length == accountsArray.length) && result.every(function(element, index) {
        return element === accountsArray[index]; 
      }))
      done();
    })
  });


  /*
  * This test calls a new instance of the Courses contract and then sets an instructor.
  * After setting the instructor, it checks to make sure that the instructor's age,
  * first, and last name returned by the getInstructor() function matches expected values for each instructor.
  */
  // getInstructor() test
  it("Testing getInstructor() function...", function(done) {
    Courses.new().then(function(contract) {
      // set instructor so that the instructor array contains an instance where 
      // accounts[0] address, 33 as age, and Ashley Huynh as first and last name
      contract.setInstructor(accounts[0], 33, "Ashley", "Huynh");
      // call parameter of address of accounts[0]
      return contract.getInstructor.call(accounts[0]);
    }).then(function(result){
      //check that correct age is returned
      assert(result[0].toNumber() === 33);
      //check that correct first name is returned
      assert(result[1] === "Ashley");
      //check that correct last name is returned
      assert(result[2] === "Huynh");
      done();
    })
  });

  /*
  * This test calls a new instance of the Courses contract and then sets three instructors.
  * Then, it calls the countInstructors() function and asserts that the result is equal to the expected
  * value (in this case, three).
  */
  // countInstructors() test
  it("Testing countInstructors() function...", function(done) {
    Courses.new().then(function(contract) {
      contract.setInstructor(accounts[0], 44, "Ron", "Swanson");
      contract.setInstructor(accounts[1], 332, "Leslie", "Knope");
      contract.setInstructor(accounts[2], 32, "Ashley", "Huynh");
      return contract.countInstructors.call();
    }).then(function(result){
      assert(result.toNumber() === 3);
      done();
    })
  });
});
