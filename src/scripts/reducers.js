const appDefaultState = {
  appName: 'Loom'
};

export function appReducer(state = appDefaultState, action = null) {

  var retVal;

  switch (action.type) {

    default:
      retVal = state;
      break;
  }

  return retVal;
}
