import { baseColumnModel } from "@/components/ui/Table/Table.interface";
import translate from "@/assets/translate/translate.json";
export const useInfoColumn: baseColumnModel[] = [
  {
    key: "userId",
    name: "userId",
    header: translate.USER_COL_HEADER.USER_ID,
  },
  {
    key: "fullName",
    name: "fullName",
    header: translate.USER_COL_HEADER.FULL_NAME,
  },

  {
    key: "education",
    name: "education",
    header: translate.GENERAL.EDUCATIONS,
  },

  {
    key: "status",
    name: "status",
    header: translate.GENERAL.STATUS,
  },
];
