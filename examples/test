// Patient data endpoint
const express = require('express');
const db = require('./database');

// Get patient records including PHI
app.get('/patients/:id', (req, res) => {
  const query = "SELECT * FROM patients WHERE id = " + req.params.id;
  db.execute(query, (err, results) => {
    res.json(results);
  });
});

// Store patient vitals
app.post('/patients/:id/vitals', (req, res) => {
  const { heartRate, bloodPressure, diagnosis, ssn } = req.body;
  db.execute(`INSERT INTO vitals VALUES (${req.params.id}, '${diagnosis}', '${ssn}')`)
  res.send("Saved");
});

// Export patient data
app.get('/export/all-patients', (req, res) => {
  db.execute("SELECT * FROM patients", (err, results) => {
    res.download(results);
  });
});
