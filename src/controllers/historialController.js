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
controller.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT H.idHistorial,H.fecha,H.tiempo,H.idpersona,R.nombre,P.nombre,P.apellido,P.urlFoto, COUNT(*) as visto, SUM(tiempo) as TiempoAcumulado FROM recurso R INNER JOIN historial H ON R.idRecurso=H.idRecurso INNER JOIN persona P ON H.idpersona=P.idpersona WHERE H.idRecurso=? GROUP BY H.idpersona;',[req.params.idRecurso],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};

controller.listarAlumnosMatriculadosXCurso=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT C.idCurso,C.nombre,COUNT(*) as matriculados FROM curso C INNER JOIN matricula M ON C.idCurso = M.idCurso WHERE C.idpersona=? GROUP BY C.idCurso UNION SELECT C.idCurso,C.nombre,COALESCE(M.idUsuCurso, 0) as matriculados FROM curso C LEFT JOIN matricula M ON C.idCurso = M.idCurso WHERE M.idUsuCurso IS NULL AND C.idpersona=?;',[req.params.idpersona,req.params.idpersona],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};

controller.listarXpersona=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT H.idHistorial,H.fecha,H.tiempo,H.idpersona,P.nombre,P.apellido,P.urlFoto FROM recurso R INNER JOIN historial H ON R.idRecurso=H.idRecurso INNER JOIN persona P ON H.idpersona=P.idpersona WHERE H.idRecurso=? AND H.idpersona=?;',[req.params.idRecurso,req.params.idpersona],(err,rows)=>{
            if(err){
                return res.json(err)
            } 
            res.json(rows)
        })
    })
};
module.exports=controller;