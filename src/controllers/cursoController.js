const controller={};

controller.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM curso WHERE idpersona=?',[req.params.idpersona],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};
controller.listarMatriculado=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT C.idCurso,C.nombre,P.nombre,P.apellido,P.urlFoto,P.email FROM curso C INNER JOIN matricula M ON C.idCurso=M.idCurso INNER JOIN persona P ON M.idpersona=P.idpersona WHERE C.idCurso=?',[req.params.idcurso],(err,rows)=>{
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
        conn.query('INSERT INTO curso set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('curso guardado!!')
        })
    })
}

controller.eliminar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM curso WHERE idcurso= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('curso eliminado!!')
        })
    })
}

controller.edit=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('SELECT * FROM curso WHERE idcurso= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}

controller.actualizar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE curso set ? WHERE idcurso= ?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('curso actualizado!!')
        })
    })
}

controller.buscar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM curso WHERE clave=?',[req.params.clave],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};

controller.infoCurso=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM curso WHERE idcurso=?',[req.params.idcurso],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};

module.exports=controller;