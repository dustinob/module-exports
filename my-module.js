module.exports = {
  firstName: "Dustin",
  lastName: "O'Brien",
  join: function() {
    return this.firstName + " " + this.lastName + " is " + addNickname();
  }
}

function addNickname() {
  return "D-man";

}