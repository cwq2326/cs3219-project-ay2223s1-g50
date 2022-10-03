import axios from 'axios';
import 'dotenv/config.js';

const ROLES = {
  Admin: 900,
  User: 100
};

const USER_SERVICE_URL = process.env.NODE_ENV === 'test'
  ? process.env.USER_SERVICE_LOCAL_URL
  : process.env.USER_SERVICE_PROD_URL;

const VERIFY_TOKEN_OR_ROLE_ROUTE = `${USER_SERVICE_URL}/verify-token-or-role`;

const validateAccessTokenAndRole = async (req, role) => {
  console.log('\nVALIDATING TOKEN AND ROLE BY CALLING USER SERVICE...');

  const data = {
    role,
  };

  const config = {
    headers: {
      'authorization': req.headers.authorization
    },
  };

  return await axios.post(VERIFY_TOKEN_OR_ROLE_ROUTE, data, config);
}

export default { ROLES, validateAccessTokenAndRole };
