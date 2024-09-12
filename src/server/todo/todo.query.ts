"use server"
import fs from 'fs'
import path from 'path'

const todosFilePath = path.resolve('src/data/todos.json')

export async function getTodos() {
  try {
    const todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf-8'))
    return todos
  } catch (error) {
    console.error('Error al obtener los TODOs:', error)
    return []
  }
}