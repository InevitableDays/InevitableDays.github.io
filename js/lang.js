export async function loadLanguage(lang) {
  try {
    const res = await fetch(`../lang/${lang}.json`);
    const data = await res.json();
    for (const key in data) {
      const el = document.getElementById(key);
      if (el) {
        if (key === 'workethictext') {
          el.innerHTML = `<strong>${data[key]}</strong>`;
        } else {
          el.textContent = data[key];
        }
      }
    }
    document.documentElement.lang = lang;
  } catch (err) {
    console.error("Error loading language:", err);
  }
}
