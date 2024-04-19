function createDashborad() {
  const projName = document.querySelector('.proj-name');

  const projTitle = document.createElement('p');

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

  projName.appendChild(svg);
  projName.appendChild(projTitle);
  projTitle.textContent = 'Teamwork';

  //assigned to me
    const assigned = document.querySelector('.assigned-to-me');
    const assignedTitle = document.createElement('p');
    assignedTitle.textContent = 'Assigned to me';
    assigned.appendChild(assignedTitle);

  //meeting

const meeting = document.querySelector('.meeting');

const meetingTitle = document.createElement('p');
meetingTitle.textContent = 'Meeting';
const svgElement = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'svg'
);
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgElement.setAttribute('height', '24');
svgElement.setAttribute('width', '24');
svgElement.setAttribute('viewBox', '0 -960 960 960');

const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
svgPath.setAttribute(
  'd',
  'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z'
);

svgElement.appendChild(svgPath);
meeting.appendChild(svgElement);
meeting.appendChild(meetingTitle);

//activity
const activity = document.querySelector('.activity');

const activityTitle = document.createElement('p');
activityTitle.textContent = 'activity';
const activitySvg = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'svg'
);
activitySvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
activitySvg.setAttribute('height', '24');
activitySvg.setAttribute('width', '24');
activitySvg.setAttribute('viewBox', '0 -960 960 960');

const activityPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
activityPath.setAttribute(
  'd',
  'M120-240q-33 0-56.5-23.5T40-320q0-33 23.5-56.5T120-400h10.5q4.5 0 9.5 2l182-182q-2-5-2-9.5V-600q0-33 23.5-56.5T400-680q33 0 56.5 23.5T480-600q0 2-2 20l102 102q5-2 9.5-2h21q4.5 0 9.5 2l142-142q-2-5-2-9.5V-640q0-33 23.5-56.5T840-720q33 0 56.5 23.5T920-640q0 33-23.5 56.5T840-560h-10.5q-4.5 0-9.5-2L678-420q2 5 2 9.5v10.5q0 33-23.5 56.5T600-320q-33 0-56.5-23.5T520-400v-10.5q0-4.5 2-9.5L420-522q-5 2-9.5 2H400q-2 0-20-2L198-340q2 5 2 9.5v10.5q0 33-23.5 56.5T120-240Z'
);

activitySvg.appendChild(activityPath);
activity.appendChild(activitySvg);

activity.appendChild(activityTitle);

//files

const files = document.querySelector('.files');

const filesTitle = document.createElement('p');
filesTitle.textContent = 'files';

const filesSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
filesSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
filesSvg.setAttribute('height', '24');
filesSvg.setAttribute('width', '24');
filesSvg.setAttribute('viewBox', '0 -960 960 960');

const filesPath = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'path'
);
filesPath.setAttribute(
  'd',
  'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z'
);

filesSvg.appendChild(filesPath);
files.appendChild(filesSvg);

files.appendChild(filesTitle);


}

createDashborad();
