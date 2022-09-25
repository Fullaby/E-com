const errorHandler= async(error,req,res,next)=>{
    console.log(error);
  if(error.code==1){
    res.status(401).json({
        message: 'Invalid username/password'
    })
  }else if(error.name=='SequelizeValidationError'){
    res.status(400).json({
        message: error.errors[0].message
    })
  }else{
    res.status(500).json({
        message: 'Internal server error'
    })
  }
}

module.exports=errorHandler