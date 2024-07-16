function remapStats() {
  const statElements = document.querySelectorAll('#player_stats .column');
  console.log(`Moving stats...`);

  if (statElements.length === 0) {
    console.log('No stat elements found on the page');
    return;
  }

  // Original columns for attribtues
  const mentalStats = ["aggression", "anticipation", "bravery", "composure", "concentration", "decisions", "determination", "flair", "leadership", "off-the-ball", "positioning", "teamwork", "vision", "work-rate"];
  const technicalStats = ["corners", "crossing", "dribbling", "finishing", "first-touch", "free-kick-taking", "heading", "long-shots", "long-throws", "marking", "passing", "penalty-taking", "tackling", "technique"];
  const physicalStats = ["acceleration", "agility", "balance", "jumping-reach", "natural-fitness", "pace", "stamina", "strength"];

  // Create new columns for Mental, Technical, and Physical
  const playerStatsDiv = document.getElementById('player_stats');
  const mentalColumn = document.createElement('div');
  mentalColumn.className = 'column';
  mentalColumn.innerHTML = '<h3>Mental</h3><table border="0" cellpadding="0" cellspacing="0"><tbody id="mental_stats"></tbody></table>';

  const technicalColumn = document.createElement('div');
  technicalColumn.className = 'column';
  technicalColumn.innerHTML = '<h3>Technical</h3><table border="0" cellpadding="0" cellspacing="0"><tbody id="technical_stats"></tbody></table>';

  const physicalColumn = document.createElement('div');
  physicalColumn.className = 'column';
  physicalColumn.innerHTML = '<h3>Physical</h3><table border="0" cellpadding="0" cellspacing="0"><tbody id="physical_stats"></tbody></table>';

  // Append new columns
  playerStatsDiv.appendChild(technicalColumn);
  playerStatsDiv.appendChild(mentalColumn);
  playerStatsDiv.appendChild(physicalColumn);

  // Function to sort rows alphabetically by stat name
  function sortStats(tbody) {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.sort((a, b) => {
      const nameA = a.querySelector('.name').textContent.trim();
      const nameB = b.querySelector('.name').textContent.trim();
      return nameA.localeCompare(nameB);
    });
    rows.forEach(row => tbody.appendChild(row));
  }

  // Add all row element stats into new parents
  for (let column of statElements) {
    const rows = column.querySelectorAll('tr');
    for (let row of rows) {
      const statId = row.id;
      if (mentalStats.includes(statId)) {
        document.getElementById('mental_stats').appendChild(row);
      } else if (technicalStats.includes(statId)) {
        document.getElementById('technical_stats').appendChild(row);
      } else if (physicalStats.includes(statId)) {
        document.getElementById('physical_stats').appendChild(row);
      }
    }
  }

  // Sort each new column
  sortStats(document.getElementById('mental_stats'));
  sortStats(document.getElementById('technical_stats'));
  sortStats(document.getElementById('physical_stats'));

  // Remove old columns
  statElements.forEach(column => column.remove());
}

function divideStats() {
  const statElements = document.querySelectorAll('#player_stats .stat');
  console.log('Remapping stats...');

  if (statElements.length === 0) {
    console.log('No stat elements found on the page');
    return;
  }

  for (let element of statElements) {
    const currentValue = parseFloat(element.textContent);
    if (!isNaN(currentValue)) {
      const newValue = currentValue / 5;
      element.textContent = newValue.toFixed(0);
    }
  }
}

console.log('Loaded FMInsideReplace.');
// Run the function when the script is injected
remapStats();
divideStats();
