(function(){
  const root = document.querySelector('[data-events]');
  if (!root || !window.FACIG_EVENTS) return;
  const now = new Date(); now.setHours(0,0,0,0);
  const events = [...window.FACIG_EVENTS].sort((a,b)=>a.dateISO.localeCompare(b.dateISO));
  root.innerHTML = events.map(e => {
    const d = new Date(e.dateISO+'T12:00:00');
    const past = d < now;
    const button = e.url ? `<a class="btn btn-small btn-primary" href="${e.url}" target="_blank" rel="noopener">S'inscrire</a>` : `<span class="badge">${past ? 'Terminé' : e.status}</span>`;
    return `<article class="event">
      <div class="event-date"><span class="day">${e.day}</span><span>${e.month} ${e.year}</span></div>
      <div><h3>${e.title}</h3><div class="event-meta">${e.location}</div><p>${e.description}</p></div>
      ${button}
    </article>`;
  }).join('');
})();
