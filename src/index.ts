import { movies_information } from './db';
import {mainContainer, movBtnElm, movTitleElm, registerContainer, regUsername, regPassword, regName, loginContainer, loginUsername, loginPassword } from './elements';

document.addEventListener('DOMContentLoaded', function () {

  function showContainers(targetContainer: HTMLDivElement) {
    const containers = [mainContainer, registerContainer, loginContainer];

    containers.forEach(container => {
      container.style.display = container === targetContainer ? 'block' : 'none';
    });
    if (targetContainer === mainContainer || targetContainer === registerContainer || targetContainer === loginContainer) {
        movTitleElm.style.display = 'none';
      } else {
        movTitleElm.style.display = 'block';
      }
  }
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

  const loginForm = document.querySelector('#login-container form')
  if(loginForm){
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if(loginUsername.value === 'admin' && loginPassword.value === 'root123'){
            movBtnElm.style.display = 'block'
            showContainers(mainContainer);
        }else{
            alert("Error username or password!")
            loginUsername.value = '';
            loginPassword.value = '';
        }
    })
  }
});
