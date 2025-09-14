import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('founder');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Signup is disabled
  };

  return (
    <section className="section pt-24 min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
      <div className="content-block max-w-md w-full shadow-xl rounded-2xl bg-white p-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-[#333333] mb-2 text-center tracking-tight">Sign Up</h2>
        <p className="text-base text-gray-600 mb-6 text-center">For founders and investors. Admins, contact support.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="signup-username" className="form-label block mb-1 font-medium text-gray-700">Username</label>
            <input type="text" id="signup-username" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="signup-email" className="form-label block mb-1 font-medium text-gray-700">Email</label>
            <input type="email" id="signup-email" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="signup-password" className="form-label block mb-1 font-medium text-gray-700">Password</label>
            <input type="password" id="signup-password" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="signup-role" className="form-label block mb-1 font-medium text-gray-700">Role</label>
            <select id="signup-role" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={role} onChange={e => setRole(e.target.value)} required>
              <option value="founder">Founder</option>
              <option value="investor">Investor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="custom-button w-full py-2 text-lg" disabled>Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
