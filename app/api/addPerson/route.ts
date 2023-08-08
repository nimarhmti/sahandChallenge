import { NextResponse } from "next/server";
import { addNewPerson } from "../handlerFunction";
import { resType } from "../data.interface";
export const POST = async (req: Request, res: Response) => {
  try {
    const Data: resType = await req.json();
    const { data } = Data;
    addNewPerson(data);
    return NextResponse.json({ message: "Ok", Data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
