import { NextResponse } from "next/server";
import { addNewPerson, getAllPersons } from "../handlerFunction";
import { PersonModel } from "@/Services/Persons/getPerson.interface";

export const GET = async (req: Request, res: Response) => {
  try {
    const persons = getAllPersons();
    return NextResponse.json(
      { message: "Ok", persons },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
export const POST = async (req: Request, res: Response) => {
  const data: PersonModel = await req.json();

  try {
    addNewPerson(data);
  } catch (error) {
    return NextResponse.json({ message: error, error }, { status: 500 });
  }
};
