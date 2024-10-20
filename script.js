// Log In Behaviors
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);
loginBtn.addEventListener('click', login);

// Log In Functions
function checkInputs() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue !== '' && passwordValue !== '') {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}

async function login() {
  console.log('Login button clicked!');

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    // Simulate a successful login response
    const response = {
      success: true,
      message: 'Login successful!',
    };

    console.log('Login successful:', response);
    // Redirect to another page or perform other actions
    window.location.href = 'library.html'; // Example redirect
  } catch (error) {
    console.error('There was a problem with the login:', error);
    alert('An error occurred. Please try again later.'); // Show a generic error message
  }
}

// General Animation Entry Behaviors
// Get all elements in the HTML file
const elements = document.querySelectorAll('*');

// Add the animation class to each element with a delay
elements.forEach((element, index) => {
  element.classList.add('animate-in');
});

// Drop down logic
document.querySelectorAll('.drop-down > a').forEach(item => {
  item.addEventListener('click', function(event) {
      const dropdown = this.nextElementSibling;
      // Toggle the display of the dropdown
      if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
      } else {
          dropdown.style.display = "block";
      }
      event.preventDefault(); // Prevent default link behavior
  });
});

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('.drop-down > a')) {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(drop => {
          drop.style.display = 'none'; // Hide all dropdowns
      });
  }
});