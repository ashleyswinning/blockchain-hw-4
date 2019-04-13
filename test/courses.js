var Courses = artifacts.require("./Courses.sol");

contract('Courses', function(accounts) {

  // setInstructors()
  it("Testing setInstructor() function...", function(done) {
    Courses.deployed().then(function(contract) {
      contract.setInstructor(accounts[4], 32, "Ashley", "Huynh");
      return contract.instructors.call(accounts[4]);
    }).then(function(result){
      assert.isTrue(result[0].toNumber() === 32);
      assert.isTrue(result[1] === "Ashley");
      assert.isTrue(result[2] === "Huynh");
      done();
    })
  });

  // getInstructors()
  it("Testing getInstructors() function...", function(done) {
    Courses.new().then(function(contract) {
      contract.setInstructor(accounts[0], 32, "Ashley", "Huynh");
      contract.setInstructor(accounts[1], 42, "Ron", "Swanson");
      return contract.getInstructors.call();
    }).then(function(result){
      var accountsArray = [accounts[0], accounts[1]];
      assert((result.length == accountsArray.length) && result.every(function(element, index) {
        return element === accountsArray[index]; 
      }))
      done();
    })
  });

  // getInstructor() -- faulty (figure out parameters and how to pass)
  it("Testing getInstructor() function...", function(done) {
    Courses.new().then(function(contract) {
      contract.setInstructor(accounts[0], 33, "Ashley", "Huynh");
      return contract.getInstructor.call(accounts[0]);
    }).then(function(result){
      assert(result[0].toNumber() === 33);
      assert(result[1] === "Ashley");
      assert(result[2] === "Huynh");
      done();
    })
  });

  // countInstructors()
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
