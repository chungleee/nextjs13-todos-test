"use client";
import { useEffect, useState } from "react";

type Todos = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

const Home = () => {
	const [todos, setTodos] = useState<Todos[]>([]);

	useEffect(() => {
		const getTodos = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);
			const data = await response.json();

			setTodos(data);
			console.log("data: ", data);
		};

		getTodos();
	}, []);

	return (
		<main>
			<h1>this is the home page for todos</h1>
			<h2>Todos title for SEO</h2>
			<p>blah blah blah</p>
			<ul>
				{todos.length
					? todos.map((todo) => {
							return <li key={todo.id}>title: {todo.title}</li>;
					  })
					: "No todos yet"}
			</ul>
		</main>
	);
};

export default Home;
