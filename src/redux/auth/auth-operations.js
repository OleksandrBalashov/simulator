import firebase from '../../firebase/config';
import { setError } from '../error/error-reducer';
import { isLoading } from '../loader/loader-reducer';
import { setCurrentUser } from './auth-reducer';
import { authSignOut } from '../auth/auth-reducer';

const errorReset = dispatch => setTimeout(() => dispatch(setError(null)), 3000);

export const authSignUpUser = ({ email, password, name }) => async dispatch => {
  try {
    dispatch(isLoading());
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    const user = await firebase.auth().currentUser;

    await user.updateProfile({
      displayName: name,
    });

    const { displayName, uid } = user;

    const newUser = {
      name: displayName,
      email,
      userId: uid,
    };

    dispatch(setCurrentUser(newUser));
  } catch (error) {
    dispatch(setError(error.message));
    errorReset(dispatch);
  } finally {
    dispatch(isLoading());
  }
};

export const authStateChangeUser = () => dispatch => {
  try {
    dispatch(isLoading());
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, uid } = user;

        const currentUser = {
          name: displayName,
          email,
          userId: uid,
        };

        dispatch(setCurrentUser(currentUser));
      } else {
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(isLoading());
  }
};

export const authSignInUser = ({ email, password }) => async dispatch => {
  try {
    dispatch(isLoading());
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const { displayName, uid } = userCredential.user;

    const currentUser = {
      name: displayName,
      email,
      userId: uid,
    };

    dispatch(setCurrentUser(currentUser));
  } catch (error) {
    dispatch(setError(error.message));
    errorReset(dispatch);
  } finally {
    dispatch(isLoading());
  }
};

export const authWithGoogle = () => dispatch => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const { displayName, email, uid } = result.user;

        const currentUser = {
          name: displayName,
          email,
          userId: uid,
        };

        dispatch(setCurrentUser(currentUser));
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    console.log(error);
  }
};

export const authLogOut = () => async dispatch => {
  try {
    await firebase.auth().signOut();

    dispatch(authSignOut());
  } catch (error) {
    console.log(error);
  }
};
