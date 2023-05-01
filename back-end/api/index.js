import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "db4free.net",
  user: "llucasgomes",
  password: "_*W5DvSvT2$mvmW",
  database: "portiflio",
  port: 3306,
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sucesso!",
  });
});

// MOSTRAR PROFILE ===========================
app.get("/profile", (req, res) => {
  const q = "SELECT * FROM profile";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// CRIAR PROFILE ==========================
app.post("/profile", (req, res) => {
  const q =
    "INSERT INTO profile(`image`, `name`, `middle_name`, `last_name`, `birthday`, `job`, `phone`, `email`) VALUES (?)";

  const values = [
    req.body.image,
    req.body.name,
    req.body.middle_name,
    req.body.last_name,
    req.body.birthday,
    req.body.job,
    req.body.phone,
    req.body.email,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
// EDITAR PROFILE ==========================
app.put("/profile/:id", (req, res) => {
  const profileId = req.params.id;
  const q =
    "UPDATE profile SET `image`= ?, `name`= ?, `middle_name`= ?, `last_name`= ?, `birthday`= ?, `job`= ?, `phone`= ?, `email`= ? WHERE id = ?";

  const values = [
    req.body.image,
    req.body.name,
    req.body.middle_name,
    req.body.last_name,
    req.body.birthday,
    req.body.job,
    req.body.phone,
    req.body.email,
  ];

  db.query(q, [...values, profileId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE PROFILE ==========================
app.delete("/profile/:id", (req, res) => {
  const usersId = req.params.id;
  const q = " DELETE FROM profile WHERE image = ? ";

  db.query(q, [usersId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// =========================================================================

// CRIAR HABILIDADE ==========================
app.post("/skills", (req, res) => {
  const q = "INSERT INTO skills(`image`, `title`, `description`) VALUES (?)";

  const values = [req.body.image, req.body.title, req.body.description];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// MOSTRAR HABILIDADES ===========================
app.get("/skills", (req, res) => {
  const q = "SELECT * FROM skills";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// =========================================================================
// CRIAR EDUCATION ===========================
app.post("/education", (req, res) => {
  const q =
    "INSERT INTO education (`course`,`start_date`,`end_date`,`description`) VALUES (?)";
  const values = [
    req.body.course,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// MOSTRAR EDUCATION ===========================
app.get("/education", (req, res) => {
  const q = "SELECT * FROM education";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// EDITAR EDUCATION ==========================
app.put("/education/:id", (req, res) => {
  const educationId = req.params.id;
  const q =
    "UPDATE education SET `course`= ?, `start_date`= ?, `end_date`= ?, `description`= ? WHERE id = ?";

  const values = [
    req.body.course,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];

  db.query(q, [...values, educationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE EDUCATION ==========================
app.delete("/education/:id", (req, res) => {
  const educationId = req.params.id;
  const q = " DELETE FROM education WHERE id = ? ";

  db.query(q, [educationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// =========================================================================
// CRIAR EXPERIENCE ===========================
app.post("/experience", (req, res) => {
  const q =
    "INSERT INTO experience (`company`,`office`,`start_date`,`end_date`,`description`) VALUES (?)";
  const values = [
    req.body.company,
    req.body.office,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// MOSTRAR EXPERIENCE ===========================
app.get("/experience", (req, res) => {
  const q = "SELECT * FROM experience";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// EDITAR EXPERIENCE ==========================
app.put("/experience/:id", (req, res) => {
  const educationId = req.params.id;
  const q =
    "UPDATE experience SET `company`= ?,`office`= ?, `start_date`= ?, `end_date`= ?, `description`= ? WHERE id = ?";

  const values = [
    req.body.company,
    req.body.office,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];

  db.query(q, [...values, educationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE EXPERIENCE ==========================
app.delete("/experience/:id", (req, res) => {
  const experienceId = req.params.id;
  const q = " DELETE FROM experience WHERE id = ? ";

  db.query(q, [experienceId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// =========================================================================
// CRIAR PROJECT ===========================
app.post("/project", (req, res) => {
  const q =
    "INSERT INTO projects (`image`,`title`,`description`,`github`,`page`) VALUES (?)";
  const values = [
    req.body.image,
    req.body.title,
    req.body.description,
    req.body.github,
    req.body.page,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// MOSTRAR PROJECT ===========================
app.get("/project", (req, res) => {
  const q = "SELECT * FROM projects";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// EDITAR PROJECT ==========================
app.put("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const q =
    "UPDATE projects SET `image`= ?,`title`= ?, `description`= ?, `github`= ?, `page`= ? WHERE id = ?";

  const values = [
    req.body.image,
    req.body.title,
    req.body.description,
    req.body.github,
    req.body.page,
  ];

  db.query(q, [...values, projectId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE PROJECT ==========================
app.delete("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const q = " DELETE FROM projects WHERE id = ? ";

  db.query(q, [projectId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});



app.listen(3000);
