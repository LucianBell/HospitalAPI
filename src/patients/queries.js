const getPatients = "SELECT * FROM patients";
const getPatientsById = "SELECT * FROM patients WHERE id = $1";
const checkEmailExists = "SELECT s FROM patients s WHERE s.email = $1";
const addPatient =
  "INSERT INTO patients (name, email, age, birthday, height, entry_date, status) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const removePatient = "DELETE FROM patients WHERE id = $1";
const updatePatient = "UPDATE patients SET name = $1 WHERE id = $2";

module.exports = {
  getPatients,
  getPatientsById,
  checkEmailExists,
  addPatient,
  removePatient,
  updatePatient,
};
