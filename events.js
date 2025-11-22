async function loadTable(csvFile, tableId, columnsCount) {
  try {
    const res = await fetch(csvFile);
    if (!res.ok) throw new Error(`File ${csvFile} not found`);

    const text = await res.text();
    const rows = text.trim().split('\n');

    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = '';

    rows.forEach(line => {
      const cells = line.split(',').map(c => c.trim());
      if (cells.length < columnsCount) return;
      const tr = document.createElement('tr');
      for (let i = 0; i < columnsCount; i++) {
        const td = document.createElement('td');
        td.textContent = cells[i] || '';
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });

    // Hide placeholder
    document.getElementById(tableId.replace('-table', '-placeholder')).style.display = 'none';

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
    // Participants: 2 columns (Participant, Team)
    loadTable(`${event}_participants.csv`, `${event}-participants-table`, 2);
    // Roster: 3 columns (Participant, Team, Date)
    loadTable(`${event}_roster.csv`, `${event}-roster-table`, 3);
    // Winners: 3 columns (Rank, Name, Team)
    loadTable(`${event}_results.csv`, `${event}-winners-table`, 3);
  });
});
