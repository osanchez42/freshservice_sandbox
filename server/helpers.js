var util = require('./lib/util');

var urlConstants = {
    protocol : "https://",
    fs_domain_suffix : ".freshservice.com",
    fd_domain_suffix : ".freshdesk.com",
    ticket_url : "/api/v2/tickets/",
    ticket_status_url : "/api/v2/ticket_fields?type=default_status",
    notes : "/notes"
};

var dataConstants = {
    info : "info",
    error : "error",
};

function printLog(type, msg, data) {
    if (type === dataConstants.info) {
        if (data !== undefined) {
            console.info("Info : " + msg + " - " + data);
        } else {
            console.info("Info : " + msg);
        }
    } else if (type === dataConstants.error) {
        console.error("Error : " + msg + " - " + data);
    }
}

function postRequestAPI(url, options, operation) {
    printLog(dataConstants.info, "Post url", url);
    return new Promise((resolve, reject) => {
        $request.post(url, options)
            .then(
                function(data) {
                    resolve(data);
                },
                function(e) {
                    printLog(dataConstants.error, operation, JSON.stringify(e));
                    reject(e);
                }
            );
    });
}

function getRequestApi(url, args, operation) {
    printLog(dataConstants.info, "Get url", url);
    return new Promise((resolve, reject) => {
        $request.get(url, {
            headers: { 'Authorization': util.getFsAPIKey(args) }
        })
            .then(
                function(data) {
                    resolve(data);
                },
                function(e) {
                    printLog(dataConstants.error, operation, JSON.stringify(e));
                    reject(e);
                }
            );
    });
}