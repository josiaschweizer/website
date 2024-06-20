import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
      <Card/>
      <Button/>
      <UserGreeting isLoggedIn={true} username="Josia Schweizer"/>
      <UserGreeting/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Larry"/>
    </> 
  );
}

export default App
