"use client"

import { User } from "@/@types/sample/user"
import { useSuspenseQuery } from "@tanstack/react-query"
import React from "react"
import Link from "next/link"

const getUsers = async () => {
	console.time("fetch users")
	const result: User[] = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
	console.timeEnd("fetch users")
	return result
}

export default function List() {
	const { data } = useSuspenseQuery<User[]>({
		queryKey: ["users"],
		queryFn: () => getUsers(),
		staleTime: 1000 * 60 * 60,
	})

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr 1fr 1fr",
				gap: 20,
			}}>
			{data?.map((user) => (
				<div key={user.id} style={{ border: "1px solid #ccc", textAlign: "center" }}>
					<Link href={`/sample/list/${user.id}`}>
						<img
							src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
							alt={user.name}
							style={{ width: 180, height: 180 }}
						/>
						<h3>{user.name}</h3>
					</Link>
				</div>
			))}
		</div>
	)
}
