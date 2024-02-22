"use client"

import { User } from "@/@types/sample/user"
import { useSuspenseQuery } from "@tanstack/react-query"

const getUser = async (id: string) => {
	console.time("fetch user")
	const result: User = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
	console.timeEnd("fetch user")
	return result
}

export default function user({ id }: Props) {
	const { data } = useSuspenseQuery<User, Error, User, [string, string]>({
		queryKey: ["user", id],
		queryFn: ({ queryKey }) => getUser(queryKey[1]),
		staleTime: 1000 * 60 * 60,
	})

	return (
		<div>
			<h1>user {id}</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}

type Props = {
	id: string
}
