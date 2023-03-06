var projects = [
  {
    title: 'Project 1',
    url: 'https://www.example.com/project1',
  },
  {
    title: 'Project 2',
    url: 'https://www.example.com/project2',
  },
  {
    title: 'Project 3',
    url: 'https://www.example.com/project3',
  },
];

var projectList = document.getElementById('project-list');

for (var i = 0; i < projects.length; i++) {
  var link = document.createElement('a');
  link.href = projects[i].url;
  link.textContent = projects[i].title;
  link.target = '_blank';
  link.className = 'project-link';
  projectList.appendChild(link);
}
