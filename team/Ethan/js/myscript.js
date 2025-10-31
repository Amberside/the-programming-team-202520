let students = [
  {
    "path": "ethan",
    "lastName": "Lew",
    "firstName": "Ethan"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const myDetails = {
    name: "Ethan Lew",
    githubUsername: "GeorgeChrisSmith",
    githubUrl: "https://github.com/GeorgeChrisSmith",
    skills: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Storytelling"],
    funFact: "Founder of the fictional band Smashing Rick 😆"
  };

  console.log("Student Details:", myDetails);

  const detailsContainer = document.getElementById("student-details");
  if (detailsContainer) {
    detailsContainer.innerHTML = `
      <h3>${myDetails.name}</h3>
      <p><strong>GitHub Username:</strong> ${myDetails.githubUsername}</p>
      <p><strong>GitHub:</strong> <a href="${myDetails.githubUrl}" target="_blank">${myDetails.githubUrl}</a></p>
      <p><strong>Skills:</strong> ${myDetails.skills.join(", ")}</p>
      <p><strong>Fun Fact:</strong> ${myDetails.funFact}</p>
    `;
  }
});