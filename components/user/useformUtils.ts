import translate from "@/assets/translate/translate.json";
import { userFomModel } from "./UserFrom.interface";
//form rules
export const formRules = {
  firstName: {
    required: true,
  },
  userId: {
    required: translate.GENERAL.VALIDATION,
    maxLength: {
      value: 10,
      message: translate.ERROR_MESSAGES.NATIONAL_CODE_LENGTH,
    },
    minLength: {
      value: 10,
      message: translate.ERROR_MESSAGES.NATIONAL_CODE_LENGTH,
    },
  },
  education: {
    required: true,
  },
  status: {
    required: true,
  },
};
//form initial values
export const initialValue: userFomModel = {
  firstName: "",
  lastName: "",
  userId: 0,
  education: translate.DEGREES.BACHELOR,
  status: translate.STATUS.ACTIVE,
};
//alert dialog
export interface alertDetails {
  isError: boolean;
  open: boolean;
  message: string;
}
export const alertInitialValues = {
  isError: false,
  message: "",
  open: false,
};
