// Import dependencies
import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

// Define the GET function to fetch data from the view
export async function GET() {
    try {
        // Execute the query to fetch data from vista_curri_about_me
        const result = await conn.query("SELECT * FROM vista_curri_about_me");

        // Map the result to include curri_id
        const dataWithCurriId = result.map(item => ({ ...item, curri_id: item.curri_id }));

        // Return the data in JSON format
        return NextResponse.json(dataWithCurriId);
    } catch (error) {
        // Handle any errors that may occur during the query
        console.error("Error fetching data from vista_curri_about_me:", error);
        return NextResponse.json({ error: "Error fetching data from vista_curri_about_me" }, { status: 500 });
    }
}
