const ourTeam = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    img: 'img/wayne-barnett-founder-ceo.jpg',
  }
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