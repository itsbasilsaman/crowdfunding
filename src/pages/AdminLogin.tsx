import React, { useState } from 'react';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'asifazad123' && password === 'Ahlam313@') {
      setSubmitted(true);
      alert('Admin login successful!');
    }
  };

  return (
    <section className="section pt-24 min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
      <div className="content-block max-w-md w-full shadow-xl rounded-2xl bg-white p-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-[#333333] mb-2 text-center tracking-tight">Admin Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="admin-login-username" className="form-label block mb-1 font-medium text-gray-700">Username</label>
            <input type="text" id="admin-login-username" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="admin-login-password" className="form-label block mb-1 font-medium text-gray-700">Password</label>
            <input type="password" id="admin-login-password" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="custom-button w-full py-2 text-lg" disabled={submitted}>Login</button>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600"><a href="/login" className="text-[#D4AF37] underline">Back to Login</a></p>
      </div>
    </section>
  );
};

export default AdminLogin;
