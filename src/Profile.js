import React, { useState, useEffect } from 'react';
import environment from './environment';

const fetchUserInfo = async (token) => {
    const res = await fetch(`${environment.OPServer}${environment.userInfoEndpoint}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return res.json();
};

export const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchToken = localStorage.getItem('access_token');
        fetchUserInfo(fetchToken)
            .then((info) => {
                console.log(info);
                setUserInfo(info);
            })
        return () => {
        }
    }, [])

    const DisplayUserInfo = () => {
        return (
            <div className="card text-white bg-success mb-3">
                <div className="card-body">
                    <h5 className="card-title">Userinfo</h5>
                    <p className="card-text">{JSON.stringify(userInfo)}</p>
                </div>
            </div>
        )
    };

    const UnAuthorized = () => {
        return (
            <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                    <h5 className="card-title">You are un authenticate!</h5>
                </div>
            </div>
        )
    };

    return (
        <div className="container mt-3">
            { userInfo ? <DisplayUserInfo /> : <UnAuthorized /> }
        </div>
    );
}
