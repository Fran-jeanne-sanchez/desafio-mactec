"use server"
import fs from 'fs'
import path from 'path'
import { TodoSchema } from "@/schemas/todo.schema"

const todosFilePath = path.resolve('src/data/todos.json')

export async function addTodo(todo: TodoSchema) {
  try {
    const todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf-8'))
    
    const newTodo = { ...todo, id: Date.now() }
    todos.push(newTodo)
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2))
  } catch (error) {
    console.error('Error al agregar el TODO:', error)
    throw new Error('No se pudo agregar el TODO')
  }
}