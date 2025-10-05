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

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

export function KushroomLandingContent() {
	return (
		<div className="bg-neutral-950 text-neutral-100">
			<section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#2b2b2b_0%,rgba(15,15,15,0.95)_45%,#050505_100%)]" />
				<motion.span
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.7 }}
					className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/40 px-4 py-2 text-sm font-medium uppercase tracking-[0.35em] text-neutral-300"
				>
					Venda Inaugural Kushroom
				</motion.span>
				<motion.h1
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.8, delay: 0.15 }}
					className="mt-8 text-balance text-5xl font-bold tracking-tight md:text-7xl"
				>
					O primeiro drop para quem vive a rua
				</motion.h1>
				<motion.p
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.8, delay: 0.35 }}
					className="mt-6 max-w-2xl text-pretty text-lg text-neutral-300 md:text-xl"
				>
					Camisetas manifesto em algodão 100%, silk screen artesanal e assinatura independente. Drop limitado
					para celebrar o primeiro ciclo da Kushroom Clothing.
				</motion.p>
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.8, delay: 0.5 }}
					className="mt-12 flex flex-wrap items-center justify-center gap-6"
				>
					<Button
						asChild
						className="rounded-2xl border-0 bg-red-600 px-8 py-4 text-lg font-semibold tracking-tight text-neutral-100 shadow-xl shadow-red-900/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-700"
					>
						<Link href="/products">Garanta a sua</Link>
					</Button>
					<Button
						variant="ghost"
						asChild
						className="rounded-2xl border border-neutral-700/70 px-7 py-4 text-lg font-semibold text-neutral-200 transition-all hover:bg-neutral-900/60"
					>
						<Link href="#processo">Conheça o processo</Link>
					</Button>
				</motion.div>
			</section>

			<section className="space-y-10 bg-neutral-900 px-6 py-24 text-center" id="sobre">
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
						Nascemos para vestir a energia da rua com respeito a quem constrói cultura todos os dias. Cada
						peça é tirada em silk artesanal, passada no brilho da resistência e numerada para marcar o início
						da era Kushroom.
					</motion.p>
				</div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeUp}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
				>
					<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 text-left">
						<p className="text-sm uppercase tracking-[0.35em] text-neutral-500">Drop limitado</p>
						<p className="mt-4 text-3xl font-semibold text-neutral-100">100 unidades</p>
						<p className="mt-3 text-neutral-400">Primeira leva numerada com certificado digital e físico.</p>
					</div>
					<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 text-left">
						<p className="text-sm uppercase tracking-[0.35em] text-neutral-500">Tecidos</p>
						<p className="mt-4 text-3xl font-semibold text-neutral-100">Algodão 30.1 penteado</p>
						<p className="mt-3 text-neutral-400">Maciez premium, caimento urbano e costura reforçada.</p>
					</div>
					<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 text-left">
						<p className="text-sm uppercase tracking-[0.35em] text-neutral-500">Arte</p>
						<p className="mt-4 text-3xl font-semibold text-neutral-100">Silk screen artesanal</p>
						<p className="mt-3 text-neutral-400">Pigmentos à base d’água e cura térmica para durar.</p>
					</div>
				</motion.div>
			</section>

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

			<section className="bg-neutral-900 px-6 py-24 text-center" id="processo">
				<motion.h3
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.8 }}
					className="text-2xl font-semibold md:text-4xl"
				>
					Processo e cultura
				</motion.h3>
				<motion.p
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mx-auto mt-4 max-w-2xl text-neutral-300"
				>
					Do corte ao silk, tudo nasce no corre independente. Assista e sinta a energia que molda cada peça da
					Kushroom.
				</motion.p>
				<motion.video
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.9, delay: 0.2 }}
					className="mx-auto mt-12 w-full max-w-3xl overflow-hidden rounded-3xl border border-neutral-800/60 shadow-2xl shadow-black/40"
					controls
				>
					<source src="/og/video1.mp4" type="video/mp4" />
					Seu navegador não suporta vídeo.
				</motion.video>
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
					<Button
						asChild
						className="rounded-2xl border-0 bg-red-600 px-8 py-4 text-lg font-semibold tracking-tight text-neutral-100 shadow-xl shadow-red-900/40 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-700"
					>
						<Link href="/products">Comprar agora</Link>
					</Button>
					<Button
						variant="outline"
						asChild
						className="rounded-2xl border border-neutral-700/70 bg-transparent px-7 py-4 text-lg font-semibold text-neutral-200 transition-colors hover:bg-neutral-900/60"
					>
						<Link href="/search">Conheça a coleção</Link>
					</Button>
				</motion.div>
			</section>
		</div>
	);
}
