class SessionHelper {
  setToken(token) {
    localStorage.setItem("Token", token);
  }
  getToken() {
    return localStorage.getItem("Token");
  }
  setEmail(email) {
    localStorage.setItem("Email", email);
  }
  getEmail() {
    return localStorage.getItem("Email");
  }
  setPassword(password) {
    localStorage.setItem("Password", password);
  }
  getPassword() {
    return localStorage.getItem("Password");
  }
  setImg(img) {
    localStorage.setItem("img", img);
  }
  getImg() {
    return localStorage.getItem("img");
  }
  setUserDetails(userDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(userDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }
  removeSession() {
    localStorage.clear();
    window.location.href = "/login";
  }
}

export const {
  setToken,
  getToken,
  setEmail,
  getEmail,
  setImg,
  getImg,
  setPassword,
  getPassword,
  removeSession,
  setUserDetails,
  getUserDetails,
} = new SessionHelper();
