import type { ReactNode } from 'react'
import { FileInputContainer } from './styled'

interface FileInputProps {
  id?: string
  children?: ReactNode
}

export default function FileInput ({ id = 'input-field', children }: FileInputProps) {
  return (
    <FileInputContainer>
      <input id={id} type="file"/>
      {!!children && (<label htmlFor={id}>{children}</label>)}
    </FileInputContainer>
  )
}