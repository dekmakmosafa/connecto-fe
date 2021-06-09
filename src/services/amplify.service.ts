import Amplify, {Auth, API} from 'aws-amplify';


import {AmplifyAuthObjectInterface} from "../interface/amplifyAuthObject.interface";

export class AmplifyService {


    constructor(authObject: AmplifyAuthObjectInterface) {


        const awsConfig = {
            Auth: {
                identityPoolId: authObject.identityPoolId,
                region: authObject.region,
                userPoolId: authObject.userPoolId,
                userPoolWebClientId: authObject.userPoolWebClientId
            },

            API: {
                endpoints: [
                    {
                        name: "connecto-demo",
                        endpoint: "https://pjhz74xgoi.execute-api.us-west-2.amazonaws.com",

                    }
                ]
            }

        };

        Amplify.configure(awsConfig);

    }

    getAuthInstance() {
        return Auth;
    }

    getApiInstance() {
        return API;
    }

}
