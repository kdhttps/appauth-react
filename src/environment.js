const dev = {
    clientId: 'xGZxEAJhzlkuQUlWl90y1ntIX-0UDWHx',
    OPServer: 'https://kdhttps.auth0.com',
    redirectURL: 'http://localhost:4200/callback',
    scope: 'openid email profile',
    userInfoEndpoint: '/userinfo',
    extra: {prompt: 'consent', access_type: 'offline'}
};

const prod = {

};

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    // Add common config values here
    ...config
};
