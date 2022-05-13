//send success response
module.exports.success = async (res, message, status = 1, statuscode = 200, data = null, extras = null) => {

    const response = {
        data,
        meta: { status, message }
    };

    if (extras) {
        Object.keys(extras).forEach((key) => {
            if ({}.hasOwnProperty.call(extras, key)) {
                response.meta[key] = extras[key];
            }
        });
    }
    return res.send(response);
}

//send error response
module.exports.error = async (res, message, statuscode = 500) => {
    const response = {
        statuscode,
        message
    };
    return res.status(statuscode).send(response);
}
