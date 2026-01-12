import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import {
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Activity,
  AlertTriangle,
  Eye,
  EyeOff
} from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://bitsandbytesit.onrender.com/api/auth/admin/login",
        formData
      );

      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin");
        

      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Invalid admin credentials");
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen flex flex-col">

      <div className="flex-1 flex items-center justify-center relative overflow-hidden py-20">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-50/60 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-50/60 rounded-full blur-[120px] opacity-60"></div>
        </div>

        {/* Login Box */}
        <div className="relative z-10 w-full max-w-md p-6">
          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-2xl relative">

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 rounded-full mb-4 shadow-sm">
                <Shield size={32} className="text-cyan-600" />
              </div>
              <h1 className="text-3xl font-black mb-2">ADMIN PORTAL</h1>
              <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                Authorized Personnel Only
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL */}
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-bold uppercase ml-1">
                  Admin ID
                </label>

                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 text-slate-900 
                               focus:border-cyan-500 focus:bg-white focus:outline-none transition-all font-medium"
                    placeholder="admin@bits.com"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD WITH EYE */}
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-bold uppercase ml-1">
                  Passkey
                </label>

                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-12 text-slate-900
                               focus:border-cyan-500 focus:bg-white focus:outline-none transition-all font-medium"
                    placeholder="••••••••"
                    required
                  />

                  {/* Eye Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <div className="text-red-500 text-xs flex items-center gap-2 font-bold bg-red-50 p-2 rounded-lg">
                  <AlertTriangle size={14} /> {error}
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl shadow-lg
                           flex items-center justify-center gap-2 hover:bg-slate-800 transition-all 
                           hover:-translate-y-0.5"
              >
                {isLoading ? (
                  <Activity size={18} className="animate-spin" />
                ) : (
                  <>
                    Secure Login <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
