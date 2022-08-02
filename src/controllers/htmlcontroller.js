import path from 'path';

export const getresetPassword = async (req, res) => {
  res.sendFile(path.join(__dirname, '../views/reset-password.html'));
};
