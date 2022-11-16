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

  projectData.forEach((item) => {
    const projectTitle = item.title;
    const projectImage = item.featuredImage;
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
const modalBtn = document.getElementsByClassName('project-btn');
const projectModal = document.getElementById('project-modal');
projectData.forEach((modal, index) => {
  const modalTitle = modal.title;
  const modalDescription = modal.description;
  const modalImage = modal.featuredImage;
  const modalLiveLink = modal.liveLink;
  const modalSourceLink = modal.sourceLink;
  const modalId = index;
  let modaltagBadge = '';
  const modalTags = modal.tags;
  for (let i = 0; i < modalTags.length; i += 1) {
    modaltagBadge += `<li class="category">${modalTags[i]}</li>`;
  }
  for (let i = 0; i < modalBtn.length; i += 1) {
    modalBtn[i].addEventListener('click', () => {
      if (i === modalId) {
        projectModal.style.display = 'block';
        const modalVisible = ` <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-card">
          <img
            src="${modalImage}"
            class="modal-image"
            alt="${modalTitle}"
          />
          <div class="modal-text">
            <div class="modal-header">
              <h3 class="modal-title">
              ${modalTitle}
              </h3>
              <div class="modal-buttons d-sm-none">
                <a href="${modalLiveLink}" class="button btn-primary"
                  target="_blank">See live <span class="icon-icon-go-link"></span
                ></a>
                <a href="${modalSourceLink}" class="button btn-primary"
                target="_blank">See Source <span class="icon-github"></span
                ></a>
              </div>
            </div>
            <ul class="modal-tags categories">
             ${modaltagBadge}
            </ul>
            <p class="modal-description">
             ${modalDescription}
            </p>
            <div class="modal-buttons modal-btn-sm d-md-none">
                <a href="${modalLiveLink}" class="button btn-primary"
                  target="_blank">See live <span class="icon-icon-go-link"></span
                ></a>
                <a href="${modalSourceLink}" class="button btn-primary"
                target="_blank">See Source <span class="icon-github"></span
                ></a>
              </div>
          </div>
        </div>
      </div>`;

        projectModal.innerHTML = modalVisible;

        // close the modal
        const closeModal = document.getElementsByClassName('close');
        for (let j = 0; j < closeModal.length; j += 1) {
          closeModal[j].addEventListener('click', () => {
            projectModal.style.display = 'none';
          });
          // close the modal when user clicks anywhere outside
          window.onclick = function clickedOutside(event) {
            if (event.target === projectModal) {
              projectModal.style.display = 'none';
            }
          };
        }
      }
    });
  }
});