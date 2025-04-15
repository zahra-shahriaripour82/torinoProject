import { object, string } from "yup";
import { isValidAccount, isValidIranCard, isValidIranIBAN } from "../utils/validation";
// .test(
//   "is-valid-card",
//   "شماره کارت معتبر نیست",
//   (value) => isValidIranCard(value)
// ),
const bankAccountSchema = object({
  debitCard_code: string().required('شماره کارت را وارد کنید').length(16, 'شماره کارت باید 16 رقم باشد'),
  shaba_code: string().required('شماره شبا را وارد کنید').length(24, 'شماره شبا باید 24 رقم باشد'),
  accountIdentifier: string().required('شماره حساب را وارد کنید').length(10, 'شماره حساب باید 10 رقم باشد'),
});

export { bankAccountSchema };