import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
    return (
        <main>
            <div>Todo App</div>
        <div>
            <TodoForm /> {/* Client Component */}
            <TodoList />{/* Client Component */}
        </div>
       </main>
    )
}