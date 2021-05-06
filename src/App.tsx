import React, {useState} from 'react';
import './App.css';
import {AmplifyAuthObjectInterface} from "./interface/amplifyAuthObject.interface";
import {AmplifyService} from "./services/amplify.service";


function App() {


    //should save them locally
    const initAmplify = () => {

        try {
            console.log(cognitoConfiguration);
            const amplifyService = new AmplifyService(cognitoConfiguration);
            const authInstanceRes = amplifyService.getAuthInstance();
            const apiInstanceRes = amplifyService.getApiInstance()
            setAuthInstance(authInstanceRes);
            setApiInstance(apiInstanceRes);

        } catch (e) {
            console.log(e);

        }
    }

    const login = async () => {
        if (authInstance) {
            const res = await authInstance.signIn(userCredentials.username, userCredentials.password);
            if (res['challengeName'] === "NEW_PASSWORD_REQUIRED") {
                const {requiredAttributes} = res.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
                const challengeRes =await authInstance.completeNewPassword(res, 'ABcD12#$%^',{
                    email: 'm.dekmak@zeroandone.me',
                });
                console.log('chalenge res : ')
                console.log(challengeRes)

            } else {
                console.log(res);
                alert(res);
            }


        } else {
            console.log('init auth instace')
            alert('init auth instace')
        }
        console.log(userCredentials)
    }

    const getUserTOken = async () => {
        try {
            const res = await authInstance.currentAuthenticatedUser();
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    const callApi = async () => {
        const apiName = 'connecto-demo';
        const path = '/api/books/header';
        const myInit = { // OPTIONAL
            headers: {}, // OPTIONAL
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        };

        try {
            apiInstance.get(apiName, path, myInit)
                .then((data: any) => {
                    console.log(data)
                })
                .catch((err: any) => {
                    console.log(err);
                })

        } catch (e) {
            console.log(e)
        }


    }


    const [cognitoConfiguration, setCognitoConfiguration] = useState<AmplifyAuthObjectInterface>({
        identityPoolId: '',
        region: '',
        userPoolId: '',
        userPoolWebClientId: '',
    })

    const [authInstance, setAuthInstance] = useState<any>(null);
    const [apiInstance, setApiInstance] = useState<any>(null);

    const [userCredentials, setUserCredentials] = useState({
        username: '',
        password: ''
    })


    const [showCognitoConfigurationWindows, setShowCognitoConfigurationWindows] = useState(true)

    return (

        <div>
            <div className="cognit-configuraiton">

                <label htmlFor="">Identity Pool Id</label>
                <input type="text" value={cognitoConfiguration.identityPoolId} onChange={(e) => {
                    setCognitoConfiguration(
                        {
                            ...cognitoConfiguration,
                            identityPoolId: e.target.value
                        }
                    )
                }}/>
                <br/>
                <label htmlFor="">Region</label>
                <input type="text" value={cognitoConfiguration.region} onChange={(e) => {
                    setCognitoConfiguration(
                        {
                            ...cognitoConfiguration,
                            region: e.target.value
                        }
                    )
                }}/>
                <br/>
                <label htmlFor="">User Pool Id</label>
                <input type="text" value={cognitoConfiguration.userPoolId} onChange={(e) => {
                    setCognitoConfiguration(
                        {
                            ...cognitoConfiguration,
                            userPoolId: e.target.value
                        }
                    )
                }}
                />
                <br/>
                <label htmlFor="">Client Id</label>
                <input type="text" value={cognitoConfiguration.userPoolWebClientId} onChange={(e) => {
                    setCognitoConfiguration(
                        {
                            ...cognitoConfiguration,
                            userPoolWebClientId: e.target.value
                        }
                    )
                }}/>


                <button onClick={() => {
                    initAmplify();
                }}>configure
                </button>


            </div>

            <hr/>

            <div className="auth-window">

                <label htmlFor="">UserName</label>
                <input type="text" value={userCredentials.username} onChange={(e) => {
                    setUserCredentials(
                        {
                            ...userCredentials,
                            username: e.target.value
                        }
                    )
                }}/>
                <br/>


                <label htmlFor="">Password</label>
                <input type="text" value={userCredentials.password} onChange={(e) => {
                    setUserCredentials(
                        {
                            ...userCredentials,
                            password: e.target.value
                        }
                    )
                }}/>
                <br/>

                <button onClick={() => {
                    login()
                }}> login
                </button>

                <button onClick={() => {
                    getUserTOken()
                }}> get user token
                </button>

            </div>

            <div className="call-api">
                <label htmlFor="">API</label>
                <input type="text"/>

                <button onClick={() => {
                    callApi()
                }}>Call API
                </button>


            </div>

        </div>


    );
}

export default App;
