export const selectIsitems = state => state.tasks;
export const selectIsitemsMain = state => state.tasks.items;
export const selectIsitemsToDo = state => state.tasks.todo;
export const selectIsitemsInProgress = state => state.tasks.inProgress;
export const selectIsitemsDone = state => state.tasks.done;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectIsError = state => state.tasks.error;
