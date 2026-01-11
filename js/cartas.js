/***********************
 * DATOS DE LAS CARTAS
 ***********************/
const letters = [
  {
    date: "2026-01-10",
    text: `
💖 TE AMO MUCHO 💖
MI YAYIS ❤️✨

Eres lo más bonito 🌸
que me ha pasado en la vida 💫
`,
    secret: false,
  },
  {
    date: "2026-01-10",
    text: `
Gracias por cada sonrisa 😊,
por cada abrazo 🤗
y por existir 💖✨
`,
    secret: false,
  },
  {
    date: "2026-01-10",
    text: `
Prometo cuidarte 🛡️❤️,
respetarte 🤍
y amarte todos los días 💍✨
`,
    secret: false,
  },
  {
    date: "2026-01-10",
    text: `💞 Si recordaste este día 💞,
es porque nuestro amor ❤️
vive en tu corazón 💖✨

Ese anillo 💍 no fue una promesa,
fue la certeza ✨
de que quiero caminar contigo 🚶‍♂️🚶‍♀️
toda la vida 💫💕

Te amo eternamente ♾️❤️

— Tu siempre enamorado 💘
Sergio Marcos ❤️`,
    secret: true,
    question:
      "💍✨ ¿Recuerdas la fecha en la que un anillo selló nuestro amor para siempre? ❤️💖",
    answer: "29/12/2025",
    answerType: "date",
  },
  {
    date: "2026-01-02",
    text: `
Mi adorada Yayis ❤️🌹:

Hoy me desperté pensando en ti 💭💖 y en la suerte que tengo de tenerte conmigo.
Quería recordarte lo mucho que te amo ❤️✨ y lo importante que eres para mí.

Te escribo porque a veces el corazón 💓 se me llena tanto de ti que las palabras necesitan salir.
Quiero que sepas, hoy más que nunca 🌅, lo mucho que te amo 💘.

Lo que siento por ti va mucho más allá de un simple sentimiento 💞,
es un cariño incondicional 🤍.
No importa el día, el lugar o la circunstancia 🌎✨,
mi amor por ti permanece intacto ❤️,
firme y dispuesto a todo para verte feliz 😊💖.

Eres mi refugio 🏡💫,
mi lugar seguro 🤗
y la persona que le da un brillo especial ✨ a mi mundo 🌍.

Gracias por ser como eres 🌸,
por tu ternura 💕
y por caminar a mi lado 👣❤️.

Te amo 💞 con todo mi ser,
Sergio Marcos 💘
`,
    secret: false,
  },
  {
    date: "2026-01-01",
    text: `
Mi amor 💞✨,

No quería dejar pasar ni un segundo ⏳ de este nuevo año 🎆
sin decirte lo que significas para mí ❤️.

Mientras el mundo celebra un nuevo comienzo 🌟,
mi único deseo es que ese comienzo sea siempre a tu lado 🤍.

Eres la razón de mis mejores sonrisas 😊
y mi mayor motivación 💪💖.
Este año que comienza 🗓️,
estoy dispuesto a darlo todo por ti y por nosotros ❤️✨.

Te deseo un año lleno de luz ✨,
de éxitos 🌈
y de mucha salud 💐 mi amor.

¡Feliz Año Nuevo, vida mía! 🎉💖

Sergio Marcos ❤️
`,
    secret: false,
  },
  {
    date: "2025-12-31",
    text: `
Mi adorada Yayis ❤️✨,

Hoy me detuve un momento ⏳ a pensar en todo lo que hemos vivido 💭
y no quería dejar pasar el día sin decirte
lo mucho que significas para mí 💖.

Cada risa 😂,
cada salida 🚶‍♀️🚶‍♂️
y hasta los momentos de calma 🌙
han sido los mejores de mi vida ❤️.

Cualquier lugar es especial 🌍✨
si tú estás ahí conmigo 🤍.

Te quiero, te amo y te adoro 💘
con toda mi alma 💓.

Mi mayor deseo 🌟
es que este año sea solo uno de muchísimos más ♾️,
porque quiero estar por siempre a tu lado ❤️.

Con todo mi amor,
Sergio Marcos 😍
`,
    secret: false,
  },
  {
    date: "2026-01-10",
    text: `
Hola, mi Yayis hermosa ❤️🌹,

Hoy, 10 de enero de 2026 📅,
quiero regalarte estas palabras 💌
que nacen directo de mi corazón 💖.

Eres mi sueño hecho realidad ✨,
mi reina 👑,
mi todo ❤️.

Cada noche 🌙
siento que me haces falta 💭,
que quiero volar ✈️ hasta tus brazos 🤗.

Siempre estaré aquí para ti 🛡️❤️,
para cuidarte, protegerte
y amarte sin condiciones 💞.

Te amo con todo mi corazón 💓,
mi Yayis hermosa ❤️😍

Tu siempre enamorado,
Sergio Marcos 💘
`,
    secret: false,
  },
  {
    date: "2026-01-06",
    text: `
Para mi querida Yayis ❤️😍,

Amor 💞,
soy afortunado 🍀 por tenerte a mi lado
y por compartir la vida contigo ✨.

Eres mi apoyo 🤍,
mi refugio 🏡
y mi razón para sonreír 😊.

Mi promesa es simple y sincera 💍:
siempre estaré contigo ❤️.

Te amo con todo mi corazón 💓

Sergio Marcos 💘
`,
    secret: false,
  },
  {
    date: "2025-12-26",
    text: `
Cuando te conocí 💫,
no imaginé que te volverías tan importante para mí ❤️.

Hoy no puedo pasar un solo día 🌅
sin hablar contigo 💬💖.

Nuestro amor creció sin darnos cuenta 🌱✨
y ahora eres parte de mi vida 💞.
`,
    secret: false,
  },
];

