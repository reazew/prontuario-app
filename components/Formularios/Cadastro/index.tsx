import axios from 'axios';
import { useState } from 'react';

export default function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!terms) {
      alert('Por favor, aceite os termos e condições.');
      return;
    }
    const response = await axios.post('/api/register', { fullName, cpf, address, email, password });
    // handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Nome completo" />
      <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Endereço" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
      <label>
        <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
        Eu concordo com os termos e condições
      </label>
      <button type="submit">Criar conta</button>
    </form>
  );
}
