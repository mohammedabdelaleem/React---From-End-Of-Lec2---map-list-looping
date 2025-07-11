let InitialState = {
  lang: "en",
};

export default function languageReducer(state = InitialState, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      }

    default:
      return state;
  }
}
