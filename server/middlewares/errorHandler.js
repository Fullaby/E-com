const errorHandler= async(error,req,res,next)=>{
    console.log(error);
    if(error.name== 'SequelizeValidationError' || error.name== 'SequelizeUniqueConstraintError'){
      res.status(400).json({
          message: error.errors[0].message
      })
    }else if(error.name== 'TypeError'){
      res.status(400).json({
          message: 'Invalid username/password'
      })
    }else if(error.code==1){
    res.status(401).json({
        message: 'Invalid username/password'
    })
    }else if(error.code==2){
      res.status(404).json({
          message: 'Product not found'
      })
      }else{
    res.status(500).json({
        message: 'Internal server error'
    })
  }
}

module.exports=errorHandler