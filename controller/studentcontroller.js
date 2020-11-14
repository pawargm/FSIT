const con = require('../configuration/mysql-config')
exports.getStudents = (req, res, next) => {
    con.query("select * from students", (err, rows) => {
        if (err) throw err
        res.status(200).json(rows)
    })
}

exports.createStudents = (req, res, next) => {
    const name = req.body.name;
    res.status(200).json({ msg: "student created" });
}

exports.getStudent = (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ sid: id });
}