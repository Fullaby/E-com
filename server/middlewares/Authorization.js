const Authorization= async (req,res,next)=>{
    try {
        const {id}= req.params
        if(req.user.role == 'Admin'){
            next()
        }else{
            throw{code:7}
        }
    } catch (error) {
        next(error)
    }
}

