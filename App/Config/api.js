import md5 from 'md5';

const ts = Date.now().toString();
const publicKey = '17e400963766f32603136f4e9f9f081a';
const privateKey = '15bc93f21f8b5f497258e868feeeeaf0bf0f528f';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;