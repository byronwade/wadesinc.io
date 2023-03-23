"use client";
import JobForm from "@/components/JobForm";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Example() {
	const pathname = usePathname();
	return (
		<section className="bg-gray-50 relative overflow-hidden bg-[url(/background.png)] bg-cover">
			<div className="py-16 px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="prose max-w-2xl bg-white p-4 md:p-8 rounded">
						<Image src="/WadesLogo.png" width={100} height={100} alt="Wade's Plumbing & Septic Logo" />
						<h1>Lead Plumber</h1>
						<p>At Wade&apos;s Plumbing & Septic, we stand behind our work and are committed to providing our customers with the highest quality plumbing and septic services. To ensure your satisfaction and confidence in our work, we offer the following warranty:</p>
						<ul>
							<li>
								<strong>100% Satisfaction Guarantee:</strong> We strive to provide exceptional customer service and high-quality workmanship. If you are not completely satisfied with our services, please let us know and we will make it right. We will either fix the issue to your satisfaction or provide a full refund for the work performed.
							</li>
							<li>
								<strong>1 Year Test Drive:</strong> We stand behind all of our new water heater, ductless mini split, furnace, and air conditioning installations with our 1 Year Test Drive warranty. If for any reason you are not happy with your new system within the first year, we will remove the equipment and refund 100% of your original investment minus the cost paid to any subcontractors. This offer is not available for installed piping, sewer, or underground projects or
								installations.
							</li>
							<li>
								<strong>1 Year Labor Warranty:</strong> We provide a one-year labor warranty on any new product that we supply and install. This warranty covers any faulty workmanship issues that may arise during this time. If you experience any problems due to faulty workmanship, we will return to your property and repair the issue at no cost to you.
							</li>
							<li>
								<strong>Parts Warranty:</strong> We use only high-quality parts and materials in our work, and we stand behind them. We offer a [insert number] year warranty on all parts and materials we supply. If any of the parts or materials we installed fail within this warranty period, we will replace them at no cost to you. However, this warranty does not cover any parts or materials supplied by the customer or any damages caused by customer-supplied materials.
							</li>
						</ul>
						<h3>Plumbing Warranties:</h3>
						<ul>
							<li>Home Water Line Replacement - 15 years</li>
							<li>Underground Water and Gas Line Replacement - 10 years</li>
							<li>Sewer Line Replacement - 15 years</li>
							<li>Sewer Line Spot Repair - 1 year</li>
							<li>Hydrojetting - 1 year</li>
							<li>Drain Clogs - 30 days</li>
						</ul>
						<p>We guarantee our workmanship on all plumbing projects covered by the warranties above. If any issues arise within the warranty period, we will repair the issue free of charge. Please note that warranties do not cover damages caused by normal wear and tear, misuse, neglect, or acts of God.</p>
						<h3>Generator Warranties:</h3>
						<p>We offer warranty registration services for the following brands of generators:</p>
						<ul>
							<li>Generac</li>
							<li>Honeywell</li>
						</ul>
						<p>To activate your generator warranty, please follow the manufacturer&apos;s instructions for warranty registration.</p>
						<p>Please note that our warranty is subject to the following limitations:</p>
						<ul>
							<li>The warranty is only valid for the original customer and is non-transferable.</li>
							<li>The warranty does not cover damages caused by repairs or installations made by anyone other than our company.</li>
							<li>The warranty does not cover damages caused by customer-supplied parts or materials.</li>
							<li>The warranty does not cover damages caused by work performed on equipment or systems that have been previously modified or repaired by anyone other than our company.</li>
						</ul>
						<p>Thank you for choosing Wade&apos;s Plumbing & Septic for your plumbing and septic needs. We are confident in our work and our warranty and look forward to serving you.</p>
						<p>
							Please don&apos;t hesitate to contact us if you have any questions about our warranty or any of our plumbing and septic services. We are always here to help and ensure your satisfaction with our work. <a href="tel:8312254344">831-225-4344.</a>
						</p>

						<div className="!mt-16">
							<h1 className="font-extrabold text-black sm:text-3xl lg:text-4xl mb-4">Apply with this form</h1>
							<JobForm pathname={pathname} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
