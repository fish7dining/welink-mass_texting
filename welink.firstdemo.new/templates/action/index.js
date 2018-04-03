const receiveData = (response) => ({
  type: 'RECEIVE_DEMO_DATA',
  data: response
});

export const getData = () => async (dispatch, getState) => {
  try {
    const url = '';
    const response = await window.HWH5.fetch(url).then((res) =>
      res.json().then((reply) => reply).catch((error) => {
        console.log(error);
      }));
    await dispatch(receiveData(response));
    return response;
  } catch (error) {
    console.log('error: ', error);
    return error;
  }
};
