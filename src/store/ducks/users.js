import { createActions, createReducer } from "reduxsauce";

export const { Creators, Types } = createActions({
  fetchUsers: ["page"],
  fetchUsersSuccess: ["users", "pagination"],
  fetchUsersError: [],
});

const INITIAL_VALUE = {
  data: [],
  userRepo: [],
  pagination: null,
  selectedUser: null,
  loading: false,
};

export default createReducer(INITIAL_VALUE, {
  [Types.FETCH_USERS]: (state) => ({
    ...state,
    loading: true,
  }),

  [Types.FETCH_USERS_SUCCESS]: (state, { users, pagination }) => ({
    ...state,
    data: users,
    pagination,
    loading: false,
  }),

  [Types.FETCH_USERS_ERROR]: (state) => ({
    ...state,
    loading: false,
  }),
});
