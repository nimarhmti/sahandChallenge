import { baseColumnModel } from "@/components/ui/Table/Table.interface";
import translate from "@/assets/translate/translate.json";
export const useInfoColumn: baseColumnModel[] = [
  {
    key: "id",
    name: "id",
    header: "",
  },
  {
    key: "icon",
    name: "icon",
    header: "",
  },
  {
    key: "fullName",
    name: "fullName",
    header: translate.USER_COL_HEADER.FULL_NAME,
  },

  {
    key: "userId",
    name: "userId",
    header: translate.USER_COL_HEADER.USER_ID,
  },
  {
    key: "birthday",
    name: "birthday",
    header: translate.USER_COL_HEADER.BIRTHDAY,
  },
  {
    key: "telephone",
    name: "telephone",
    header: translate.USER_COL_HEADER.TELEPHONE,
  },
  {
    key: "phoneNumber",
    name: "phoneNumber",
    header: translate.USER_COL_HEADER.PHONE_NUMBER,
  },
  {
    key: "email",
    name: "email",
    header: translate.USER_COL_HEADER.EMAIL,
  },
  {
    key: "country",
    name: "country",
    header: translate.USER_COL_HEADER.COUNTRY,
  },
  {
    key: "state",
    name: "state",
    header: translate.USER_COL_HEADER.STATE,
  },
  {
    key: "createDate",
    name: "createDate",
    header: translate.USER_COL_HEADER.CRATE_DATE,
  },
];
