import { NextResponse } from "next/server";
import { addNewPerson } from "../handlerFunction";
import { PersonModel } from "@/Services/Persons/getPerson.interface";
export const POST = async (req: Request, res: Response) => {
  const { education, fullName, id, status, userId }: PersonModel =
    await req.json();
  const missingValue = !education || !fullName || !id || !userId || status;
  if (missingValue)
    return NextResponse.json(
      { message: "missing required Data" },
      { status: 403 }
    );
  return NextResponse.json({ message: "ok" }, { status: 200 });
};
