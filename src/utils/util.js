const getErrorMessage = (error) => {
    
    switch(error.name) {
        case 'ValidationError':
            debugger
            console.log('Error from back-end is:', error.message)
            return Object.values(error.errros).at(0).message

        default:
            console.log('Error from getErrorMessage is:', error.message)
            return 'Error from Back-End is:', error.message
    }
}

export default getErrorMessage