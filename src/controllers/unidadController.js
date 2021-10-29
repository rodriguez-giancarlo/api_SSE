const controller={};

controller.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM unidad WHERE idCurso= ?',[req.params.idcurso],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};
controller.infoUnidad=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM unidad WHERE idUnidad= ?',[req.params.idUnidad],(err,rows)=>{
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
        conn.query('INSERT INTO unidad set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('unidad guardado!!')
        })
    })
}

controller.eliminar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM unidad WHERE idunidad= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('unidad eliminado!!')
        })
    })
}

controller.actualizar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE unidad set ? WHERE idCurso=? and idUnidad= ?',[req.body,req.params.idCurso,req.params.idUnidad],(err,rows)=>{
            if(err) return res.send(err)

            res.send('unidad actualizado!!')
        })
    })
}

module.exports=controller;