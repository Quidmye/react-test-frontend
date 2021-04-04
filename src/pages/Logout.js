import { logout, useAuthDispatch } from '../context';

const Logout = () => {
  const dispatch = useAuthDispatch();
  logout(dispatch);
  window.location = '/';
  return null;
};

export default Logout;
