import { object, string, date } from "yup";
import {
  isValidAccount,
  isValidIranCard,
  isValidIranIBAN,
} from "../utils/validation";
// .test(
//   "is-valid-card",
//   "شماره کارت معتبر نیست",
//   (value) => isValidIranCard(value)
// ),
const bankAccountSchema = object({
  debitCard_code: string()
    .required("شماره کارت را وارد کنید")
    .length(16, "شماره کارت باید 16 رقم باشد"),
  shaba_code: string()
    .required("شماره شبا را وارد کنید")
    .length(24, "شماره شبا باید 24 رقم باشد"),
  accountIdentifier: string()
    .required("شماره حساب را وارد کنید")
    .length(10, "شماره حساب باید 10 رقم باشد"),
});
const personalDataSchema = object({
  firstName: string().required("نام خود را وارد کنید"),
  lastName: string().required("نام خانوادگی خود را وارد کنید"),
  nationalCode: string()
  .required("کد ملی خود را وارد کنید")
  .length(10, "کد ملی باید 10 رقم باشد"),
  birthDate: date().required("تاریخ تولد خود را وارد کنید"),
  gender: string().required("جنسیت خود را انتخاب کنید"),
 
});

const accountInfoSchema = object({
  email: string()
    .required("ایمیل خود را وارد کنید")
    .email("فرمت ایمیل نامعتبر است"),
});

export { bankAccountSchema, accountInfoSchema, personalDataSchema };
