"use client";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function SubscriptionForm() {
	const [state, handleSubmit] = useForm("mgeblnbk");
	if (state.succeeded) {
		return (
			<>
				<div>
					<h1 className="text-lg font-bold text-green">Success</h1>
					<p>You are signed up we will email you about new tips or services!</p>
				</div>
			</>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
				<div className="relative w-full">
					<label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Email address
					</label>
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
					</div>
					<input placeholder="Type in your email here..." required type="text" name="email" id="email" autoComplete="email" className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 sm:rounded-none sm:rounded-l focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500" />
				</div>
				<div>
					<button disabled={state.submitting} type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded border cursor-pointer bg-brand border-brand-600 sm:rounded-none sm:rounded-r hover:bg-brand-600 focus:ring-4 focus:ring-brand-300 dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800">
						Subscribe
					</button>
				</div>
			</div>
			<ValidationError className="text-red font-bold mb-4" prefix="Email" field="email" errors={state.errors} />
			<div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
				We care about the protection of your data.{" "}
				<Link href="/about-us/privacy-policy" className="font-medium text-brand-600 dark:text-brand-500 hover:underline">
					Read our Privacy Policy
				</Link>
				.
			</div>
		</form>
	);
}
