import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Studen from './Student.jsx'
import Student from './Student.jsx';

function App() {
  return (
    <>
      <Card/>
      <Button/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Larry"/>
    </> 
  );
}

export default App
