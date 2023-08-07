import { selectBoxItemModel, degrees, activities } from "./UserFrom.interface";
import translate from "@/assets/translate/translate.json";
const { BACHELOR, DIPLOMA, DOCTORAL, HIGH_SCHOOL, MASTER } = translate.DEGREES;
const { ACTIVE, DISABLED } = translate.STATUS;
const { high, low, med, upperHigh, upperMed } = degrees;
const { off, on } = activities;

export const degreesItems: selectBoxItemModel[] = [
  {
    id: -1,
    label: HIGH_SCHOOL,
    value: low,
  },
  {
    id: 0,
    label: DIPLOMA,
    value: med,
  },
  {
    id: 1,
    label: BACHELOR,
    value: upperMed,
  },
  {
    id: 2,
    label: MASTER,
    value: high,
  },
  {
    id: 3,
    label: DOCTORAL,
    value: upperHigh,
  },
];

export const activitiesItems: selectBoxItemModel[] = [
  { id: 0, label: ACTIVE, value: on },
  { id: 1, label: DISABLED, value: off },
];
