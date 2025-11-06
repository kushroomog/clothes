"use client";

import { useEffect } from "react";

export function FontProvider() {
	useEffect(() => {
		const style = document.createElement("style");
		style.textContent = `
      :root {
        --font-pixoreto: "PixoRetoSP", sans-serif;
      }
    `;
		document.head.appendChild(style);
		return () => style.remove();
	}, []);

	return null;
}
