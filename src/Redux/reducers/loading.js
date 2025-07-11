let InitialState = {
  isLoading: false,
};

export default function loadingReducer(state = InitialState, action) {
  switch (action.type) {
    case "CHANGE_LOADING_STATE":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
