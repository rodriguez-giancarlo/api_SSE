const controller={};

controller.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM persona',(err,rows)=>{
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
        // const data=res.body
        conn.query('INSERT INTO persona set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('persona guardado!!')
        })
    })
}

controller.eliminar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM persona WHERE idpersona= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('persona eliminado!!')
        })
    })
}

controller.edit=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('SELECT * FROM persona WHERE idpersona= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}

controller.actualizar=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE persona set ? WHERE idpersona= ?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('persona actualizado!!')
        })
    })
}

controller.buscar=(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query("SELECT * FROM PERSONA WHERE email= ?", [req.params.email],(err,rows)=>{
            if(err) return res.send('No encontrado')
            res.json(rows)
        })    
    })
}


controller.buscarId=(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query("SELECT * FROM PERSONA WHERE googleId= ?", [req.params.googleId],(err,rows)=>{
            if(err) return res.send('No encontrado')
            res.json(rows)
        })    
    })
}
module.exports=controller;