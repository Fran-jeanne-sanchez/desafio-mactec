import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { TodoForm } from "./todo.form"

export const TodoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Agregar Tarea</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar una nueva tarea</DialogTitle>
        </DialogHeader>
        <TodoForm />
      </DialogContent>
    </Dialog>
  )
}
