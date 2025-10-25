import { useMemo } from 'react'
import {
  type Task
} from '../api/mock'
import '../styles/taskBoard.css'

export function CalcProgress ({tasks}: {tasks : Task[]}) {
  const progress = useMemo(() => {
    const total = tasks.length
    const done = tasks.filter((t) => t.done).length
    const percent = total === 0 ? 0 : Math.round((done / total) * 100)
    return {total, done, percent}
  })
    
  return (
      <div className="taskboard__progress" aria-label="progress">
          {progress.done}/{progress.total} ({progress.percent}%)
      </div>
  )
}