import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="root-container">
			<div className="mx-auto max-w-7xl">Header</div>
		</main>
	);
};

export default Layout;
