// Test clinical endpoint - intentionally has compliance issues for demo
app.get('/api/patient/:id/records', async (req, res) => {
  const patientId = req.params.id;
  const records = await db.query(
    'SELECT * FROM patient_records WHERE id = ' + patientId
  );
  res.json(records);
});

// Updated endpoint 
