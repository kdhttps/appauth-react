import React from 'react';

export const Profile = () => {
    return (
        <div className="container mt-3">
            <div className="card text-white bg-success mb-3">
                <div className="card-body">
                    <p className="card-text">Access Token: </p>
                    <h5 className="card-title">User info</h5>
                    <pre className="card-text">userInfo</pre>
                </div>
            </div>

            <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                    <h5 className="card-title">You are un authenticate!</h5>
                </div>
            </div>
        </div>

    );
}
