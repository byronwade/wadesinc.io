export function truncateHtml(html, maxLength) {
	// Create a temporary div element to hold the HTML
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = html;

	// Get all the child nodes of the temporary div element
	const childNodes = tempDiv.childNodes;

	// Loop through each child node and truncate the content
	childNodes.forEach((node) => {
		if (node.nodeType === Node.ELEMENT_NODE) {
			const content = node.innerHTML.slice(0, maxLength) + "...";
			node.innerHTML = content;
		}
	});

	// Get the updated HTML from the temporary div element
	const truncatedHtml = tempDiv.innerHTML;

	// Return the truncated HTML
	return truncatedHtml;
}
