import { selectBoxItemModel } from "./UserFrom.interface";
import translate from "@/assets/translate/translate.json";
const { BACHELOR, DIPLOMA, DOCTORAL, HIGH_SCHOOL, MASTER } = translate.DEGREES;
const { ACTIVE, DISABLED } = translate.STATUS;

export const degreesItems: selectBoxItemModel[] = [
  {
    id: -1,
    label: HIGH_SCHOOL,
    value: HIGH_SCHOOL,
  },
  {
    id: 0,
    label: DIPLOMA,
    value: DIPLOMA,
  },
  {
    id: 1,
    label: BACHELOR,
    value: BACHELOR,
  },
  {
    id: 2,
    label: MASTER,
    value: MASTER,
  },
  {
    id: 3,
    label: DOCTORAL,
    value: DOCTORAL,
  },
];

export const activitiesItems: selectBoxItemModel[] = [
  { id: 0, label: ACTIVE, value: ACTIVE },
  { id: 1, label: DISABLED, value: DISABLED },
];
