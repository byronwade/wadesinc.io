"use client";
import { useQuery } from "@apollo/client";

//GraphQL Queries
import { EXPERTTIPS } from "../../../graphql/expertTips";

export default function ExpertTipsTotals() {
	const { loading, error, data } = useQuery(EXPERTTIPS);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error?.message}</div>;

	const total = data.posts.pageInfo.total;
	return <>{total}</>;
}
