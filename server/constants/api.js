const SOCKET_IO_SERVER = 'http://localhost:3000';
const SOCKET_IO_PORT = 4567;
const EXPRESS_ADMIN_PORT = 7894;
const API_KEY = 'AIzaSyCfuQLHd0Aha7KuNvHK0p6V6R_0kKmsRX4';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
const FETCH_SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";
const SPREADSHEET_ID = "1hzA42BEzt2lPvOAePP6RLLRZKggbg0RWuxSaEwd5xLc";
const RANGE = "Learning!A1:F10";
const DIMENSION = "COLUMNS";

const FETCH_URL = `${FETCH_SHEETS_API}/${SPREADSHEET_ID}/values/${RANGE}?majorDimension=${DIMENSION}&key=${API_KEY}`;

// const URL = "https://sheets.googleapis.com/v4/spreadsheets/1hzA42BEzt2lPvOAePP6RLLRZKggbg0RWuxSaEwd5xLc/values/Learning!A1:F10?majorDimension=COLUMNS&key=AIzaSyCfuQLHd0Aha7KuNvHK0p6V6R_0kKmsRX4"


module.exports = {
  SOCKET_IO_SERVER,
  SOCKET_IO_PORT,
  EXPRESS_ADMIN_PORT,
  FETCH_URL
};