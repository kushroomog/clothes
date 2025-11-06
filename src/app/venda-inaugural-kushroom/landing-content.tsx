"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const galleryItems = [
	{ src: "/og/foto1.jpeg", alt: "Camisetas Burgundy e Areia" },
	{ src: "/og/foto2.jpeg", alt: "Produção artesanal" },
	{ src: "/og/foto3.jpeg", alt: "Detalhe da estampa vertical" },
	{ src: "/og/foto4.jpeg", alt: "Close da tipografia exclusiva" },
];

const highlightItems = [
	{
		tag: "Drop limitado",
		title: "100 unidades",
		description: "Primeira leva numerada com certificado digital e físico.",
	},
	{
		tag: "Tecidos",
		title: "Algodão 30.1 penteado",
		description: "Maciez premium, caimento urbano e costura reforçada.",
	},
	{
		tag: "Arte",
		title: "Silk screen artesanal",
		description: "Pigmentos à base d’água e cura térmica para durar.",
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

export function KushroomLandingContent() {
	return (
		<div className="bg-neutral-950 text-neutral-100">
			<div className="relative isolate overflow-hidden">
				<div aria-hidden="true" className="absolute inset-0 -z-40 flex justify-center opacity-25">
					<img
						aria-hidden="true"
						src="/og/video1-background.png"
						alt=""
						className="max-h-none w-full object-contain object-top"
					/>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-30 bg-gradient-to-b from-neutral-950/85 via-neutral-950/70 to-neutral-950"
				/>
				<section className="relative isolate z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
					<video
						className="absolute inset-0 -z-20 h-full w-full object-cover"
						autoPlay
						loop
						muted
						playsInline
						preload="auto"
						poster="/og/video1-background.png"
						aria-hidden="true"
					>
						<source src="/og/video1-background.webm" type="video/webm" />
						<source src="/og/video1-background.mp4" type="video/mp4" />
					</video>
					<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,15,15,0.2)_0%,rgba(10,10,10,0.85)_55%,#050505_100%)]" />
					<motion.span
						variants={fadeUp}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.7 }}
						className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/40 px-4 py-2 text-sm font-medium uppercase tracking-[0.35em] text-neutral-300"
					>
						Drop inaugural Kushroom
					</motion.span>
					<motion.h1
						variants={fadeUp}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.8, delay: 0.15 }}
						className="mt-8 text-balance text-5xl font-[var(--font-pixoreto)] tracking-tight md:text-7xl"
					>
						O primeiro drop pra quem vive a rua
					</motion.h1>
					<motion.p
						variants={fadeUp}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.8, delay: 0.35 }}
						className="mt-6 max-w-2xl text-pretty text-lg text-neutral-300 md:text-xl"
					>
						Camiseta-manifesto em 100% algodão, silk screen artesanal e assinatura independente. Edição
						limitada que celebra o começo da Kushroom Clothing.
					</motion.p>
					<motion.div
						variants={fadeUp}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.8, delay: 0.5 }}
						className="mt-12 flex flex-wrap items-center justify-center gap-6"
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
							<Button
								asChild
								className="rounded-2xl border-0 bg-orange-600 px-8 py-4 text-lg font-semibold tracking-tight text-neutral-100 shadow-xl shadow-orange-900/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-orange-700"
							>
								<Link href="/products">Garanta a sua</Link>
							</Button>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
							<Button
								variant="ghost"
								asChild
								className="rounded-2xl border border-neutral-700/70 px-7 py-4 text-lg font-semibold text-neutral-200 transition-all hover:bg-neutral-900/60"
							>
								<Link href="#sobre">Ver processo</Link>
							</Button>
						</motion.div>
					</motion.div>
				</section>

				<section className="relative z-10 space-y-10 px-6 py-24 text-center backdrop-blur-sm" id="sobre">
					<div className="mx-auto flex max-w-4xl flex-col gap-8">
						<motion.h2
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.8 }}
							className="text-balance text-3xl font-semibold md:text-5xl"
						>
							Primeira leva promocional com alma periférica
						</motion.h2>
						<motion.p
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="mx-auto max-w-3xl text-pretty text-neutral-300"
						>
							Nascemos pra vestir a energia da rua e respeitar quem constrói cultura todo dia. Cada peça é
							tirada em silk artesanal, numerada à mão e feita para durar — do corte ao acabamento.
						</motion.p>
					</div>

					<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
						{highlightItems.map((item, index) => (
							<motion.div
								key={item.tag}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.35 }}
								transition={{ duration: 0.8, delay: index * 0.15 }}
								className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 text-left shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]"
							>
								<p className="text-sm uppercase tracking-[0.35em] text-neutral-500">{item.tag}</p>
								<p className="mt-4 text-3xl font-semibold text-neutral-100">{item.title}</p>
								<p className="mt-3 text-neutral-400">{item.description}</p>
							</motion.div>
						))}
					</div>
				</section>
			</div>

			<section className="px-6 py-24" id="galeria">
				<motion.h3
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.8 }}
					className="text-center text-2xl font-semibold md:text-4xl"
				>
					As peças
				</motion.h3>
				<div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
					{galleryItems.map((item, index) => (
						<motion.div
							key={item.src}
							className="group overflow-hidden rounded-3xl border border-neutral-800/60 bg-neutral-900/40"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, delay: index * 0.15 }}
						>
							<img
								src={item.src}
								alt={item.alt}
								className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
							/>
							<div className="border-t border-neutral-800/60 p-5 text-left text-sm uppercase tracking-[0.3em] text-neutral-400">
								{item.alt}
							</div>
						</motion.div>
					))}
				</div>
			</section>

			<section className="px-6 py-24 text-center">
				<motion.h2
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.8 }}
					className="text-balance text-3xl font-semibold md:text-5xl"
				>
					Use a rua. Viva a cultura. Seja Kushroom.
				</motion.h2>
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-12 flex flex-wrap items-center justify-center gap-6"
				>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
						<Button
							asChild
							className="rounded-2xl border-0 bg-orange-600 px-8 py-4 text-lg font-semibold tracking-tight text-neutral-100 shadow-xl shadow-orange-900/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-orange-700"
						>
							<Link href="/products">Comprar agora</Link>
						</Button>
					</motion.div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
						<Button
							variant="outline"
							asChild
							className="rounded-2xl border border-neutral-700/70 bg-transparent px-7 py-4 text-lg font-semibold text-neutral-200 transition-colors hover:bg-neutral-900/60"
						>
							<Link href="/search">Conheça a coleção</Link>
						</Button>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
