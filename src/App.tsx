import './App.css'
import Button from './components/Button'
import Input from './components/Input'

const App = () => {
  return (
    <div className="app-container">
      <section className="section">
        <h1>Button Components</h1>
        <div className="button-container">
          <Button text="Click me"/>
          <Button type="submit" text="Submit"/>
          <Button type="reset" text="Reset"/>
        </div>
      </section>

      <section className="section">
        <h1>Input Components</h1>
        <form>
          <div className="input-container">
            <Input label="Name" placeholder="Enter your name"/>
          </div>
          <div className="input-container">
            <Input label="Email" type="email" placeholder="Enter your email"/>
          </div>
          <div className="input-container">
            <Input label="Password" type="password" placeholder="Enter password"/>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App
