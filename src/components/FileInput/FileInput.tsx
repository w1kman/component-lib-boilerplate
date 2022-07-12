import type { ReactNode } from 'react'

interface FileInputProps {
  id?: string
  children?: ReactNode
}

export default function FileInput ({ id = 'input-field', children }: FileInputProps) {
  return (
    <div>
      <input id={id} type="file"/>
      {!!children && (<label htmlFor={id}>{children}</label>)}
    </div>
  )
}