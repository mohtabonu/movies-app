import { movies_information } from './db';
import {
  mainContainer,
  movBtnElm,
  movTitleElm,
  registerContainer,
  regUsername,
  regPassword,
  regName,
  loginContainer,
  loginUsername,
  loginPassword,
  movWrap,
  categoryWrap,
  searchElm
} from './elements';

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

  function renderCategories() {
    categoryWrap.innerHTML = '';

    const categories: Set<string> = new Set();
    for (const key in movies_information) {
      if (movies_information.hasOwnProperty(key)) {
        categories.add(movies_information[key as keyof typeof movies_information].category);
      }
    }

    const allLi = document.createElement('li');
    allLi.className = 'px-3 py-2 hover:bg-gray-100 cursor-pointer font-bold';
    allLi.textContent = 'All Categories';
    allLi.addEventListener('click', () => renderMovies('all'));
    categoryWrap.appendChild(allLi);

    categories.forEach((category: string) => {
      const li: HTMLLIElement = document.createElement('li');
      li.className = 'px-3 py-2 hover:bg-gray-100 cursor-pointer';
      li.textContent = category;

      li.addEventListener('click', () => renderMovies(category));

      categoryWrap.appendChild(li);
    });
  }
  function renderMovies(selectedCategory = 'all', searchQuery = '') {
    movWrap.innerHTML = '';

    const table = document.createElement('table');
    table.className = 'min-w-full bg-white border border-gray-200 shadow-md';

    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr class="bg-gray-100">
          <th class="border-b text-left px-5 py-3">Title</th>
          <th class="border-b text-left px-5 py-3">Genre</th>
          <th class="border-b text-left px-5 py-3">Rate</th>
          <th class="border-b text-left px-5 py-3"></th>
          <th class="border-b text-left px-5 py-3"></th>
      </tr>
  `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    for (const key in movies_information) {
      if (movies_information.hasOwnProperty(key)) {
        const movie = movies_information[key as keyof typeof movies_information];

        if ((selectedCategory === 'all' || movie.category === selectedCategory) && movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())) {
          const tr = document.createElement('tr');
          tr.className = 'border-b hover:bg-gray-50';

          tr.innerHTML = `
                  <td class="text-blue-600 cursor-pointer px-5 py-3">${movie.movieTitle}</td>
                  <td class="px-5 py-3">${movie.category}</td>
                  <td class="px-5 py-3">${movie.rating}</td>
                  <td class="px-5 py-3">
                      <button>
                          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd">
                              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
                          </svg>
                      </button>         
                  </td>
                  <td class="px-5 py-3">
                      <button data-value=${key} class="bg-red-600 rounded-md text-white deleteBtn hover:bg-red-700 px-3 py-1">Delete</button>
                  </td>
              `;

          tbody.appendChild(tr);
        }
      }
    }

    table.appendChild(tbody);
    movWrap.appendChild(table);
  }

  movWrap.addEventListener('click', function (event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('deleteBtn')) {
      const objectKey = target.dataset.value!;
      deleteMovie(objectKey);
    }
  });

  function deleteMovie(objectKey: string) {

    for (const key in movies_information) {
      if (key === objectKey) {
        delete (movies_information as any)[key];
      }
      renderMovies();
      renderCategories();
    }
  }
  searchElm.addEventListener('input', () => renderMovies(undefined, searchElm.value));

  const registerForm = document.querySelector('#register-container form');
  if (registerForm) {
    registerForm.addEventListener('submit', event => {
      event.preventDefault();
      console.log('Username:', regUsername.value);
      console.log('Password:', regPassword.value);
      console.log('Name:', regName.value);
      regUsername.value = '';
      regPassword.value = '';
      regName.value = '';
    });
  }

  const loginForm = document.querySelector('#login-container form');
  if (loginForm) {
    loginForm.addEventListener('submit', event => {
      event.preventDefault();
      if (loginUsername.value === 'admin' && loginPassword.value === 'root') {
        movBtnElm.style.display = 'block';
        showContainers(mainContainer);
        renderCategories();
        renderMovies();
        loginPassword.value = '';
        loginUsername.value = '';
      } else {
        alert('Error username or password!');
        loginUsername.value = '';
        loginPassword.value = '';
      }
    });
  }
});
