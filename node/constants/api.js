const EXPRESS_ADMIN_PORT = 7894;
const API_KEY = 'AIzaSyCfuQLHd0Aha7KuNvHK0p6V6R_0kKmsRX4';
const FETCH_SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";
const SPREADSHEET_ID = "1hzA42BEzt2lPvOAePP6RLLRZKggbg0RWuxSaEwd5xLc";
const RANGE = "Learning!A1:F10";
const COLUMNS = "COLUMNS";
const ROWS = "ROWS";

const FETCH_URL = `${FETCH_SHEETS_API}/${SPREADSHEET_ID}/values/${RANGE}?majorDimension=${ROWS}&key=${API_KEY}`;

const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";


module.exports = {
  EXPRESS_ADMIN_PORT,
  FETCH_URL
};
