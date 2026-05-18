import {createReview} from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server";

export async function POST(req,res) {
    const FormData = await req.formData();
    const title = FormData.get('title');
    const author = FormData.get('author');
    const type = FormData.get('type');
    const rating = FormData.get('rating');
    const body = FormData.get('rbody');
    //createReview(formData);

    return NextResponse.json({type, title, author, rating, body })
}