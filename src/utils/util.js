const getErrorMessage = (error) => {
    
    switch(error.name) {
        case 'ValidationError':
            console.log('Error from back-end is:', error.message)
            return Object.values(error.errros).at(0).message

        default:
            return 'Error from Back-End is:', error.message
    }
}

export default getErrorMessage