document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("pokemon-limit");
    const fetchButton = document.getElementById("fetch-button");
    const tableBody = document.getElementById("pokemon-table").querySelector("tbody");
  
    fetchButton.addEventListener("click", async () => {
      const limit = parseInt(inputField.value);
  
      if (isNaN(limit) || limit < 1 || limit > 150) {
        alert("Please enter a valid number between 1 and 150.");
        return;
      }
  
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await response.json();
        const pokemonList = data.results;
  
        tableBody.innerHTML = ""; 
  
        pokemonList.forEach((pokemon, index) => {
          const row = document.createElement("tr");
          const indexCell = document.createElement("td");
          const nameCell = document.createElement("td");
          indexCell.textContent = index + 1; 
          nameCell.textContent = pokemon.name; 
          row.appendChild(indexCell);
          row.appendChild(nameCell);
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    });
  });
  