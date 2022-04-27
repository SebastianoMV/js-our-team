const btnAdd = document.querySelector('#addMemberButton');

const ourTeam = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    immagine: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    immagine: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    immagine: 'img/walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    immagine: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    immagine: 'img/scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    immagine: 'img/barbara-ramos-graphic-designer.jpg',
  },
];


btnAdd.addEventListener('click', function(){
  const newMember = {
    nome: '',
    ruolo:'',
    immagine:''
  };
  newMember.nome = document.getElementById('name').value;
  newMember.ruolo = document.getElementById('role').value;
  newMember.immagine = document.getElementById('image').value;
  ourTeam.push(newMember);
  let i = ourTeam.length -1;
  genera(i);
});


function genera(i){
    const output = `
    <div class="team-card">
      <div class="card-image">
        <img src="${ourTeam[i].immagine}"
        alt="${ourTeam[i].nome}"/>
      </div>
      <div class="card-text">
       <h3>${ourTeam[i].nome}</h3>
       <p>${ourTeam[i].ruolo}</p>
      </div>
    </div>`
    document.querySelector('.team-container').innerHTML += output;
}

for(let i in ourTeam){
  genera(i);
}