
import './App.css'
import Typography from './components/atom/typography/Typography'

const App = () => {
  return (
    <>
<Typography tag="h1" text={"This is Typography component"} classes="title" style={{color:"blue"}} role='heading' ariaLabel='"This is Typography component' ariaLabelledBy='title'>
  <p>Hello</p>
</Typography>
<Typography tag="h4" text={"This is Subtitle"} />
    </>
  )
}

export default App