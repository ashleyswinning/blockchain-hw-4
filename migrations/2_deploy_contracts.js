var Courses = artifacts.require("./Courses.sol");

module.exports = async function(deployer) {
    deployer.deploy(Courses);
};