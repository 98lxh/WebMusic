import actionTypes from "./constant";
export const changeThemeDrakAction = (isDark: boolean) => ({
  type: actionTypes.CHANGE_DARK,
  themeDark: isDark,
});
