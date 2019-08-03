const User = require('../models/User');

exports.verifyEmail = async(resolve, parent, args) => {
  try {
      const verify = await User.findOne({email: args.email});
    if (!verify){
      const message = 'sorry your account could not be found';
      throw new Error(message);
    }
    return resolve({userInfo: verify});
  } catch (error) {
      throw new Error(error);
  }
}

exports.verifyAuthentication = async(resolve, parent, args, ctx) => {
  try {
  //  return resolve();
  const {id} =ctx;
  const find = await User.findById(id);
  if(!find) {
    throw new Error(JSON.stringify('sorry, you must be authenticated to perform this action'));
  }
  const user = ctx;
  return resolve({user});
  } catch (error) {
    throw new Error(error)
  }
}