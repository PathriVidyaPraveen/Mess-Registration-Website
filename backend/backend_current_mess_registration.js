const express = require('express');

const { MongoClient } = require('mongodb');

const path = require('path');
const app = express.Router();



const url = "mongodb+srv://dinesh_23:tc97386@cluster0.7a7ovpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);


app.use(express.json());
app.use(express.static(__dirname)); 

app.post('/api/current-mess', async (req, res) => {
  const { email, password , mess_to_be_registered } = req.body;

  try {
    await client.connect();
    const database = client.db("mess");
    const students = database.collection("students");

    const user = await students.findOne({ email: email, passwd: password });
    const max_limit_of_mess = 250;

    if (user) {
      if (user.current_mess !== "") {
        res.status(403).json({ message: 'Mess already registered. Cannot change mess.' });
        return;
      }


      var myQuery = { _id : user._id, current_mess:""};
      var registered_count_for_mess_a = await students.countDocuments({ current_mess : "MESS-A"});
      var registered_count_for_mess_b = await students.countDocuments({ current_mess : "MESS-B"});
      var assigned_mess = "";
      if(mess_to_be_registered === "MESS-A"){
        if(registered_count_for_mess_a >= max_limit_of_mess){
          const updated_mess = await students.updateOne(myQuery , {$set : { current_mess : "MESS-B"}});
          assigned_mess = "MESS-B";
          // localStorage.setItem('previousMess')
        }else{
          const updated_mess = await students.updateOne(myQuery , {$set : { current_mess : "MESS-A"}});
          assigned_mess = "MESS-A";
        }

      }else if(mess_to_be_registered === "MESS-B"){
        if(registered_count_for_mess_b >= max_limit_of_mess){
          const updated_mess = await students.updateOne(myQuery , {$set : { current_mess : "MESS-A"}});
          assigned_mess = "MESS-A";

        }else{
          const updated_mess = await students.updateOne(myQuery , {$set : { current_mess : "MESS-B"}});
          assigned_mess = "MESS-B";
        }

      }else{
        res.status(401).json({ message : "Invalid mess name. Please try again"});
        return;
      }

      
      
      res.json({ message: 'Registered successfully' , assignedMess : assigned_mess});
      return;
    } else {
      res.status(401).json({ message: 'Student not found' });
    }
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Server error' });
  } 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'messregistration.html'));
  });
  
module.exports = app;



