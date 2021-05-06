import {AmplifyService} from "../../services/amplify.service";
import React, {useState} from "react";
import {AmplifyAuthObjectInterface} from "../../interface/amplifyAuthObject.interface";

function CognitoConfigurationWindow() {


    const initAmplify = () => {

        try {
            console.log(cognitoConfiguration);
            const amplifyService = new AmplifyService(cognitoConfiguration);
            const authInstance = amplifyService.getAuthInstance();

        } catch (e) {
            console.log(e);

        }
    }


    const [cognitoConfiguration, setCognitoConfiguration] = useState<AmplifyAuthObjectInterface>({
        identityPoolId: '',
        region: '',
        userPoolId: '',
        userPoolWebClientId: '',
    })
    
    return (

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


    );
}

export default CognitoConfigurationWindow
