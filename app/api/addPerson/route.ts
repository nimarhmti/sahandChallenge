import { NextResponse } from "next/server";
import { addNewPerson } from "../handlerFunction";
import { PersonModel } from "@/Services/Persons/getPerson.interface";
export const POST = async (req: Request, res: Response) => {
  const data: PersonModel = await req.json();
  try {
    addNewPerson(data);
  } catch (error) {
    return NextResponse.json({ message: error, error }, { status: 500 });
  }
};
