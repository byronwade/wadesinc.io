import Image from "next/image";
import Link from "next/link";
import { truncateHtml } from "../../helpers/truncate";

export default function RelatedArticlesSection({ posts }) {
	const categories = posts.nodes;
	const allPosts = [];

	categories.forEach((category) => {
		const categoryPosts = category.posts.nodes;

		categoryPosts.forEach((post) => {
			const existingPost = allPosts.find((p) => p.title === post.title);

			if (!existingPost) {
				allPosts.push(post);
			}
		});
	});

	const truncatedPosts = allPosts.slice(0, 4);

	if (!truncatedPosts || truncatedPosts.length === 0) {
		return null;
	}

	return (
		<section aria-label="Related articles" className="py-8 lg:py-24 bg-white dark:bg-gray-900">
			<div className="px-4 mx-auto max-w-screen-xl">
				<h2 className="mb-6 lg:mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
				<div className="grid gap-6 lg:gap-12 md:grid-cols-2">
					{truncatedPosts.map((post) => (
						<Link key={post.id} href={`/expert-tips/${post.uri}`}>
							<article className="flex flex-col xl:flex-row">
								<div className="h-40 w-40 mr-5 mb-2 xl:mb-0 relative">
									<Image fill src={post?.featuredImage?.node?.sourceUrl ? post.featuredImage.node.sourceUrl : "/placeholder.webp"} alt={post?.featuredImage?.node?.altText ? post.featuredImage.node.altText : "/placeholder.webp"} className="w-full object-cover object-center rounded" />
								</div>
								<div className="flex flex-col justify-center">
									<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
										<span>{post.title}</span>
									</h2>
									<p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm" dangerouslySetInnerHTML={{ __html: truncateHtml(post.excerpt, 100) }} />
									<span className="inline-flex items-center font-medium underline underline-offset-4 text-brand-600 dark:text-brand-500 hover:no-underline">Read in {post.readingTime} minutes</span>
								</div>
							</article>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
