// callbackHell and pyramid of doom
function learderDashboard(id, callback) {
    let error;
    setTimeout(() => {
        if(error){
            return callback(error);
        }
        console.log("Fetching the user data");

        setTimeout(() => {
            if(error){
                return callback(error);
            }
            console.log("Fetching the user friendlist");

            setTimeout(() => {
                // error = "Post fetching error";
                if(error){
                    return callback(error);
                }
                console.log("Fetching the user post");
            },2000);
        },2000);
    },2000);
}

function errorHandler(error){
    console.log("Error has occured");
}

learderDashboard("101", errorHandler);