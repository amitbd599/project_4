import cogoToast from "cogo-toast";
let gmailRegx = /^[\w-\.]+@+gmail+[\w-\.]{2,4}$/;
let emailRegx = /^[\w-\.]+@+gmail+[\w-\.]{2,4}$/;
class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsGmail(value) {
    return !gmailRegx.test(value);
  }
  IsEmail(value) {
    return !emailRegx.test(value);
  }
  ErrorTost(msg) {
    cogoToast.error(msg, { position: "bottom-center" });
  }
  SuccessTost(msg) {
    cogoToast.success(msg, { position: "bottom-center" });
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  }
}

export const { IsEmpty, IsGmail, IsEmail, ErrorTost, SuccessTost } =
  new FormHelper();
