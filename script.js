const numbers = [
  { number: "80%", description: "des pays dans le monde ont réduit leur taux de pauvreté depuis 2000." },
  { number: "1 000 000", description: "de livres ont été donnés à des enfants défavorisés cette année." },
  { number: "95%", description: "des enfants vaccinés contre la polio dans le monde en 2024." },
  { number: "10 000", description: "nouveaux projets écologiques lancés en 2024." },
  { number: "99%", description: "de l’électricité islandaise provient d’énergies renouvelables." }
];

function generateNumber() {
  const index = Math.floor(Math.random() * numbers.length);
  const selected = numbers[index];
  document.getElementById("daily-number").textContent = selected.number;
  document.getElementById("daily-description").textContent = selected.description;
