(function () {
  var D = window.MEDX;
  var PHOTO = "assets/team/";

  // Icônes pleines au trait blanc, posées dans un cercle Bleu Medx (charte §6)
  var ICONS = {
    poing: '<path d="M7 11V7a1.5 1.5 0 0 1 3 0v3M10 10V6a1.5 1.5 0 0 1 3 0v4M13 10V7a1.5 1.5 0 0 1 3 0v4M16 11V9a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a5 5 0 0 1-5-5v-2.5A1.5 1.5 0 0 1 7 11h2"/>',
    ampoule: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    immeuble: '<path d="M4 21V5l8-2v18M12 8h8v13M4 21h16M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"/>',
    avion: '<path d="M10.5 13.5 3 11l1.5-1.5 8 1 4-4c1-1 2.5-1.3 3-.8s.2 2-.8 3l-4 4 1 8L14 22l-2.5-7.5L8 18v3l-1.5 1L5 18.5 2 17l1-1.5h3l3.5-3.5"/>',
    micro: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
    mains: '<path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8L15 7.6M8 7l-4.4 4.4a2 2 0 0 0 0 2.8L8 18M8 7l2.6-2.6a2 2 0 0 1 2.8 0L18 9M8 7l3 3a1.4 1.4 0 0 0 2 0l1-1"/>',
    porte_voix: '<path d="M3 10v4h4l6 4V6L7 10H3zM17 8a5 5 0 0 1 0 8M19.5 5.5a8.5 8.5 0 0 1 0 13"/>',
    cible: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    banque: '<path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
    graphe: '<path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7"/>',
    fiole: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3M7.5 15h9"/>',
    puce: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    colonnes: '<path d="M4 21h16M5 21V10M19 21V10M9.5 21V10M14.5 21V10M3 10l9-6 9 6"/>',
    fusee: '<path d="M5 19c1-3 3-5 5-5M14 4c3 0 6 3 6 6l-6 6-6-6 6-6zM15 9h.01M8 16l-3 3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    lien: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    lieu: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>'
  };
  function icon(name) {
    return '<span class="icone" aria-hidden="true"><svg viewBox="0 0 24 24">' + (ICONS[name] || "") + "</svg></span>";
  }
  document.querySelectorAll("[data-icon]").forEach(function (el) { el.outerHTML = icon(el.getAttribute("data-icon")); });

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // Équipe
  function membres(list, el) {
    if (!el) return;
    el.innerHTML = list.map(function (m) {
      return '<div class="membre"><img src="' + PHOTO + m.photo + '.jpg" alt="' + esc(m.nom) + '" width="132" height="132">' +
        "<b>" + esc(m.nom) + '</b><span class="role">' + esc(m.role) + (list === D.officers ? " Officer" : "") + '</span><span class="cursus">' + esc(m.cursus) + "</span></div>";
    }).join("");
  }
  membres(D.bureau, document.getElementById("bureau"));
  membres(D.officers, document.getElementById("officers"));

  // Officer par secteur (page Partenariats)
  document.querySelectorAll("[data-officer]").forEach(function (el) {
    var o = D.officers.filter(function (x) { return x.role === el.getAttribute("data-officer"); })[0];
    if (o) el.innerHTML = '<img src="' + PHOTO + o.photo + '.jpg" alt=""><span>Votre contact : <b>' + esc(o.nom) + "</b></span>";
  });

  // Fil d'actualité
  var LABELS = { annonce: "Annonce", visite: "Visite", voyage: "Study trip", evenement: "Événement" };
  var feed = document.getElementById("feed");
  function renderFeed(filtre) {
    if (!feed) return;
    var items = D.actus.filter(function (a) { return filtre === "tout" || a.categorie === filtre; });
    feed.innerHTML = items.map(function (a) {
      var visages = a.visages ? '<span class="visages">' + a.visages.map(function (p) { return '<img src="' + PHOTO + p + '.jpg" alt="">'; }).join("") + "</span>" : "";
      return '<article class="post' + (a.une && filtre === "tout" ? " une" : "") + '">' +
        '<div class="post-visuel"><span class="rond"></span><span class="rond b"></span><strong>' + esc(a.visuel) + "</strong>" + visages + "</div>" +
        '<div class="post-corps"><div class="post-meta"><span class="tag">' + LABELS[a.categorie] + "</span>" +
        (a.exemple ? '<span class="tag exemple" title="Contenu d\'exemple à remplacer par un vrai post">Exemple</span>' : "") +
        "<span>" + esc(a.date) + "</span></div>" +
        "<h3>" + esc(a.titre) + "</h3><p>" + esc(a.texte) + "</p>" +
        '<a class="post-lien" href="' + D.linkedin + 'posts/" target="_blank" rel="noopener">Voir sur LinkedIn</a></div></article>';
    }).join("") || "<p>Aucune actualité dans cette catégorie pour le moment.</p>";
  }
  document.querySelectorAll(".filtres button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".filtres button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      renderFeed(b.getAttribute("data-f"));
    });
  });
  renderFeed("tout");

  // Liens et e-mail
  document.querySelectorAll("[data-linkedin]").forEach(function (a) { a.href = D.linkedin; });
  document.querySelectorAll("[data-email]").forEach(function (el) { el.textContent = D.email; });

  // Onglets (une vue par ancre : #accueil, #qui-sommes-nous, #missions, #partenariats, #contact)
  var vues = Array.prototype.slice.call(document.querySelectorAll(".vue"));
  var nav = document.querySelector(".nav");
  function show(id, scroll) {
    if (!vues.some(function (v) { return v.id === id; })) id = "accueil";
    vues.forEach(function (v) { v.hidden = v.id !== id; });
    document.querySelectorAll('.nav a, .brand').forEach(function (a) {
      if (a.classList.contains("brand")) return;
      a.setAttribute("aria-current", a.getAttribute("href") === "#" + id ? "page" : "false");
    });
    if (nav) nav.classList.remove("open");
    if (scroll !== false) window.scrollTo(0, 0);
    var v = document.getElementById(id);
    document.title = (v && v.getAttribute("data-titre") ? v.getAttribute("data-titre") + " | " : "") + "Medx HEC";
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    if (!document.getElementById(id) || !document.getElementById(id).classList.contains("vue")) return;
    e.preventDefault();
    try { history.pushState(null, "", "#" + id); } catch (err) {}
    show(id);
  });
  window.addEventListener("popstate", function () { show(location.hash.slice(1)); });
  show(location.hash.slice(1), false);

  var toggle = document.querySelector(".nav-toggle");
  if (toggle) toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Formulaire de contact : le site est statique, on prépare donc le message à envoyer
  var form = document.getElementById("form-contact");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements, err = document.getElementById("form-erreur");
    var manquants = ["nom", "email", "message"].filter(function (k) { return !f[k].value.trim(); });
    if (manquants.length || !/^\S+@\S+\.\S+$/.test(f.email.value)) {
      err.hidden = false;
      err.textContent = manquants.length ? "Merci de remplir votre nom, votre e-mail et votre message." : "Cette adresse e-mail ne semble pas valide. Vérifiez-la puis réessayez.";
      return;
    }
    err.hidden = true;
    var sujet = "[" + f.profil.value + "] " + (f.organisation.value || f.nom.value);
    var corps = "Nom : " + f.nom.value + "\nE-mail : " + f.email.value + (f.organisation.value ? "\nOrganisation : " + f.organisation.value : "") + "\nProfil : " + f.profil.value + "\n\n" + f.message.value;
    document.getElementById("recap-texte").textContent = "Objet : " + sujet + "\n\n" + corps;
    document.getElementById("recap-mail").href = "mailto:" + D.email + "?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corps);
    document.getElementById("recap").hidden = false;
  });
  var copier = document.getElementById("recap-copier");
  if (copier) copier.addEventListener("click", function () {
    var t = document.getElementById("recap-texte");
    var done = function () { copier.textContent = "Message copié"; };
    var fallback = function () { var r = document.createRange(); r.selectNodeContents(t); var s = getSelection(); s.removeAllRanges(); s.addRange(r); copier.textContent = "Texte sélectionné, copiez-le"; };
    try { navigator.clipboard.writeText(t.textContent).then(done, fallback); } catch (err) { fallback(); }
  });
})();
