const pool = require("../../db");
const queries = require("./queries");

const getPatients = (req, res) => {
  pool.query(queries.getPatients, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getPatientsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getPatientsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addPatients = (req, res) => {
  const { name, email, age, birthday, height, entry_date, status } = req.body;

  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }

    //Add patient
    pool.query(
      queries.addPatient,
      [name, email, age, birthday, height, entry_date, status],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Patient registered successfuly!");
      }
    );
  });
};

const removePatient = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getPatientsById, [id], (error, results) => {
    const noPatientFound = !results.rows.length;
    if (noPatientFound) {
      res.send("This patient was not found in the database");
    }

    //Remove patient
    pool.query(queries.removePatient, [id], (error, results) => {
      if (error) throw error;

      res.status(200).send("Patient removed successfuly!");
    });
  });
};

const updatePatient = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getPatientsById, [id], (error, results) => {
    const noPatientFound = !results.rows.length;
    if (noPatientFound) {
      res.send("This patient was not found in the database");
    }

    pool.query(queries.updatePatient, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Patient data updated successfully!");
    });
  });
};

module.exports = {
  getPatients,
  getPatientsById,
  addPatients,
  removePatient,
  updatePatient,
};
//We're exporting multiple functions, so we're putting all of them inside an object, and exporting it.