/**********************************
 * MEZCLAR CARTAS DE FORMA ALEATORIA
 **********************************/
letters.sort(() => Math.random() - 0.5);

/***********************
 * ELEMENTOS DEL DOM
 ***********************/
const sidebar = document.getElementById("sidebar");
const letter = document.getElementById("letter");
const letterContent = document.getElementById("letterContent");
const letterDate = document.getElementById("letterDate");
const notice = document.getElementById("notice");

/***********************
 * ESTADO
 ***********************/
let selectedIndex = null;
let isOpen = false;

/**********************************
 * FUNCIÓN: NORMALIZAR FECHAS
 **********************************/
function normalizeDate(value) {
  if (!value) return "";

  // Si viene de input type="date" → YYYY-MM-DD
  if (value.includes("-")) {
    const [y, m, d] = value.split("-");
    return `${d}/${m}/${y}`;
  }

  return value;
}

/**********************************
 * CREAR LISTA DE SOBRES
 **********************************/
letters.forEach((l, i) => {
  const [y, m, d] = l.date.split("-");
  const safeDate = new Date(y, m - 1, d); // 🔴 SIN UTC → NO RESTA DÍAS

  const shortDate = safeDate.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const div = document.createElement("div");
  div.className = "envelope-item";
  div.dataset.index = i;

  div.innerHTML = `
    <div class="envelope-icon">${l.secret ? "🔒" : "✉️"}</div>
    <div>
      <strong>Carta</strong><br>
      <span class="envelope-date">${shortDate}</span>
    </div>
  `;

  div.onclick = () => selectLetter(i);
  sidebar.appendChild(div);
});

/**********************************
 * SELECCIONAR CARTA
 **********************************/
function selectLetter(index) {
  closeLetter();
  selectedIndex = index;
  letterContent.textContent = "";

  document
    .querySelectorAll(".envelope-item")
    .forEach((el) => el.classList.remove("active"));

  document.querySelector(`[data-index="${index}"]`).classList.add("active");

  notice.style.display = "none";
}

/**********************************
 * ABRIR CARTA
 **********************************/
function openLetter() {
  if (selectedIndex === null) {
    notice.style.display = "block";
    return;
  }

  if (isOpen) return;

  const data = letters[selectedIndex];

  const showLetter = () => {
    const [y, m, d] = data.date.split("-");
    const safeDate = new Date(y, m - 1, d);

    letterDate.textContent = safeDate.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    letterContent.textContent = data.text;
    letter.classList.add("open");
    isOpen = true;
  };

  // 🔒 CARTA SECRETA
  if (data.secret) {
    let inputType = "text";

    if (data.answerType === "number") inputType = "number";
    if (data.answerType === "date") inputType = "date";

    Swal.fire({
      title: "💖 Carta secreta",
      text: data.question,
      input: inputType,
      showCancelButton: true,
      confirmButtonText: "Abrir carta",
      cancelButtonText: "Cancelar",
      inputAttributes:
        data.answerType === "date"
          ? { placeholder: "Selecciona la fecha" }
          : {},
    }).then((result) => {
      if (!result.isConfirmed || !result.value) return;

      let userAnswer = result.value;
      let correctAnswer = data.answer;

      if (data.answerType === "date") {
        userAnswer = normalizeDate(userAnswer);
      }

      if (
        String(userAnswer).toLowerCase().trim() ===
        String(correctAnswer).toLowerCase().trim()
      ) {
        showLetter();
      } else {
        Swal.fire(
          "Ups 😢💔",
          "Esa no es la respuesta correcta, inténtalo de nuevo amor.",
          "error"
        );
      }
    });
  } else {
    showLetter();
  }
}

/**********************************
 * CERRAR CARTA
 **********************************/
function closeLetter() {
  letter.classList.remove("open");
  isOpen = false;
}

/**********************************
 🌗 MODO DÍA / NOCHE AUTO + MANUAL
**********************************/

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleMode");

  // 1️⃣ Revisar preferencia guardada
  const savedMode = localStorage.getItem("themeMode");

  if (savedMode) {
    applyMode(savedMode);
  } else {
    applyAutoMode();
  }

  // 2️⃣ Click manual
  toggleBtn.addEventListener("click", () => {
    const isNight = document.body.classList.contains("night");
    const newMode = isNight ? "day" : "night";

    applyMode(newMode);
    localStorage.setItem("themeMode", newMode);
  });
});

/**********************************
 🌞🌙 FUNCIONES
**********************************/
function applyAutoMode() {
  const hour = new Date().getHours();
  const isNight = hour >= 19 || hour < 6;

  applyMode(isNight ? "night" : "day");
}

function applyMode(mode) {
  clearNightElements();

  if (mode === "night") {
    document.body.classList.add("night");
    createMoonAndStars();
    updateToggleIcon("day");
  } else {
    document.body.classList.remove("night");
    updateToggleIcon("night");
  }
}

function updateToggleIcon(nextMode) {
  const btn = document.getElementById("toggleMode");
  btn.textContent = nextMode === "night" ? "🌙" : "🌞";
}

/**********************************
 🌙 ELEMENTOS VISUALES
**********************************/
function createMoonAndStars() {
  if (document.querySelector(".moon")) return;

  const moon = document.createElement("div");
  moon.className = "moon";
  document.body.appendChild(moon);

  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(star);
  }
}

function clearNightElements() {
  document.querySelectorAll(".moon, .star").forEach((el) => el.remove());
}
