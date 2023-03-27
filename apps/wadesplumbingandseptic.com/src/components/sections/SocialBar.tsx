"use client";
import { useState, useEffect, useCallback } from "react";
import { FacebookShareButton, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "react-share";
import { usePathname } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function SocialBar() {
	const [isCopied, setIsCopied] = useState(false);
	const pathname = usePathname();
	const url = `https://wadesplumbingandseptic.com${pathname}`;

	const handleCopyLink = useCallback(() => {
		navigator.clipboard.writeText(url);
		setIsCopied(true);
		toast.success("Link copied to clipboard!");
	}, [url]);

	useEffect(() => {
		if (isCopied) {
			toast.success("Link copied to clipboard!");
		}
	}, [handleCopyLink]);

	return (
		<>
			<ToastContainer className="!top-32" />
			<aside aria-label="Share social media">
				<div className="space-x-1">
					<FacebookShareButton url={url} className="!inline-flex !items-center !p-2 !text-sm !font-medium !text-center !text-gray-500 !bg-white !rounded hover:!bg-gray-100 focus:!ring-4 focus:!outline-none" type="button">
						<FacebookIcon size={25} round={true} />
					</FacebookShareButton>
					<TwitterShareButton url={url} className="!inline-flex !items-center !p-2 !text-sm !font-medium !text-center !text-gray-500 !bg-white !rounded hover:!bg-gray-100 focus:!ring-4 focus:!outline-none" type="button">
						<TwitterIcon size={25} round={true} />
					</TwitterShareButton>
					<RedditShareButton url={url} className="!inline-flex !items-center !p-2 !text-sm !font-medium !text-center !text-gray-500 !bg-white !rounded hover:!bg-gray-100 focus:!ring-4 focus:!outline-none" type="button">
						<RedditIcon size={25} round={true} />
					</RedditShareButton>
					<LinkedinShareButton url={url} className="!inline-flex !items-center !p-2 !text-sm !font-medium !text-center !text-gray-500 !bg-white !rounded hover:!bg-gray-100 focus:!ring-4 focus:!outline-none" type="button">
						<LinkedinIcon size={25} round={true} />
					</LinkedinShareButton>
					<button onClick={handleCopyLink} className="!inline-flex !items-center !p-2 !text-sm !font-medium !text-center !text-gray-500 !bg-white !rounded hover:!bg-gray-100 focus:!ring-4 focus:!outline-none" type="button">
						<LinkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
					</button>
				</div>
			</aside>
		</>
	);
}
