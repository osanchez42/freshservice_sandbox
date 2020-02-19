$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
                //set the value of each text field in the form to its respective iparams value
                try {
                    //device42_base_url
                    client.iparams.get("device42_base_url")
                        .then(
                            function(data) { //success
                                document.getElementById("device42_base_url").value = data["device42_base_url"];
                            },
                            function (err) { //failure
                                //todo: log that there was a failure to retrieve the respective param
                            }
                        );
                    //device42_cloud_connector_url
                    client.iparams.get("device42_cloud_connector_url")
                        .then(
                            function(data) {
                                document.getElementById("device42_cloud_connector_url").value = data["device42_cloud_connector_url"];
                            },
                            function(err) {

                            }
                        );
                    //device42_username
                    client.iparams.get("device42_username")
                        .then(
                            function(data) {
                                document.getElementById("device42_username").value = data["device42_username"];
                            },
                            function(err) {

                            }
                        );
                    //device42_password
                    client.iparams.get("device42_password")
                        .then(
                            function(data) {
                                document.getElementById("device42_password").value = data["device42_password"];
                    },
                            function(err) {

                            }
                    );
                    //device42_verification_token
                    client.iparams.get("device42_verification_token")
                        .then(
                            function(data) {
                                document.getElementById("device42_verification_token").value = data["device42_verification_token"];
                            },
                            function(err) {

                            }
                        );
                }
                catch (err) {
                    //todo: log that there was an error using the client side api for retrieving iparams
                    alert(err);
                }
            });
        });
});
