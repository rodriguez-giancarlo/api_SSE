const controller={};

controller.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT U.idUnidad,M.idTema,M.nombre,M.vigencia FROM unidad U INNER JOIN tema M ON U.idUnidad = M.idUnidad WHERE U.idCurso=?",[req.params.idCurso],(err,rows)=>{
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
        conn.query('INSERT INTO tema set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('tema guardado!!')
        })
    })
}

controller.eliminar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM tema WHERE idtema= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('tema eliminado!!')
        })
    })
}

controller.actualizar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE tema set ? WHERE idtema= ?',[req.body,req.params.idTema],(err,rows)=>{
            if(err) return res.send(err)

            res.send('tema actualizado!!')
        })
    })
}

module.exports=controller;