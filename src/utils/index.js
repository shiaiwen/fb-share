export function isPhoneNumber(phoneNumber) {
    // 正则表达式验证手机号
    const regExp = /^1[3-9]\d{9}$/;
    return regExp.test(phoneNumber);
}