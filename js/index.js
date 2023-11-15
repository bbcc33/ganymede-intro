const button = document.querySelector("#btn-phrase");

button.addEventListener("click", () => {
    alert("Welcome to my page!");
    headline.style.border = "solid 2px white";
    headline.style.border = "60px";
});
    // testing also adding fun little pops when button clicks
    // alternatives:
        // function alertFunction() {
            //alert("alert!");
       // }
       // btn.addEventListener("click", alertFunction)


const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("#footer");
const copyright = document.createElement("p");
copyright.innerHTML = "Bianca " + thisYear;

footer.appendChild(copyright);

const skills = ["video editing", "videogrpahy"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    skill = document.createElement("li");
    skill.innerText = skills[i];
    skill.appendChild(skillsList);
};





