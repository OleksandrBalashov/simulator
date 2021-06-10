import firebase from '../../firebase/config';
import currentUser from './auth-reducer';

export const registerUser = ({ email, password, name }) => async dispatch => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const newUser = {
      email: user.email,
      userId: user.uid,
      name: user.name,
    };

    // dispatch(currentUser(newUser));

    console.log(newUser);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const loginUser = ({ email, password }) => async dispatch => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    // dispatch(currentUser(newUser));
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};
