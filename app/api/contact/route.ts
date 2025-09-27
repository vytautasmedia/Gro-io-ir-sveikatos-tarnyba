import { NextResponse } from "next/server";
export async function POST(req: Request){ const form=await req.formData(); console.log("Contact:",Object.fromEntries(form.entries())); return NextResponse.redirect("/kontaktai?ok=1",{status:303}); }
