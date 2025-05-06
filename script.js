// Button click to change color
document.getElementById("colorBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  });
  
  // Hover effect
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.background = "lightblue";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.background = "lightgray";
  });
  
  // Keypress detection
  document.getElementById("keyInput").addEventListener("keyup", (e) => {
    console.log(`You typed: ${e.key}`);
  });
  
  // Double-click action
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Secret action triggered!");
  });
  
  // Image Gallery
  const images = [
    "https://images.pexels.com/photos/3958816/pexels-photo-3958816.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3049493/pexels-photo-3049493.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/14261509/pexels-photo-14261509.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  let imgIndex = 0;
  document.getElementById("nextImgBtn").addEventListener("click", () => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[imgIndex];
  });
  
  // Tabs
  document.querySelectorAll(".tabBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabContent").forEach(tab => tab.style.display = "none");
      document.getElementById(btn.dataset.target).style.display = "block";
    });
  });
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("formMessage");
  
    if (!email.includes("@")) {
      message.textContent = "Invalid email format.";
      message.style.color = "red";
      return;
    }
  
    if (password.length < 8) {
      message.textContent = "Password must be at least 8 characters.";
      message.style.color = "red";
      return;
    }
  
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  });
  