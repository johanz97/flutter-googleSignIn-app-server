

const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '633764290560-0thq48hcmun33htnsomtdtmnf2kq1jn0.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '633764290560-qmbd823b3ns066li2ffiercteod8ekc0.apps.googleusercontent.com'
            ],
        });
        const payload = ticket.getPayload();
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email']
        }
    } catch (error) {
        return null;
    }

}

module.exports = {
    validarGoogleIdToken
}