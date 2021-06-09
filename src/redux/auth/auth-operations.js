import firebase from '../../firebase/config';
import registerUser from './auth-reducer';

export const authRegisterUser = ({
  email,
  password,
  name,
}) => async dispatch => {
  const user = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  const newUser = {
    email: user.email,
    userId: user.uid,
  };

  // dispatch(registerUser(newUser));

  console.log(newUser);
};
