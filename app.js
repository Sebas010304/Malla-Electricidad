// Basado en la malla curricular de Electricidad (SEDE MATRIZ RIOBAMBA) :contentReference[oaicite:0]{index=0}

// 1. Lista de materias y prerequisitos
const materias = [
  { id: "ELEIB01", nombre: "INGLÉS I", prerequisitos: [] },
  { id: "ELEIB02", nombre: "EDUCACIÓN FÍSICA", prerequisitos: [] },
  { id: "ELEIB03", nombre: "FUNDAMENTOS DE PROGRAMACIÓN", prerequisitos: [] },
  { id: "ELEIB04", nombre: "CÁLCULO I", prerequisitos: [] },
  { id: "ELEIB05", nombre: "LEGISLACIÓN LABORAL", prerequisitos: [] },
  { id: "ELEIB06", nombre: "ÁLGEBRA LINEAL", prerequisitos: [] },
  { id: "ELEIB07", nombre: "FÍSICA I", prerequisitos: ["ELEIB04"] },

  { id: "ELEIB08", nombre: "INGLÉS II", prerequisitos: ["ELEIB01"] },
  {
    id: "ELEIB09",
    nombre: "COMUNICACIÓN ORAL Y ESCRITA",
    prerequisitos: [
      "ELEIB01", "ELEIB02", "ELEIB03", "ELEIB04",
      "ELEIB05", "ELEIB06", "ELEIB07"
    ]
  },
  {
    id: "ELEIB10",
    nombre: "CÁLCULO II",
    prerequisitos: ["ELEIB04", "ELEIB06"]
  },
  { id: "ELEIB11", nombre: "QUÍMICA", prerequisitos: [] },
  {
    id: "ELEIB12",
    nombre: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    prerequisitos: ["ELEIB03"]
  },
  {
    id: "ELEIB13",
    nombre: "FÍSICA II",
    prerequisitos: ["ELEIB04", "ELEIB07"]
  },

  { id: "ELEIB14", nombre: "INGLÉS III", prerequisitos: ["ELEIB08"] },
  {
    id: "ELEIB15",
    nombre: "SOSTENIBILIDAD AMBIENTAL",
    prerequisitos: [
      "ELEIB08", "ELEIB09", "ELEIB10",
      "ELEIB11", "ELEIB12", "ELEIB13"
    ]
  },
  {
    id: "ELEIB16",
    nombre: "ECUACIONES DIFERENCIALES",
    prerequisitos: ["ELEIB10"]
  },
  {
    id: "ELEIB17",
    nombre: "TEORÍA ELECTROMAGNÉTICA",
    prerequisitos: ["ELEIB10", "ELEIB13"]
  },
  {
    id: "ELEIB18",
    nombre: "MÉTODOS NUMÉRICOS CON APLICACIONES COMPUTACIONALES",
    prerequisitos: ["ELEIB10", "ELEIB16"]
  },
  {
    id: "ELEIB19",
    nombre: "CIRCUITOS I",
    prerequisitos: ["ELEIB13"]
  },

  { id: "ELEIB20", nombre: "INGLÉS IV", prerequisitos: ["ELEIB14"] },
  {
    id: "ELEIP21",
    nombre: "MÁQUINAS ELÉCTRICAS I",
    prerequisitos: ["ELEIB17", "ELEIB18"]
  },
  {
    id: "ELEIP22",
    nombre: "CIRCUITOS II",
    prerequisitos: ["ELEIB16", "ELEIB19"]
  },
  {
    id: "ELEIP23",
    nombre: "MATEMÁTICA SUPERIOR",
    prerequisitos: ["ELEIB16", "ELEIB18"]
  },
  {
    id: "ELEIP24",
    nombre: "ELECTRÓNICA I",
    prerequisitos: ["ELEIB19"]
  },
  {
    id: "ELEIP25",
    nombre: "SISTEMAS DIGITALES",
    prerequisitos: ["ELEIB19"]
  },

  {
    id: "ELEIP26",
    nombre: "MÁQUINAS ELÉCTRICAS II",
    prerequisitos: ["ELEIP21"]
  },
  {
    id: "ELEIP27",
    nombre: "ELECTRÓNICA II",
    prerequisitos: ["ELEIP23", "ELEIP24"]
  },
  {
    id: "ELEIP28",
    nombre: "SISTEMAS ELÉCTRICOS DE POTENCIA",
    prerequisitos: ["ELEIP22"]
  },
  {
    id: "ELEIP29",
    nombre: "ESTADÍSTICA",
    prerequisitos: ["ELEIP23"]
  },
  {
    id: "ELEIP30",
    nombre: "ILUMINACIÓN E INSTALACIONES ELÉCTRICAS INDUSTRIALES",
    prerequisitos: ["ELEIP22"]
  },
  {
    id: "ELEIP31",
    nombre: "ANÁLISIS DE SEÑALES Y SISTEMAS",
    prerequisitos: ["ELEIP23"]
  },

  {
    id: "ELEIP32",
    nombre: "SISTEMAS DE CONTROL",
    prerequisitos: ["ELEIP31"]
  },
  {
    id: "ELEIP33",
    nombre: "ELECTRÓNICA DE POTENCIA",
    prerequisitos: ["ELEIP27"]
  },
  {
    id: "ELEIP34",
    nombre: "GENERACIÓN, TRANSMISIÓN Y SUBESTACIONES",
    prerequisitos: ["ELEIP28"]
  },
  {
    id: "ELEIP35",
    nombre: "OPERACIÓN Y CONTROL DE MÁQUINAS ELÉCTRICAS",
    prerequisitos: ["ELEIP26"]
  },
  {
    id: "ELEIP36",
    nombre: "EMPRENDIMIENTO",
    prerequisitos: [
      "ELEIP26","ELEIP27","ELEIP28",
      "ELEIP29","ELEIP30","ELEIP31"
    ]
  },

  {
    id: "ELEIP37",
    nombre: "SISTEMAS DE DISTRIBUCIÓN ELÉCTRICA",
    prerequisitos: ["ELEIP34"]
  },
  {
    id: "ELEIP38",
    nombre: "SISTEMAS DE PROTECCIÓN ELÉCTRICA",
    prerequisitos: ["ELEIP34", "ELEIP37"]
  },
  {
    id: "ELEIP39",
    nombre: "DISEÑO DE ALTO VOLTAJE",
    prerequisitos: ["ELEIP34"]
  },
  {
    id: "ELEIP40",
    nombre: "DISEÑO ELECTROMECÁNICO DE LÍNEAS DE TRANSMISIÓN",
    prerequisitos: ["ELEIP35"]
  },
  {
    id: "ELEIP41",
    nombre: "SOFTWARE DE SIMULACIÓN PARA SISTEMAS ELÉCTRICOS",
    prerequisitos: ["ELEIP34"]
  },
  {
    id: "ELEIP42",
    nombre: "ENERGÍAS ALTERNATIVAS",
    prerequisitos: ["ELEIP34"]
  },

  {
    id: "ELEIP43",
    nombre: "INSTRUMENTACIÓN INDUSTRIAL",
    prerequisitos: ["ELEIP40"]
  },
  {
    id: "ELEIP44",
    nombre: "MONITOREO Y MEDICIÓN DE LOS SISTEMAS ELÉCTRICOS",
    prerequisitos: ["ELEIP38", "ELEIP40"]
  },
  {
    id: "ELEIP45",
    nombre: "ESTABILIDAD DE SISTEMAS ELÉCTRICOS DE POTENCIA",
    prerequisitos: ["ELEIP38", "ELEIP41"]
  },
  {
    id: "ELEIP46",
    nombre: "GESTIÓN ADMINISTRATIVA",
    prerequisitos: ["ELEIP36"]
  },
  {
    id: "ELEIP47",
    nombre: "CALIDAD Y USO EFICIENTE DE LA ENERGÍA ELÉCTRICA",
    prerequisitos: ["ELEIP37"]
  },
  {
    id: "ELEII48",
    nombre: "FORMULACIÓN DEL TRABAJO DE INTEGRACIÓN CURRICULAR",
    prerequisitos: [
      "ELEIP37","ELEIP38","ELEIP39",
      "ELEIP40","ELEIP41","ELEIP42"
    ]
  },
  {
    id: "ELEII49",
    nombre: "METODOLOGÍA DE LA INVESTIGACIÓN",
    prerequisitos: [
      "ELEIP37","ELEIP38","ELEIP39",
      "ELEIP40","ELEIP41","ELEIP42"
    ]
  },

  {
    id: "ELEIP50",
    nombre: "DISEÑO Y ESTRUCTURACIÓN DE PROYECTOS ELÉCTRICOS",
    prerequisitos: ["ELEIP46"]
  },
  {
    id: "ELEIP51",
    nombre: "SMART GRIDS",
    prerequisitos: ["ELEIP45"]
  },
  {
    id: "ELEIP52",
    nombre: "PRÁCTICAS PREPROFESIONALES",
    prerequisitos: [
      "ELEIP43","ELEIP44","ELEIP45",
      "ELEIP46","ELEIP47","ELEII48",
      "ELEII49"
    ]
  },
  {
    id: "ELEIP53",
    nombre: "PRÁCTICA DE SERVICIO COMUNITARIO",
    prerequisitos: [
      "ELEIP43","ELEIP44","ELEIP45",
      "ELEIP46","ELEIP47","ELEII48",
      "ELEII49"
    ]
  },
  {
    id: "ELEII54",
    nombre: "TRABAJO DE INTEGRACIÓN CURRICULAR",
    prerequisitos: [
      "ELEIP43","ELEIP44","ELEIP45",
      "ELEIP46","ELEIP47","ELEII48",
      "ELEII49"
    ]
  }
];

// 2. Estado: conjunto de aprobadas
const aprobadas = new Set();

// 3. Comprueba si todos los prerequisitos están aprobados
function estaDesbloqueada(materia) {
  return materia.prerequisitos.every(reqId => aprobadas.has(reqId));
}

// 4. Renderiza la lista en el UL#lista-materias
function render() {
  const ul = document.getElementById("lista-materias");
  ul.innerHTML = ""; // limpia

  materias.forEach(m => {
    const li = document.createElement("li");
    li.className = "materia" + (estaDesbloqueada(m) ? "" : " bloqueada");

    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.id = m.id;
    chk.checked = aprobadas.has(m.id);
    chk.disabled = !estaDesbloqueada(m);

    // Al cambiar el checkbox, actualiza el estado y vuelve a renderizar
    chk.addEventListener("change", () => {
      if (chk.checked) aprobadas.add(m.id);
      else aprobadas.delete(m.id);
      render();
    });

    const lbl = document.createElement("label");
    lbl.htmlFor = m.id;
    lbl.textContent = `${m.id} – ${m.nombre}`;

    li.append(chk, lbl);
    ul.append(li);
  });
}

// 5. Inicia la UI
render();
