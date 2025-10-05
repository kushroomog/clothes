import type { Metadata } from "next";
import { publicUrl } from "@/env.mjs";
import { KushroomLandingContent } from "./landing-content";

const pageDescription =
	"Celebre a primeira venda da Kushroom Clothing com camisetas manifesto em algodão 100%, silk screen artesanal e edição numerada.";

export const metadata: Metadata = {
	title: "Venda Inaugural Kushroom | Kushroom Clothing",
	description: pageDescription,
	alternates: { canonical: `${publicUrl}/venda-inaugural-kushroom` },
	openGraph: {
		title: "Venda Inaugural Kushroom",
		description: pageDescription,
		url: `${publicUrl}/venda-inaugural-kushroom`,
		images: [
			{
				url: "/og/foto1.jpeg",
				width: 1200,
				height: 720,
				alt: "Camisetas da coleção inaugural da Kushroom",
			},
		],
	},
	twitter: {
		title: "Venda Inaugural Kushroom",
		description: pageDescription,
		card: "summary_large_image",
		images: ["/og/foto1.jpeg"],
	},
};

export default function VendaInauguralKushroomPage() {
	return <KushroomLandingContent />;
}
