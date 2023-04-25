export const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

export const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

export const handleFulfilled = (state, action) => {
  state.loading = false;
  state.error = false;
  state.info = action.payload;
};