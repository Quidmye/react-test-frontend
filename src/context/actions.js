export function loginUser(dispatch, response) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });

    if (response.data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      return response.data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: response.errors[0] });
    return response;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error });
  }
  return false;
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
