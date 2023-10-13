const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    // CRIANDO TABELA
    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );   
    `)
    
    // INSERINDO DADO NA TABELA
    // const query = `
    // INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES (?,?,?,?,?);
    // `

    // const values = [
    //     "coding.png",
    //     "Cursos de Programação",
    //     "Estudo",
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, praesentium consectetur.",
    //     "https://rocketseat.com.br"
    // ]
    // db.run(query, values, function(err) {
    //    if (err) return console.log(err)

    //    console.log(this)
    // })

    //DELETAR UM DADO DA TABELA
    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    //     if (err) return console.log(err)

    //     console.log('deletei', this)
    // })

    // CONSULTAR DADO NA TABELA
    // db.all(`SELECT * FROM ideas`, function(err, rows) {
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })


})

module.exports = db