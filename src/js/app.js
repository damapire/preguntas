const questions = [
  { question: "¿Qué animal es conocido como el más rápido en tierra?", options: ["León", "Leopardo", "Guepardo", "Caballo"], correct: "Guepardo" },
  { question: "¿Cuál es el país más pequeño del mundo?", options: ["Mónaco", "Liechtenstein", "San Marino", "Ciudad del Vaticano"], correct: "Ciudad del Vaticano" },
  { question: "¿Qué gas forma la mayor parte de la atmósfera terrestre?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correct: "Nitrógeno" },
  { question: "¿Cuál es el continente más frío?", options: ["Antártida", "Ártico", "Europa", "América"], correct: "Antártida" },
  { question: "¿Qué tipo de energía utiliza un panel solar?", options: ["Térmica", "Cinetética", "Solar", "Eólica"], correct: "Solar" },
  { question: "¿Quién descubrió América?", options: ["Cristóbal Colón", "Marco Polo", "Américo Vespucio", "Fernando de Magallanes"], correct: "Cristóbal Colón" },
  { question: "¿Qué órgano bombea sangre en el cuerpo humano?", options: ["Pulmones", "Hígado", "Corazón", "Riñones"], correct: "Corazón" },
  { question: "¿Cuál es la capital de Italia?", options: ["Venecia", "Florencia", "Roma", "Milán"], correct: "Roma" },
  { question: "¿Qué planeta es conocido como el gigante gaseoso?", options: ["Neptuno", "Júpiter", "Urano", "Saturno"], correct: "Júpiter" },
  { question: "¿En qué país se encuentra la Torre Eiffel?", options: ["España", "Italia", "Francia", "Alemania"], correct: "Francia" },
  { question: "¿Qué parte del cuerpo humano está formada por 206 huesos?", options: ["Esqueleto", "Cráneo", "Torso", "Manos"], correct: "Esqueleto" },
  { question: "¿Qué animal es famoso por su lento movimiento?", options: ["Perezoso", "Tortuga", "Caracol", "Koala"], correct: "Perezoso" },
  { question: "¿Qué colores tiene la bandera de México?", options: ["Rojo, blanco y azul", "Verde, blanco y rojo", "Rojo y amarillo", "Azul y blanco"], correct: "Verde, blanco y rojo" },
  { question: "¿Qué músculo es el más fuerte en proporción a su tamaño en el cuerpo humano?", options: ["Cuádriceps", "Lengua", "Bíceps", "Corazón"], correct: "Lengua" },
  { question: "¿Qué planeta es conocido por tener un día más largo que su año?", options: ["Mercurio", "Venus", "Marte", "Plutón"], correct: "Venus" },
  { question: "¿Qué artista pintó 'La noche estrellada'?", options: ["Claude Monet", "Vincent van Gogh", "Salvador Dalí", "Pablo Picasso"], correct: "Vincent van Gogh" },
  { question: "¿En qué país se encuentra la Gran Muralla?", options: ["Japón", "China", "Corea del Sur", "Vietnam"], correct: "China" },
  { question: "¿Qué se celebra el 25 de diciembre?", options: ["Halloween", "Navidad", "Día de Acción de Gracias", "Año Nuevo"], correct: "Navidad" },
  { question: "¿Cuál es el país conocido como la tierra de los faraones?", options: ["Grecia", "Egipto", "Irak", "India"], correct: "Egipto" },
  { question: "¿Qué montaña es la más alta del mundo?", options: ["Monte Everest", "Monte K2", "Mont Blanc", "Monte Kilimanjaro"], correct: "Monte Everest" },
  { question: "¿Cuál es el sistema que transporta oxígeno por el cuerpo humano?", options: ["Digestivo", "Nervioso", "Respiratorio", "Circulatorio"], correct: "Circulatorio" },
  { question: "¿Cuál es el tercer continente más grande?", options: ["África", "Asia", "América", "Europa"], correct: "América" },
  { question: "¿Qué instrumento musical tiene teclas blancas y negras?", options: ["Guitarra", "Violín", "Piano", "Flauta"], correct: "Piano" },
  { question: "¿Cuál es el símbolo químico del oro?", options: ["Ag", "Au", "O", "Hg"], correct: "Au" },
  { question: "¿Qué país es conocido por el tango?", options: ["España", "Brasil", "Argentina", "Chile"], correct: "Argentina" },
  { question: "¿Cuál es el fruto del roble?", options: ["Nuez", "Bellota", "Avellana", "Castaña"], correct: "Bellota" },
  { question: "¿Qué héroe griego venció al Minotauro?", options: ["Ulises", "Aquiles", "Teseo", "Hércules"], correct: "Teseo" },
  { question: "¿Qué es un animal herbívoro?", options: ["Que come carne", "Que come plantas", "Que come insectos", "Que come todo"], correct: "Que come plantas" },
  { question: "¿Cuál es el país con más población del mundo?", options: ["India", "China", "Estados Unidos", "Indonesia"], correct: "China" },
    {
      question: "¿Cuál es el océano más grande del mundo?",
      options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
      correct: "Pacífico"
    },
    {
      question: "¿Qué famoso científico formuló la teoría de la relatividad?",
      options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
      correct: "Albert Einstein"
    },
    {
      question: "¿En qué año el hombre llegó a la Luna?",
      options: ["1965", "1969", "1972", "1958"],
      correct: "1969"
    },
    {
      question: "¿Cuál es el metal más caro del mundo?",
      options: ["Oro", "Platino", "Rodio", "Paladio"],
      correct: "Rodio"
    },
    {
      question: "¿Qué famoso pintor cortó su propia oreja?",
      options: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"],
      correct: "Vincent van Gogh"
    },
    {
      question: "¿Cuál es el hueso más pequeño del cuerpo humano?",
      options: ["Estribo", "Martillo", "Yunque", "Fémur"],
      correct: "Estribo"
    },
    {
      question: "¿Qué país tiene forma de bota?",
      options: ["España", "Francia", "Italia", "Portugal"],
      correct: "Italia"
    },
    {
      question: "¿Cuál es el animal nacional de Australia?",
      options: ["Canguro", "Koala", "Emú", "Ornitorrinco"],
      correct: "Canguro"
    },
    {
      question: "¿Qué famoso detective literario vivía en Baker Street?",
      options: ["Hércules Poirot", "Sherlock Holmes", "Philip Marlowe", "Nancy Drew"],
      correct: "Sherlock Holmes"
    },
    {
      question: "¿Cuál es el río más caudaloso del mundo?",
      options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
      correct: "Amazonas"
    },
    {
      question: "¿Qué elemento químico tiene el símbolo 'Hg'?",
      options: ["Oro", "Plata", "Mercurio", "Hidrógeno"],
      correct: "Mercurio"
    },
    {
      question: "¿En qué continente se encuentra el desierto del Sahara?",
      options: ["Asia", "África", "América", "Australia"],
      correct: "África"
    },
    {
      question: "¿Qué famoso compositor era sordo?",
      options: ["Mozart", "Bach", "Beethoven", "Chopin"],
      correct: "Beethoven"
    },
    {
      question: "¿Cuál es el país con más husos horarios?",
      options: ["Rusia", "Estados Unidos", "China", "Francia"],
      correct: "Francia"
    },
    {
      question: "¿Qué planeta tiene más lunas?",
      options: ["Júpiter", "Saturno", "Urano", "Neptuno"],
      correct: "Saturno"
    },
    {
      question: "¿Cuál es el idioma más hablado del mundo?",
      options: ["Inglés", "Español", "Mandarín", "Hindi"],
      correct: "Mandarín"
    },
    {
      question: "¿Qué famoso líder indio promovió la no violencia?",
      options: ["Nehru", "Gandhi", "Tagore", "Bose"],
      correct: "Gandhi"
    },
    {
      question: "¿Cuál es la capital de Canadá?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correct: "Ottawa"
    },
    {
      question: "¿Qué famoso científico descubrió la gravedad?",
      options: ["Galileo", "Einstein", "Newton", "Tesla"],
      correct: "Newton"
    },
    {
      question: "¿Cuál es el metal líquido a temperatura ambiente?",
      options: ["Plomo", "Mercurio", "Sodio", "Bromo"],
      correct: "Mercurio"
    },
    {
      question: "¿Qué famoso monumento indio es un mausoleo de mármol blanco?",
      options: ["Taj Mahal", "Templo Dorado", "Qutub Minar", "Hawa Mahal"],
      correct: "Taj Mahal"
    },
    {
      question: "¿Cuál es el país más grande del mundo?",
      options: ["China", "Estados Unidos", "Canadá", "Rusia"],
      correct: "Rusia"
    },
    {
      question: "¿Qué famoso artista pintó la Capilla Sixtina?",
      options: ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Donatello"],
      correct: "Miguel Ángel"
    },
    {
      question: "¿Cuál es el animal más grande del mundo?",
      options: ["Elefante africano", "Ballena azul", "Tiburón ballena", "Jirafa"],
      correct: "Ballena azul"
    },
    {
      question: "¿Qué famoso filósofo escribió 'El Príncipe'?",
      options: ["Platón", "Aristóteles", "Maquiavelo", "Descartes"],
      correct: "Maquiavelo"
    },
    {
      question: "¿Cuál es la capital de Egipto?",
      options: ["Alejandría", "El Cairo", "Luxor", "Giza"],
      correct: "El Cairo"
    },
    {
      question: "¿Qué famoso científico propuso la teoría heliocéntrica?",
      options: ["Ptolomeo", "Copérnico", "Galileo", "Kepler"],
      correct: "Copérnico"
    },
    {
      question: "¿Cuál es el lago más profundo del mundo?",
      options: ["Lago Titicaca", "Lago Baikal", "Lago Victoria", "Mar Caspio"],
      correct: "Lago Baikal"
    },
    {
      question: "¿Qué famoso escritor creó a Harry Potter?",
      options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
      correct: "J.K. Rowling"
    },
    {
      question: "¿Cuál es la montaña más alta de América?",
      options: ["Monte Everest", "Aconcagua", "Denali", "Monte Blanco"],
      correct: "Aconcagua"
    }

];

let availableQuestions = [...questions]; // Copia del array original
let selectedAnswer = null;

// Función para mezclar arrays (Fisher-Yates algorithm)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function showNextQuestion() {
  // Verificar si hay preguntas disponibles
  if (availableQuestions.length === 0) {
    showEndGameMessage();
    return;
  }

  // Seleccionar pregunta aleatoria
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const currentQuestion = availableQuestions[randomIndex];
  
  // Eliminar la pregunta seleccionada del array
  availableQuestions.splice(randomIndex, 1);

  const questionContainer = document.getElementById("question-container");
  selectedAnswer = null;

  // Mezclar las opciones de respuesta para que aparezcan en orden aleatorio
  const shuffledOptions = shuffleArray([...currentQuestion.options]);
  const optionsHTML = shuffledOptions.map(option => `
    <div class="contenedor-respuesta" data-value="${option}">
      <p>${option}</p>
    </div>
  `).join('');

  // Insertar el HTML en el contenedor
  questionContainer.innerHTML = `
    <div class="contador-preguntas">
      <p>Preguntas restantes: ${availableQuestions.length + 1}</p>
    </div>
    <img src="./src/img/Logo_WWTBAM_Spain.png" alt="logo" id="game-logo">
    <div class="contenedor-preguntas">
      <div class="contenedor-pregunta">
        <p>${currentQuestion.question}</p>
      </div>
      <div class="contenedor-respuestas">
        ${optionsHTML}
      </div>
    </div>
  `;

  // Configurar eventos
  document.getElementById('game-logo').addEventListener('click', showNextQuestion);
  setupAnswerSelection(currentQuestion);
}

