async function loadParticipants(csvFile, tableId, placeholderId) {
  try {
    const res = await fetch(csvFile);
    if (!res.ok) throw new Error(`File ${csvFile} not found`);
    const text = await res.text();
    const lines = text.trim().split('\n');
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = '';

    lines.forEach(line => {
      const parts = line.split(',');
      if (parts.length < 2) return;
      const participant = parts[0].trim();
      const team = parts[1].trim();
      if (!participant) return;

      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.textContent = participant;
      const td2 = document.createElement('td');
      td2.textContent = team || '';
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    });

    const ph = document.getElementById(placeholderId);
    if (ph) ph.style.display = 'none';
  } catch (e) {
    const ph = document.getElementById(placeholderId);
    if (ph) {
      ph.textContent = `Failed to load participants: ${e.message}`;
      ph.style.color = 'red';
    }
    console.error(e);
  }
}

async function loadList(csvFile, listId, label) {
  try {
    const res = await fetch(csvFile);
    if (!res.ok) throw new Error(`File ${csvFile} not found`);
    const text = await res.text();
    const lines = text.trim().split('\n');
    const ul = document.getElementById(listId);
    if (!ul) return;
    ul.innerHTML = '';

    lines.forEach(line => {
      const value = line.trim();
      if (!value) return;
      const li = document.createElement('li');
      li.textContent = value;
      ul.appendChild(li);
    });
  } catch (e) {
    const ul = document.getElementById(listId);
    if (ul) {
      ul.textContent = `Failed to load ${label}: ${e.message}`;
      ul.style.color = 'red';
    }
    console.error(e);
  }
}

function initEventsData() {
  // Cricket
  loadParticipants('cricket_participants.csv', 'cricket-participants-table', 'cricket-participants-placeholder');
  loadList('cricket_roster.csv', 'cricket-roster-list', 'roster');
  loadList('cricket_results.csv', 'cricket-winners-list', 'results');

  // Volley Ball
  loadParticipants('volley_participants.csv', 'volleyball-participants-table', 'volleyball-participants-placeholder');
  loadList('volley_roaster.csv', 'volleyball-roster-list', 'roster');
  loadList('volley_results.csv', 'volleyball-winners-list', 'results');

  // Badminton
  loadParticipants('badminton_participants.csv', 'badminton-participants-table', 'badminton-participants-placeholder');
  loadList('badminton_roaster.csv', 'badminton-roster-list', 'roster');
  loadList('badminton_results.csv', 'badminton-winners-list', 'results');

  // Table Tennis
  loadParticipants('tabletennis_participants.csv', 'tabletennis-participants-table', 'tabletennis-participants-placeholder');
  loadList('tabletennis_roaster.csv', 'tabletennis-roster-list', 'roster');
  loadList('tabletennis_results.csv', 'tabletennis-winners-list', 'results');

  // Chess
  loadParticipants('chess_participants.csv', 'chess-participants-table', 'chess-participants-placeholder');
  loadList('chess_roaster.csv', 'chess-roster-list', 'roster');
  loadList('chess_results.csv', 'chess-winners-list', 'results');

  // Carroms
  loadParticipants('carroms_participants.csv', 'carroms-participants-table', 'carroms-participants-placeholder');
  loadList('carroms_roaster.csv', 'carroms-roster-list', 'roster');
  loadList('carroms_results.csv', 'carroms-winners-list', 'results');

  // Tennis
  loadParticipants('tennis_participants.csv', 'tennis-participants-table', 'tennis-participants-placeholder');
  loadList('tennis_roaster.csv', 'tennis-roster-list', 'roster');
  loadList('tennis_results.csv', 'tennis-winners-list', 'results');

  // Swimming
  loadParticipants('swimming_participants.csv', 'swimming-participants-table', 'swimming-participants-placeholder');
  loadList('swimming_roaster.csv', 'swimming-roster-list', 'roster');
  loadList('swimming_results.csv', 'swimming-winners-list', 'results');

  // Box Cricket
  loadParticipants('boxcricket_participants.csv', 'boxcricket-participants-table', 'boxcricket-participants-placeholder');
  loadList('boxcricket_roaster.csv', 'boxcricket-roster-list', 'roster');
  loadList('boxcricket_results.csv', 'boxcricket-winners-list', 'results');

  // Running
  loadParticipants('running_participants.csv', 'running-participants-table', 'running-participants-placeholder');
  loadList('running_roaster.csv', 'running-roster-list', 'roster');
  loadList('running_results.csv', 'running-winners-list', 'results');

  // Tennicoit
  loadParticipants('tennicoit_participants.csv', 'tennicoit-participants-table', 'tennicoit-participants-placeholder');
  loadList('tennicoit_roaster.csv', 'tennicoit-roster-list', 'roster');
  loadList('tennicoit_results.csv', 'tennicoit-winners-list', 'results');
}

document.addEventListener('DOMContentLoaded', initEventsData);
