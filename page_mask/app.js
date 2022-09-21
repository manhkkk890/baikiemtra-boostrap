function add() {
  var key = document.getElementById("x").value;
  for (let i = 1; i < key; i++) {
    for (let j = 1; j < i; j++) {
      document.write("*");
    }
    document.write(" <br />");
  }
}
