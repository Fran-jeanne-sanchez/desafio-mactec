import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TodoDialog } from "@/app/(sections)/todo.dialog";
import { getTodos } from "@/server/todo/todo.query";

const Page = async () => {
  const todos = await getTodos(); 

  const todosList = Array.isArray(todos) ? todos : [];

  return (
    <div className="max-w-screen-md mx-auto w-full p-6 space-y-4">
      <TodoDialog />
      <div className="space-y-4">
        {todosList.length > 0 ? (
          todosList.map((todo, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle>{todo.title}</CardTitle>
                <CardDescription>{todo.description}</CardDescription>
              </CardHeader>
            </Card>
          ))
        ) : (
          <p>No hay tareas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
