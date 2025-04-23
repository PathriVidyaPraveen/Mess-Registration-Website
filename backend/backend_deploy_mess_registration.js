const express = require('express');

const { MongoClient } = require('mongodb');

const path = require('path');
const app = express.Router();



const url = "mongodb+srv://dinesh_23:tc97386@cluster0.7a7ovpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);


app.use(express.json());
app.use(express.static(__dirname)); 

app.post('/deploy', async (req, res) => {
  

  try {
    await client.connect();
    const database = client.db("mess");
    const students = database.collection("students");

    const allStudents = await students.find({}).toArray();

    const updateOps = allStudents.map(student => {
      const student_id = student._id;
      const currentMess = student.current_mess || ""; // fallback if null
      return students.updateOne(
        { _id: student_id },
        { $set: { previous_mess: currentMess, current_mess: "" } }
      );
    });

    await Promise.all(updateOps);

    
    res.json({ message : "Successfully deployed"});

  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Server error' });
  } 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_dashboard.html'));
  });
  
module.exports = app;

