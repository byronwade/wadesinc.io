import { getService } from "@/graphql/fetch";
import { NextResponse } from "next/server";

export const config = {
	runtime: "edge",
};

export default async function handler(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const searchQuery = searchParams.get("q");
		const { data } = await getService(searchQuery);

		return NextResponse.json({ data });
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
