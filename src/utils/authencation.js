export function user_Authencation() {
  const tokens = localStorage.getItem("_user_access_token");

  if (tokens !== null && tokens !== undefined && tokens !== "") {
    return true;
  } else {
    return false;
  }
}
function Authencation() {
  const isAdmin = localStorage.getItem("Admin");
  if (isAdmin !== null && isAdmin !== undefined && isAdmin !== "") {
    return true;
  } else {
    return false;
  }
}

export default Authencation;
