class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong!",
        error=[],
        stack=""
    ){
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.error = error
        this.success = false
        if(this.stack){
            this.stack = stack
        }else{
            Error.captureStackTree(this, this.stack)
        }
    }
}

export default ApiError;