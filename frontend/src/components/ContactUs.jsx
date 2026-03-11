import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader2,
  MessageSquare,
} from "lucide-react";
import SEOHead from "./SEOHead";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  // FORM STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const seoConfig = {
    title: "Contact Us - Get in Touch with Bits and Bytes IT Solution",
    description:
      "Contact Bits and Bytes IT Solution for digital marketing, web development, and app development services in Noida.",
    keywords:
      "contact bits and bytes, digital marketing consultation Noida, web development inquiry Delhi NCR",
    canonical: "/contact-us",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact Us", url: "/contact-us" },
    ],
  };

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://bitsandbytes-sb2k.onrender.com/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");

        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");

        setTimeout(() => setStatus("idle"), 3000);
      } else {
        alert(data.message);
        setStatus("idle");
      }
    } catch (err) {
      alert("Server Error");
      setStatus("idle");
    }
  };

  return (
    <>
      <SEOHead {...seoConfig} />

      <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          
          {/* MAIN GRID: HQ INFO & FORM */}
          <div className="grid lg:grid-cols-2 gap-24 mb-24">

            {/* LEFT INFO + MAP */}
            <div className="space-y-5">
              {[
                {
                  icon: <Mail className="text-white" />,
                  title: "Email Us",
                  val: "Info@bitsandbytesitsolution.com",
                  bg: "bg-blue-600",
                },
                {
                  icon: <Phone className="text-white" />,
                  title: "Call Us",
                  val: "+91 8750788895",
                  bg: "bg-slate-900",
                },
                {
                  icon: <MapPin className="text-white" />,
                  title: "Visit HQ",
                  val: "Office No.1, G-9, G Block, Sector 63, Noida, Uttar Pradesh 201309",
                  bg: "bg-cyan-500",
                },
              ].map((item, i) => (
                <div  
                  key={i}
                  className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      {item.title}
                    </p>
                    <p className="font-bold">{item.val}</p>
                  </div>
                </div>
              ))}

              {/* ✅ HQ MAP (NOIDA) */}
              <div className="relative mt-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-[2rem] blur-lg opacity-40"></div>

                <div className="relative w-full h-80 bg-white rounded-3xl p-2 shadow-2xl overflow-hidden border border-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3944779486487!2d77.388738!3d28.617936999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefcd5d645015%3A0xa8f4752951933cb4!2sBits%20and%20Bytes%20IT%20Solution%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Noida%20%7C%20SEO%20%7C%20Web%20Design%20Service%20(%20india%20)!5e0!3m2!1sen!2sin!4v1765189586085!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "1.5rem" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                Send Message <MessageSquare className="text-blue-500" />
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border"
                />

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border"
                >
                  <option value="">Select Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="SEO">SEO</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Tell us about your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border resize-none"
                />

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2
                    ${
                      status === "idle"
                        ? "bg-blue-600 text-white"
                        : status === "loading"
                        ? "bg-slate-300"
                        : "bg-green-500 text-white"
                    }`}
                >
                  {status === "idle" && (
                    <>
                      Send Message <ArrowRight />
                    </>
                  )}
                  {status === "loading" && (
                    <Loader2 className="animate-spin" />
                  )}
                  {status === "success" && (
                    <>
                      Message Sent <CheckCircle />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ✅ OTHER LOCATIONS SECTION (MUMBAI, DELHI, KUWAIT) */}
          {/* ========================================================= */}
          <div className="border-t border-slate-200 pt-16">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Other Locations
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* --- MUMBAI SECTION --- */}
              <div className="bg-white p-5 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h4 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                    <MapPin className="text-blue-500 w-5 h-5" /> Mumbai
                  </h4>
                  <p className="text-slate-500 text-sm mt-2 ml-7">
                    Office No.02,Eastern Express Highway,Govandi Slums,Govind west,Shivaji nagar thane<br />
                    Mumbai, Maharashtra - 400001
                  </p>
                </div>
                <div className="w-full h-60 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.970977673613!2d72.9238495!3d19.065013599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c788647af037%3A0x6e589762f4719b28!2sBits%20and%20Bytes%20IT%20Solution%20in%20Mumbai!5e0!3m2!1sen!2sin!4v1768818291650!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mumbai Office"
                  ></iframe>
                </div>
              </div>

              {/* --- DELHI SECTION --- */}
              <div className="bg-white p-5 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h4 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                    <MapPin className="text-blue-500 w-5 h-5" /> Delhi
                  </h4>
                  <p className="text-slate-500 text-sm mt-2 ml-7">
                    B-19,Harijan Basti Block B,Mayur vihar pahse 3<br />
                    Kondli, New Delhi - 110096
                  </p>
                </div>
                <div className="w-full h-60 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2679287256874!2d77.3312277!3d28.621731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5c6c76afcfb%3A0x6db9a9b55d34a1e3!2sBits%20and%20Bytes%20IT%20Solution%20in%20Delhi!5e0!3m2!1sen!2sin!4v1768818367219!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Delhi Office"
                  ></iframe>
                </div>
              </div>

              {/* --- KUWAIT SECTION --- */}
              <div className="bg-white p-5 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h4 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                    <MapPin className="text-blue-500 w-5 h-5" /> Kuwait
                  </h4>
                  <p className="text-slate-500 text-sm mt-2 ml-7">
                    26/17,Block-04,Near AAA Housing fan Complex<br />
                    mangaf, Kuwait,53704
                  </p>
                </div>
                {/* Placeholder map box until you provide URL */}
                <div className="w-full h-60 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.1701594104425!2d48.1280627!3d29.100657399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf0774248804e7%3A0xd9c66daaa589affe!2sBits%20and%20Bytes%20IT%20Solution%20in%20Kuwait!5e0!3m2!1sen!2sin!4v1768979197462!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kuwait Office"
                    className="bg-slate-200"
                  ></iframe>
                  {/* Overlay Text for Missing Map */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-slate-500 text-sm font-medium bg-white/80 px-4 py-2 rounded-full">
                      Map Coming Soon
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;