document.addEventListener("DOMContentLoaded", () => {
  const pilotos = [
    {
      nombre: "PARCIAL",
      aplica: "Ofrecemos preferencia",
      hashtags: ["#ParcialSi", "#ParcialNo", "#ParcialNo-Verdi", "#ParcialNo-Horario", "ParcialNo-Mensajeria"]
    },
    {
      nombre: "RECOMPRA",
      aplica: "La herramienta de recompra esta disponible",
      hashtags: ["#sugerenciaerrada", "#recompra"]
    },
    {
      nombre: "LLAMADOS",
      aplica: "Llamamos",
      hashtags: ["#llamadomichelinsi", "#llamadomichelinno"]
    },
    {
      nombre: "INCOMPLETO",
      aplica: "Ofrecemos preferencia",
      hashtags: ["#bonif10", "#bonif30", "#calculable"]
    },
    {
      nombre: "MICHELIN",
      aplica: "No podemos hacer excepción o usamos michelin sin que este mapeado el uso",
      hashtags: ["#pilotonoautorizado", "#wavernomapeado"]
    },
    {
      nombre: "DERIVACIONES",
      aplica: "Usamos Deribot o necesitamos dejar comentario por derivación vista con TL",
      hashtags: ["#DeriBotNo", "#DeriBotManual", "DeriBotAuto", "TDIVistoTL"]
    }
  ];

  const contenedor = document.getElementById("contenedor");

  pilotos.forEach(piloto => {
    // Botón acordeón
    const btn = document.createElement("button");
    btn.className = "accordion";
    btn.textContent = piloto.nombre;

    // Panel con hashtags envueltos en span
    const panel = document.createElement("div");
    panel.className = "panel";

    const hashtagsHTML = piloto.hashtags.map(h => {
      if (h.startsWith("#")) {
        return `<span class="hashtag">${h}</span>`;
      }
      return h;
    }).join(", ");

    panel.innerHTML = `
      <p><b>Aplica cuando:</b> ${piloto.aplica}</p>
      <p><b>Hashtags:</b> ${hashtagsHTML}</p>
    `;

    contenedor.appendChild(btn);
    contenedor.appendChild(panel);

    // Evento acordeón
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  // --- Copiar hashtag al hacer click ---
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("hashtag")) {
      const text = e.target.textContent;
      navigator.clipboard.writeText(text).then(() => {
        console.log(`Copiado: ${text}`);
        // Opcional: dar feedback visual
        e.target.style.backgroundColor = "#d1ffd1";
        e.target.style.color = "#000000"
        setTimeout(() => e.target.style.backgroundColor = "", 500);
        setTimeout(() => e.target.style.color = "", 500);
      });
    }
  });
});
