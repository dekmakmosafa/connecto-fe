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
                identityPoolId: 'eu-west-1:789c9be2-6296-4701-8f69-d38a7d97327b',
                region: 'eu-west-1',
                userPoolId: 'eu-west-1_LakiiLygV',
                userPoolWebClientId: '5rs1rgr4vt147pkgnlln348brb'
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
