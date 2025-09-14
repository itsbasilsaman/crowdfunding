import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('founder');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'asifazad123' && password === 'Ahlam313@') {
      setSubmitted(true);
      alert('Login successful!');
    }
  };

  return (
    <section className="w-full pt-24 pb-8 bg-white min-h-screen font-montserrat transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-md w-full shadow-2xl rounded-3xl bg-white p-6 md:p-10 border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-2 text-center tracking-tight drop-shadow-sm" style={{letterSpacing: '-1px'}}>
          Login
        </h2>
        <p className="text-base text-gray-600 mb-6 text-center">For founders and investors. Admins, use <a href="/admin-login" className="text-[#eb1478] underline font-semibold">Admin Login</a>.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login-username" className="block mb-1 font-semibold text-gray-700">Username</label>
            <input type="text" id="login-username" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="login-password" className="block mb-1 font-semibold text-gray-700">Password</label>
            <input type="password" id="login-password" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="login-role" className="block mb-1 font-semibold text-gray-700">Role</label>
            <select id="login-role" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={role} onChange={e => setRole(e.target.value)} required>
              <option value="founder">Founder</option>
              <option value="investor">Investor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="w-full py-3 text-lg font-bold rounded-full bg-[#eb1478] text-white shadow-lg hover:bg-[#c0105e] transition-all mt-2 disabled:opacity-60" disabled={submitted}>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
