import User from "./user"
import { Suspense } from "react"

export default function Page({ params }: { params: { id: string } }) {
	return (
		<main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
			<Suspense fallback={<p style={{ textAlign: "center" }}>loading... on initial request</p>}>
				<User id={params.id} />
			</Suspense>
		</main>
	)
}
