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

letters.sort(() => Math.random() - 0.5);

const sidebar = document.getElementById("sidebar");
const letter = document.getElementById("letter");
const letterContent = document.getElementById("letterContent");
const letterDate = document.getElementById("letterDate");
const notice = document.getElementById("notice");

let selectedIndex = null,
  isOpen = false;

function normalizeDate(value) {
  if (!value) return "";
  if (value.includes("-")) {
    const [y, m, d] = value.split("-");
    return `${d}/${m}/${y}`;
  }
  return value;
}

letters.forEach((l, i) => {
  const [y, m, d] = l.date.split("-");
  const safeDate = new Date(y, m - 1, d);
  const shortDate = safeDate.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const div = document.createElement("div");
  div.className = "envelope-item";
  div.dataset.index = i;
  div.innerHTML = `<div class="envelope-icon">${l.secret ? "🔒" : "✉️"}</div>
                             <div><strong>Carta</strong><br><span class="envelope-date">${shortDate}</span></div>`;
  div.onclick = () => selectLetter(i);
  sidebar.appendChild(div);
});

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
  if (data.secret) {
    /* implementación secreta si aplica */
  } else {
    showLetter();
  }
}

function closeLetter() {
  letter.classList.remove("open");
  isOpen = false;
}

const body = document.body;
function setModeByHour() {
  const hour = new Date().getHours();
  if (hour >= 19 || hour < 6) {
    body.classList.add("night");
    body.classList.remove("day");
  } else {
    body.classList.add("day");
    body.classList.remove("night");
  }
}
function toggleMode() {
  if (body.classList.contains("night")) {
    body.classList.remove("night");
    body.classList.add("day");
  } else {
    body.classList.remove("day");
    body.classList.add("night");
  }
}

setModeByHour();
