export const generate_otp = (length: number = 6) => {
  let otp: string = "";

  while (otp.length < length) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
};

