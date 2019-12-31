import React, {useState} from 'react';
import {
    AuthorizationServiceConfiguration,
    AuthorizationRequest, RedirectRequestHandler,
    FetchRequestor, LocalStorageBackend, DefaultCrypto
} from '@openid/appauth';
import {NoHashQueryStringUtils} from './noHashQueryStringUtils';
import environment from './environment';

export const Home = () => {
    const [error, setError] = useState(null);
    const authorizationHandler = new RedirectRequestHandler(new LocalStorageBackend(), new NoHashQueryStringUtils(), window.location, new DefaultCrypto());
    const redirect = () => {
        AuthorizationServiceConfiguration.fetchFromIssuer(environment.OPServer, new FetchRequestor())
            .then((response) => {
                const authRequest = new AuthorizationRequest({
                    client_id: environment.clientId,
                    redirect_uri: environment.redirectURL,
                    scope: environment.scope,
                    response_type: AuthorizationRequest.RESPONSE_TYPE_CODE,
                    state: undefined,
                    // extras: environment.extra
                });
                authorizationHandler.performAuthorizationRequest(response, authRequest);
            })
            .catch(error => {
                setError(error);
            });
    };

    return (
        <div className="container-fluid mt-3">
            {
                error && <div className="card text-white bg-danger mb-3">
                    <div className="card-body bg-danger">
                        <div className="card-body">
                            <p className="card-text">Error</p>
                        </div>
                    </div>
                </div>
            }

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Welcome !!!</h5>
                    <p className="card-text">Angular Demo Application protected by <a href="https://gluu.org"
                                                                                      rel="noopener noreferrer" target="_blank">Gluu
                        CE OpenID Connect</a> using <a href="https://github.com/openid/AppAuth-JS" rel="noopener noreferrer"
                                                       target="_blank">App Auth JS</a></p>
                    <button type="button" className="btn btn-primary" onClick={redirect}>Login</button>
                </div>
            </div>
        </div>
    )
};
