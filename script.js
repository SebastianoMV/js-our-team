const ourTeam = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    img: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    img: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    img: 'img/walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    img: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    img: 'img/scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    img: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

for(let i in ourTeam){
  const output = `
  <div class="team-card">
    <div class="card-image">
      <img src="${ourTeam[i].img}"
      alt="Wayne Barnett"/>
    </div>
    <div class="card-text">
     <h3>${ourTeam[i].nome}</h3>
     <p>${ourTeam[i].ruolo}</p>
    </div>
  </div>`
  document.querySelector('.team-container').innerHTML += output;
}