import React, { useState } from 'react';

const GOAL = 250000;

const Invest: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const percent = ((amount / GOAL) * 100).toFixed(2);
  const profitShare = ((amount / GOAL) * 90).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount < 100) {
      alert('Minimum investment is 100 AED.');
      return;
    }
    setSubmitted(true);
    alert(`Investment of ${amount} AED successful via ${paymentMethod || 'default'}! You invested ${percent}% with a profit share of ${profitShare}%.`);
  };

  const handlePayment = (method: string) => {
    setPaymentMethod(method);
    if (amount < 100) {
      alert('Minimum investment is 100 AED.');
      return;
    }
    alert(`Payment of ${amount} AED processed via ${method}. Contact ceo@frshar.com for details.`);
    setSubmitted(true);
  };

  return (
    <section className="section pt-24 min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
      <div className="content-block max-w-lg w-full shadow-xl rounded-2xl bg-white p-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-[#333333] mb-2 text-center tracking-tight">Invest in Project</h2>
        <p className="text-base text-gray-600 mb-6 text-center">Minimum <span className="font-semibold text-[#D4AF37]">100 AED</span> investment. Annual dividends based on shares; <span className="font-semibold">QiTaah</span> offers equity returns in 45 days.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="invest-amount" className="form-label block mb-1 font-medium text-gray-700">Investment Amount</label>
            <input
              type="number"
              id="invest-amount"
              className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition"
              min={100}
              value={amount || ''}
              onChange={e => setAmount(Number(e.target.value))}
              required
              placeholder="Enter amount (min 100 AED)"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-between text-center">
            <div className="flex-1 bg-gray-50 rounded-lg p-3">
              <span className="block text-xs text-gray-500">Your Contribution</span>
              <span className="font-bold text-lg text-[#D4AF37]">{percent}%</span>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-3">
              <span className="block text-xs text-gray-500">Profit Share</span>
              <span className="font-bold text-lg text-[#D4AF37]">{profitShare}%</span>
              <span className="block text-xs text-gray-500">(after 10% equity)</span>
            </div>
          </div>
          <button type="submit" className="custom-button w-full py-2 text-lg" id="invest-button" disabled={submitted}>Confirm Payment</button>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2 font-medium">Payment Options:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <button type="button" onClick={() => handlePayment('bank')} className="custom-button w-full">Bank Transfer</button>
              <button type="button" onClick={() => handlePayment('crypto')} className="custom-button w-full">Cryptocurrency</button>
              <button type="button" onClick={() => handlePayment('paypal')} className="custom-button w-full">PayPal</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Invest;
