import { createSelector } from "reselect";

const selectUser = state => state.user;

export const userDetail = createSelector(
    [selectUser] ,
    user => user.User
)


export const userName = createSelector(
    [userDetail] ,
    User => User.displayName,
)