function setupAnswerSelection(currentQuestion) {
  const answers = document.querySelectorAll('.contenedor-respuesta');

  answers.forEach(answer => {
    answer.addEventListener('click', () => {
      // Limpiar selecciones anteriores
      answers.forEach(a => {
        a.classList.remove('selected', 'correct', 'incorrect');
      });
      
      // Marcar respuesta seleccionada
      answer.classList.add('selected');
      selectedAnswer = answer.dataset.value;
      
      // Marcar respuesta correcta en verde
      answers.forEach(a => {
        if (a.dataset.value === currentQuestion.correct) {
          a.classList.add('correct');
        }
      });
      
      // Marcar respuesta incorrecta en rojo (si aplica)
      if (answer.dataset.value !== currentQuestion.correct) {
        answer.classList.add('incorrect');
      }
    });
  });
}

function showEndGameMessage() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <div class="fin-del-juego">
      <img src="./src/img/Logo_WWTBAM_Spain.png" alt="logo">
      <h2>¡JUEGO TERMINADO!</h2>
      <p>Has respondido todas las preguntas disponibles</p>
      <button id="replay-btn">Volver a Jugar</button>
    </div>
  `;

  // Agregar evento al botón de reinicio
  document.getElementById('replay-btn').addEventListener('click', resetGame);
}

function resetGame() {
  // Restablecer el juego
  availableQuestions = [...questions];
  showNextQuestion();
}

// Iniciar el juego al cargar la página
window.onload = showNextQuestion;