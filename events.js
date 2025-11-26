async function loadTable(csvFile, tableId, columnsCount) {
  try {
    const res = await fetch(csvFile);
    if (!res.ok) throw new Error(`File ${csvFile} not found`);
    const text = await res.text();
    const rows = text.trim().split('\n');
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = '';
    // Skip the header row (assumed first line)
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].split(',').map(c => c.trim());
      if (cells.length !== columnsCount) continue;
      const tr = document.createElement('tr');
      for (let j = 0; j < columnsCount; j++) {
        const td = document.createElement('td');
        td.textContent = cells[j];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    // Hide placeholder when loaded
    const placeholderId = tableId.replace('-table', '-placeholder');
    const ph = document.getElementById(placeholderId);
    if (ph) ph.style.display = 'none';
  } catch (e) {
    const ph = document.getElementById(tableId.replace('-table', '-placeholder'));
    if (ph) {
      ph.textContent = `Failed to load data: ${e.message}`;
      ph.style.color = 'red';
    }
    console.error(e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const eventList = [
    'cricket',
    'volleyball',
    'badminton',
    'tabletennis',
    'chess',
    'carroms',
    'tennis',
    'swimming',
    'boxcricket',
    'running',
    'tennicoit'
  ];

  eventList.forEach(event => {
    // Participants (2 columns: Participant, Team)
    loadTable(`${event}-participants.csv`, `${event}-participants-table`, 2);
    // Roster (3 columns: Participant, Team, Date)
    loadTable(`${event}-roster.csv`, `${event}-roster-table`, 3);
    // Winners (3 columns: Rank, Name, Team)
    loadTable(`${event}-results.csv`, `${event}-winners-table`, 3);
  });
});
