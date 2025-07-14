interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  text: string
}

const Button = ({ type = 'button', text }: ButtonProps) => {
  return <button type={type}>{text}</button>
}

export default Button
