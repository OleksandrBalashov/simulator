import firebas from '../../firebase/config';

export const registerUser = ({ email, password, name }) => async dispatch => {
  const user = await firebas
    .auth()
    .createUserWithEmailAndPassword(email, password);

  console.log(user);
};
