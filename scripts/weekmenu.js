function change_myselect(sel) {
    const dbParam = JSON.stringify({table:sel,limit:20});
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      myObj = JSON.parse(this.responseText);
      text = "<table border='1'>"
      for (x in myObj) {
        text += "<tr><td>" + myObj[x].name + "</td></tr>";
      }
      text += "</table>"    
      document.getElementById("demo").innerHTML = text;
    }
    xmlhttp.open("POST", "wdd230/week-activity-links.json", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }