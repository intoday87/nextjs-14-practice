import ListUsers from "./list"
import { Suspense } from "react"

export default function Page() {
	return (
		<main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
			<Suspense fallback={<p style={{ textAlign: "center" }}>loading... on initial request</p>}>
				<ListUsers />
			</Suspense>
		</main>
	)
}
