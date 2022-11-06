function createGame(player1, hour, player2) {
  return `
   <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
   </li>
`
}

function createCard(date, day, games) {
  return `
      <div class="card">
        <h2>${date} <span> ${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
`
}

document.querySelector("#cards").innerHTML = 
         createCard(
        "24/11",
        "quinta",

        createGame("suiça", "7:00", "cameroon") +
          createGame("portugal", "13:00", "gana") +
          createGame("brasil", "16:00", "serbia")
      ) +
       createCard(
         "28/11",
         "segunda",

         createGame("cameroon", "7:00", "serbia") +
           createGame("brasil", "13:00", "suiça") +
           createGame("portugal", "16:00", "uruguay")
       ) +
        createCard(
         "2/12",
         "sexta",

         createGame("gana", "12:00", "uruguay") +
           createGame("serbia", "16:00", "suiça") +
           createGame("cameroon", "16:00", "brasil") 
        
       )
