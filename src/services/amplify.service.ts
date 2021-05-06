import Amplify, {Auth, API} from 'aws-amplify';


import {AmplifyAuthObjectInterface} from "../interface/amplifyAuthObject.interface";

export class AmplifyService {


    constructor(authObject: AmplifyAuthObjectInterface) {


        const awsConfig = {
            // Auth: {
            //     identityPoolId: authObject.identityPoolId,
            //     region: authObject.region,
            //     userPoolId: authObject.userPoolId,
            //     userPoolWebClientId: authObject.userPoolWebClientId
            // },
            Auth: {
                identityPoolId: 'us-west-2:155340ca-4c0e-4142-8306-d24953f5174b',
                region: 'us-west-2',
                userPoolId: 'us-west-2_2vGrZ7YWB',
                userPoolWebClientId: '6j7ntpt10eeqobemntjevia4nq'
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
