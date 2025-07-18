// import AcessoriosImg from "@/images/acessorios.png";
import CamisetasImg from "@/images/camisetas.png";

export const config = {
	categories: [
		{ name: "Camisetas", slug: "Camisetas", image: CamisetasImg },
		// { name: "Acessórios", slug: "Acessórios", image: AcessoriosImg },
	],

	social: {
		instagram: "https://instagram.com/kushroomog",
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
