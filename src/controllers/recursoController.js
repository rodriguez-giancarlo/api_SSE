const controller={};

controller.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT R.idRecurso,R.nombre,R.fecha,R.archivo,R.idTema,R.estado,R.tipo,R.vigencia FROM curso C INNER JOIN unidad U ON C.idCurso=U.idCurso INNER JOIN tema T ON U.idUnidad=T.idUnidad INNER JOIN recurso R ON T.idTema=R.idTema WHERE C.idCurso= ?',[req.params.idCurso],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};

controller.guardar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('INSERT INTO recurso set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('recurso guardado!!')
        })
    })
}

controller.eliminar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM recurso WHERE idrecurso= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('recurso eliminado!!')
        })
    })
}

controller.edit=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('SELECT * FROM recurso WHERE idrecurso= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}

controller.actualizar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE recurso set ? WHERE idrecurso= ?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('recurso actualizado!!')
        })
    })
}

module.exports=controller;