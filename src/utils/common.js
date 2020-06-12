//手机格式校验
export function check_phone(phoneNum) {
  return /^1[3456789]\d{9}$/.test(phoneNum); //true
}
