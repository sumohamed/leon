import { useEffect } from "react";

interface documentMetaData {
	title: string;
	favicon?: string;
	lang?: string;
	description?: string;
}

const useDocumentMetadata = ({
	title,
	favicon,
	lang = "ar",
	description,
}: documentMetaData) => {
	useEffect(() => {
		// 1.Update the document title
		document.title = title;

		// 2. Update the document language and direction
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

		// 3. Update the meta description
		if (description) {
			let metaDescription = document.querySelector<HTMLMetaElement>(
				'meta[name="description"]',
			);

			if (!metaDescription) {
				metaDescription = document.createElement("meta");
				metaDescription.name = "description";
				document.head.appendChild(metaDescription);
			}

			metaDescription.content = description;
		}

		// 4. Update the favicon
		if (favicon) {
			let link =
				document.querySelector<HTMLLinkElement>("link[rel~='icon']");
			if (!link) {
				link = document.createElement("link");
				link.rel = "icon";
				document.head.appendChild(link);
			}
			link.href = favicon;
		}
	}, [title, favicon, lang, description]);
};

export default useDocumentMetadata;
