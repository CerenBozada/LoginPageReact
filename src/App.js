import './App.css';
import React from 'react';


function TextField({ label, type, placeholder, onChange }) {

  return (
    <div className="flex flex-col">
      <label className="mb-1">{label}</label>
      <input className="border border-gray-400 p-2 rounded" placeholder={placeholder} type={type} onChange={onChange} />
    </div>
  );

}
function UserCard({ user }) {

  if(user=== null) {
    return (
      <h1>
        Kayıt olunuz.
      </h1>
    )
  }
  return (
    <div>
      <h1 > {user.username} </h1>
      <p> {user.email}</p>
    </div>
  )

}


function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [user, setUser] = React.useState(null);
  const handleSubmitForm = () => {

    if (username === '') {
      alert('Username is empty');
      return

    }
    if (password === '' || passwordConfirm === '') {
      alert('Password is empty');
      return
    }
    if (email === '') {
      alert('Email is empty');
      return
    }

    if (password != passwordConfirm) {
      alert("şifreler aynı değil!")
      return
    }

    console.log("Şifreler aynı")
    setUser({ username, password, email });
  }
  if (user !== null){
    return <UserCard user = {user} />
  }
  
  return (
    <div className="container mx-auto">
      <TextField label="Kullanıcı adınızı girin" placeholder="ciren..." onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Parola" placeholder="Ankara" type="password" onChange={(e) => setPassword(e.target.value)} />
      <TextField label="Parola Tekrar" placeholder="Ankara" type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
      <TextField label="E-posta" placeholder="ciren@" type="email" onChange={(e) => setEmail(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 p-3 w-full" onClick={handleSubmitForm}>Giriş Yap</button>
      






    </div>
  );
}

export default App;

