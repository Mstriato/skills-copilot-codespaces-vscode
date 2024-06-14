function skillsMember() {
  // Get the element with id="skills"
  var skills = document.getElementById("skills");
  // If the element has the class name "hide", remove it, otherwise add it
  if (skills.className === "hide") {
    skills.className = "";
  } else {
    skills.className = "hide";
  }
}