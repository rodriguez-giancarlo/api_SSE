const controller={};

controller.guardar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('INSERT INTO historial set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('historial guardado!!')
        })
    })
}

module.exports=controller;