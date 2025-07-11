let InitialState = {
  lang: "en",
  isLoading: false,
};

export default function languageReducer(state = InitialState, action) {
  console.log(action.payload) 
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };

    case "CHANGE_LOADING_STATE":
  console.log(action.payload) 
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
