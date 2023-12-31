import { NextResponse } from "next/server";
import { getAllPersons } from "../handlerFunction";

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
