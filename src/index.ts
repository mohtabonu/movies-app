import { movies_information } from './db';
import { mainContainer, registerContainer, regUsername, regPassword, regName, loginContainer, loginUsername, loginPassword } from './elements';

document.addEventListener('DOMContentLoaded', function () {

  function showContainers(targetContainer: HTMLDivElement) {
    const containers = [mainContainer, registerContainer, loginContainer];

    containers.forEach(container => {
      container.style.display = container === targetContainer ? 'block' : 'none';
    });
  }
  showContainers(mainContainer);
  document.querySelector('button[onclick="showSection(\'main-container\')"]')?.addEventListener('click', () => showContainers(mainContainer));
  document.querySelector('button[onclick="showSection(\'login-container\')"]')?.addEventListener('click', () => showContainers(loginContainer));
  document.querySelector('button[onclick="showSection(\'register-container\')"]')?.addEventListener('click', () => showContainers(registerContainer));

  const registerForm = document.querySelector('#register-container form')
  if(registerForm){
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
            console.log("Username:", regUsername.value);
            console.log("Password:", regPassword.value);
            console.log("Name:", regName.value);
    })
  }  
});
