# IMA Narasaraopet Annual Sports Meet 2025 - CSV Data Files

## CSV files to upload in repository root folder:

| CSV Filename          | Description                      |
|-----------------------|---------------------------------|
| cricket_participants.csv | List of cricket participants (one name per line) |
| cricket_roaster.csv      | Cricket event roaster/schedule (one item per line) |
| cricket_results.csv      | Cricket results: Winner, Runner, Semifinalists (comma separated: e.g. Winner,Runner,Semifinalist1;Semifinalist2) |
| volley_participants.csv  | Volley Ball participants (one per line) |
| volley_roaster.csv       | Volley Ball event roaster (one per line) |
| volley_results.csv       | Volley Ball results in CSV format similar to cricket_results.csv |

## CSV Format:

- Participant & Roaster files: one entry per line (plain text)
- Results file: one line, comma separated for winner, runner, semifinalists separated by semicolons
  Example: `Team A, Team B, Team C;Team D`

## Updating the site:

- Upload or update the CSV files in this repository and push to GitHub
- The web page will auto detect and display updated info if CSV file exists
- If missing, the page shows "Will be updated soon" placeholder

## Add more events by following the same filename pattern.
