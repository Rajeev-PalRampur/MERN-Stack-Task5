const container = document.getElementById('form-container');

const formDiv = document.createElement('div');
formDiv.className = 'neumorphic-card';

const heading = document.createElement('h1');
heading.innerText = 'Login';

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.placeholder = 'Username';
usernameInput.className = 'neumorphic-input';

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.className = 'neumorphic-input';

const loginButton = document.createElement('button');
loginButton.className = 'neumorphic-button';
loginButton.innerText = 'Sign In';

// Function to create and download a .txt file
function saveToTxtFile(username, password) {
  const content = 'Username: ${username}\nPassword: ${password}';
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'login-data.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// Event listener
loginButton.addEventListener('click', () => {
  const user = usernameInput.value.trim();
  const pass = passwordInput.value.trim();

  if (!user || !pass) {
    alert('Please fill in both fields');
    return;
  }

  saveToTxtFile(user, pass); // Save login data to txt
});

// Append elements
formDiv.appendChild(heading);
formDiv.appendChild(usernameInput);
formDiv.appendChild(passwordInput);
formDiv.appendChild(loginButton);

container.appendChild(formDiv);