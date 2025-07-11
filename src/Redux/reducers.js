
let InitialState = {
  lang: "en",
  commission: {
    it:0.55,
    cs:0.3,
    is:4
  }
}

export default function languageReducer(state=InitialState, action ){

  switch(action.type)
    {
      case "CHANGE_LANGUAGE":
        return {
          ...state,
          lang:action.payload
        }

        default:
          return state;
    }

}