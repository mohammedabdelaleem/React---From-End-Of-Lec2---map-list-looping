// action take new data , returns {type + payload}

export function changeLanguage(data) {
  return {
    type: "CHANGE_LANGUAGE",
    payload: data,
  };
}

export function changeLoadingState(data) {
  return {
    type: "CHANGE_LOADING_STATE",
    payload: data,
  };
}
