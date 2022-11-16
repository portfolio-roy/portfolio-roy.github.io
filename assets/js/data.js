
const projectData = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby on rails', 'css', 'html'],
    featuredImage: '../assets/images/portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',

  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    featuredImage: '../assets/images/portfolio-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    featuredImage: '../assets/images/portfolio-3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    featuredImage: '../assets/images/portfolio-4.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    featuredImage: '../assets/images/portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    featuredImage: '../assets/images/portfolio-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },

];
// Project card population
function projectFunction() {
  let projectCard = '';
  // projectData.forEach(projectFunction);

  projectData.forEach((item, index) => {
    const projectTitle = item.title;
    const projectImage = item.featuredImage;
    const id = index;
    let tagBadge = ''; // list of tags as li element
    const projectTags = item.tags;
    //   populate tag list iterating over tags array
    for (let i = 0; i < projectTags.length; i += 1) {
      tagBadge += `<li class="category">${projectTags[i]}</li>`;
    }
    // populate cards inside project section
    projectCard += `<div class="card portfolio-item">
              <img
                src="${projectImage}"
                alt="${projectTitle}"
                class="thumbnail"
              />
              <div class="portfolio-text">
                <h3 class="card-title">${projectTitle}</h3>
                <ul class="categories">
                ${tagBadge}
                </ul>
                <button class="button btn-primary project-btn" id="project">
                  See Project
                </button>
              </div>
            </div>`;
  });
  document.getElementById('project-showcase').innerHTML = projectCard;
}
projectFunction();

// Modal Creation
