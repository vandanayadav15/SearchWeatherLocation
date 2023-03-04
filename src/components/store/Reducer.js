const initialState = {
  temperatureUnit: "Celsius",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEMPERATURE_UNIT":
      return {
        ...state,
        temperatureUnit: action.payload,
      };
    default:
      return state;
  }
};
