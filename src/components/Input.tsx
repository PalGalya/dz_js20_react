interface InputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  label: string
}

const Input = ({ type = 'text', placeholder, label }: InputProps) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input type={type} placeholder={placeholder} id={inputId} name={inputId}/>
    </div>
  )
}

export default Input
