


const express = require("express");
const app = express();
const mysql = require("mysql"); // https://github.com/mysqljs/mysql npm install mysqljs/mysql
const cors = require("cors"); //https://www.npmjs.com/package/cors npm i cors
  
//const port = 3000
  
app.use(cors());
app.use(express.json());
  
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "nodejsdb",
});
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

const name  =req.body.name     ;          
const phone =req.body.phone;
const currentBank =req.body.currentBank;
const job =req.body.job;
const netSalary =req.body.netSalary;
const basicSalary =req.body.basicSalary;
const birthMonth =req.body.birthMonth;
const birthYear =req.body.birthYear;
const startWorkMonth  =req.body.startWorkMonth; 
const startWorkYear =req.body.startWorkYear;
const housingSupport =req.body.housingSupport;
const currentMonth =req.body.currentMonth;
const currentYear =req.body.currentYear;
  
 
  


 


  
 


  
 







  db.query(
    "INSERT INTO users (name, phone,   currentBank,job,  netSalary,  basicSalary,birthMonth,  birthYear,  startWorkMonth ,startWorkYear, housingSupport ,currentMonth ,currentYear) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [name, phone,   currentBank ,job,  netSalary,  basicSalary,birthMonth,  birthYear,  startWorkMonth ,startWorkYear, housingSupport,currentMonth,currentYear],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("You have registered successfully!");
      }
    }
  );
});                                                                    
  
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
  
app.get("/userdetails/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
 
app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  db.query(
    "UPDATE users SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
 


app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const q = " DELETE FROM users WHERE id = ? ";
 
  db.query(q, [userId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});



//app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
//})
  
app.listen(8090, () => {
  console.log("Yey, your server is running on port 3001");
});


























//عرض النسب من الداتا بيس 
const db2=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"alahli"
  

})

app.get('/profit',(req,res)=>{
    const sql2 = "SELECT * FROM  profit"
    db2.query(sql2 ,(err , data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})


app.listen(8082,()=>{
    console.log("listening")
})
