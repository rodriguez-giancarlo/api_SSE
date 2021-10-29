const controller={};

controller.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT C.idCurso,C.nombre,C.descripcion FROM persona P INNER JOIN matricula M ON P.idpersona = M.idpersona INNER JOIN curso C ON M.idCurso = C.idCurso WHERE P.idpersona=?',[req.params.id],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};
controller.buscar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT M.idUsuCurso,P.idpersona,P.nombre,C.idCurso,C.nombre FROM persona P INNER JOIN matricula M ON P.idpersona = M.idpersona INNER JOIN curso C ON M.idCurso = C.idCurso WHERE P.idpersona=? and C.idCurso=?',[req.params.idpersona,req.params.idcurso],(err,rows)=>{
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
        conn.query('INSERT INTO matricula set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('matricula guardado!!')
        })
    })
}

controller.eliminar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM matricula WHERE idmatricula= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('matricula eliminado!!')
        })
    })
}

controller.edit=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('SELECT * FROM matricula WHERE idmatricula= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}

controller.actualizar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE matricula set ? WHERE idmatricula= ?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('matricula actualizado!!')
        })
    })
}

module.exports=controller;