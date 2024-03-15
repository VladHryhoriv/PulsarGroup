import { Input as InputComponent } from './input'
import { Password } from './password'
import { TextArea } from './textarea'

export type InputProps = typeof InputComponent & {
  Password: typeof Password
  TextArea: typeof TextArea
}

const Input = InputComponent as InputProps

Input.Password = Password
Input.TextArea = TextArea

export { Input }
