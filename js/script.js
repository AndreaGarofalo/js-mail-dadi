console.log("JS OK");

// ESERCIZIO 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato
// -----------------------------------------------------------------
// ESERCIZIO 2 - Finta Login
// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const target = document.getElementById("target");
const target2 = document.getElementById("target2");
const emailField = document.getElementById("mail");
const button = document.getElementById("button");

const min = 1;
const max = 6;
const autorizedMail = [
  "giangino.birichino@live.it",
  "sferdinaldi.ubermansch@google.com",
  "giangialdi.ugonotti@hotmail.com",
];

const randomNumberUser = Math.floor(Math.random() * (max + 1 - min) + min);
const randomNumberCPU = Math.floor(Math.random() * (max + 1 - min) + min);

let message = " ";

if (randomNumberUser > randomNumberCPU) {
  message = "hai vinto";
} else if (randomNumberUser === randomNumberCPU) {
  message = "pareggio";
} else {
  message = "hai perso";
}

target.innerText = `Tiri un dado ed esce ${randomNumberUser}. Il pc lancia un dado ed esce ${randomNumberCPU}. ${message}`;

let isAllowed;

button.addEventListener("click", function () {
  const userMail = emailField.value.trim();
  if (!userMail) {
    target2.innerText = "inserisci una mail valida";
    return;
  }
  for (let i = 0; i < autorizedMail.length; i++) {
    const currentMail = autorizedMail[i];

    if (currentMail === userMail) {
      isAllowed = true;
    }
    console.log(isAllowed);
  }
  if (isAllowed) {
    target2.innerText = "Benvenuto";
  } else {
    target2.innerText = "La tua mail non è autorizzata";
  }
});
