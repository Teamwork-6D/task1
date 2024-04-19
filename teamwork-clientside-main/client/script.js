const project1 = {
  name: 'Team Work',
  columns: 3,
  users: 12,
  admin: 'Admin',
};

function generateProjects() {
  const existingProject = document.createElement('section');
  existingProject.className = 'existing-projects';

  const project = document.createElement('section');
  project.classList.add('projects');

  const projectTitle = document.createElement('section');
  projectTitle.className = 'project-title';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('viewBox', '0 -960 960 960');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'M80-360v-240q0-33 23.5-56.5T160-680q33 0 56.5 23.5T240-600v240q0 33-23.5 56.5T160-280q-33 0-56.5-23.5T80-360Zm280 160q-33 0-56.5-23.5T280-280v-400q0-33 23.5-56.5T360-760h240q33 0 56.5 23.5T680-680v400q0 33-23.5 56.5T600-200H360Zm360-160v-240q0-33 23.5-56.5T800-680q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280q-33 0-56.5-23.5T720-360Zm-360 80h240v-400H360v400Zm120-200Z'
  );

  svg.appendChild(path);

  projectTitle.appendChild(svg);

  const projectName = document.createElement('h4');
  projectName.className = 'project-name';

  const projectDetails = document.createElement('section');
  projectDetails.className = 'project-details';

  const noColumns = document.createElement('p');
  noColumns.className = 'no-columns';

  const noCards = document.createElement('p');
  noCards.className = 'no-cards';

  const userDetail = document.createElement('section');
  userDetail.className = 'users-details';

  const noUser = document.createElement('aside');
  noUser.className = 'no-users';

  const projectAdmin = document.createElement('aside');
  projectAdmin.className = 'project-admin';

  const projectSection = document.querySelector('.project-section');
  const projectList = document.querySelector('.project-list');
  projectName.textContent = project1.name;
  noColumns.textContent = project1.columns + ' columns';
  noCards.textContent = project1.users + ' users';
  noUser.textContent = project1.users + ' users';
  projectAdmin.textContent = `Admin: ${project1.admin}`;

  projectSection.appendChild(projectList);
  projectList.appendChild(existingProject);
  existingProject.appendChild(project);

  projectTitle.appendChild(projectName);
  project.appendChild(projectTitle);

  project.appendChild(projectDetails);
  projectDetails.appendChild(noColumns);
  projectDetails.appendChild(noCards);

  project.appendChild(userDetail);
  userDetail.appendChild(noUser);
  userDetail.appendChild(projectAdmin);
}

generateProjects();

const createProj = document.querySelector('.create-project');
const createSection = document.querySelector('.create-section');

function createProjectPopup() {
  const overlay = document.createElement('section');
  overlay.className = 'overlay';

  const projectCreatePopup = document.createElement('section');
  projectCreatePopup.className = 'card-body';
  projectCreatePopup.classList.add('popup');

  const projectCreateTitle = document.createElement('h3');
  projectCreateTitle.className = 'card-title';

  const projectNameInput = document.createElement('input');
  projectNameInput.className = 'input';

  projectNameInput.setAttribute('type', 'text');
  projectNameInput.setAttribute('placeholder', 'New Project');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '18');
  svg.setAttribute('viewBox', '0 -960 960 960');
  svg.setAttribute('width', '18');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'
  );

  svg.appendChild(path);
  const createBtn = document.createElement('button');
  createBtn.className = 'button';
  createBtn.textContent = 'Create';
  projectCreatePopup.appendChild(svg);
  projectCreatePopup.appendChild(projectCreateTitle);
  projectCreatePopup.appendChild(projectNameInput);
  projectCreatePopup.appendChild(createBtn);
  projectCreateTitle.textContent = 'Create Project';
  createSection.appendChild(projectCreatePopup);
  svg.classList.add('close-icon');

  const closeIcon = document.querySelector('.close-icon');

  closeIcon.addEventListener('click', () => {
    closePopup();
  });

  overlay.addEventListener('click', () => {
    closePopup();
  });

  document.body.appendChild(overlay);
  document.body.appendChild(createSection);
}

function closePopup() {
  const Popup = document.querySelector('.card-body');
  Popup.remove();

  const overlay = document.querySelector('.overlay');
  overlay.parentNode.removeChild(overlay);
}

// view profile popup
function viewProfilePopup() {
  const profileSection = document.querySelector('.profile-section');

  const overlay = document.createElement('section');
  overlay.className = 'profileOverlay';

  const profilePopup = document.createElement('section');
  profilePopup.className = 'profile-card';
  profilePopup.classList.add('card-body');

  profileSection.appendChild(profilePopup);

  //to close popup
  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    closePopupProfile();
  });

  overlay.addEventListener('click', () => {
    closePopupProfile();
  });
  document.body.appendChild(overlay);
}



function closePopupProfile() {
  const Popup = document.querySelector('.profile-card');
  Popup.remove();
  const overlay = document.querySelector('.profileOverlay');
  overlay.parentNode.removeChild(overlay);
}

function eventListeners() {
  createProj.addEventListener('click', createProjectPopup);
  const icon = document.querySelector('.icons');
  icon.addEventListener('click', viewProfilePopup);
}

eventListeners();





