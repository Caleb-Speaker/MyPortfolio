// portfolio-features.js

// 1. Simulate form validation for the Contact Me form
function validateContactForm(name, email, message) {
    if (!name || !email || !message) {
      return "All fields are required.";
    }
    if (!email.includes("@")) {
      return "Please enter a valid email address.";
    }
    return "Form is valid!";
  }
  
  // 2. Simulate user feedback collection
  let feedbackMessages = [];
  
  function submitFeedback(name, feedback) {
    let entry = `${name} says: "${feedback}"`;
    feedbackMessages.push(entry);
    return `Thank you for your feedback, ${name}!`;
  }
  
  // 3. Simulate a theme toggle (dark mode / light mode)
  let currentTheme = "dark";
  
  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    return `Theme switched to ${currentTheme} mode.`;
  }
  
  // 4. Simulate filtering projects by keyword
  const projects = [
    "To-Do List Application",
    "Turn-Based Battle Game",
    "E-commerce REST API",
    "Concert Event Center Website"
  ];
  
  function filterProjects(keyword) {
    return projects.filter(project =>
      project.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  
  // 5. Simulate adding a new skill to a skill list
  let skills = ["HTML", "CSS", "JavaScript", "Python", "Bootstrap"];
  
  function addSkill(newSkill) {
    if (!skills.includes(newSkill)) {
      skills.push(newSkill);
      return `${newSkill} added to your skills list.`;
    } else {
      return `${newSkill} is already in your skills list.`;
    }
  }  