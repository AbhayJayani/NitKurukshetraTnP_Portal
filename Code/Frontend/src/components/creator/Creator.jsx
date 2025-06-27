import React from "react";
import Navbar from "../components_lite/Navbar";

const Creator = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Faded NITKKR background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/nitkkr_bg.jpg')" }}
      />
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto p-6">
        <section className="w-full text-center mb-10 bg-white/90 rounded-xl shadow-lg p-8 backdrop-blur">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <img
              src="/nitkkr_logo.png"
              alt="NIT Kurukshetra Logo"
              className="w-40 h-40 object-contain rounded-xl shadow-md bg-white p-2 border-2 border-blue-200"
            />
            <div className="text-left max-w-xl">
              <h1 className="text-4xl font-extrabold text-blue-800 mb-2">
                Training & Placement Portal <br />
                <span className="text-blue-600">NIT Kurukshetra</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Welcome to the official Training and Placement Portal of{" "}
                <strong>NIT Kurukshetra</strong> (NITKKR). This platform is
                dedicated to connecting students with top recruiters and
                streamlining the placement process.
              </p>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                About NIT Kurukshetra
              </h2>
              <p className="text-gray-700 mb-2">
                Established in 1963, NIT Kurukshetra is a premier technical
                institute known for academic excellence, innovation, and a
                vibrant campus life.
              </p>
              <h2 className="text-xl font-semibold text-blue-600 mt-4 mb-2">
                Placement Highlights
              </h2>
              <ul className="text-gray-700 list-disc list-inside mb-2">
                <li>90%+ placement rate for B.Tech and M.Tech students.</li>
                <li>
                  Highest package:{" "}
                  <span className="font-bold text-green-700">₹62 LPA</span>{" "}
                  (2023-24).
                </li>
                <li>
                  Average package:{" "}
                  <span className="font-bold text-green-700">₹13.5 LPA</span>{" "}
                  (2023-24).
                </li>
                <li>
                  Top recruiters: Microsoft, Amazon, Google, Infosys, TCS, L&T,
                  and more.
                </li>
              </ul>
              <p className="text-gray-700">
                The T&P Cell is committed to providing the best opportunities
                and preparing students for successful careers.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl bg-white/90 rounded-xl shadow-lg p-8 mt-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Meet the Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center bg-blue-50 rounded-lg p-6 shadow hover:shadow-xl transition">
              <div className="rounded-full bg-blue-200 h-28 w-28 flex items-center justify-center text-4xl font-extrabold text-blue-700 mb-4 border-4 border-blue-400 shadow">
                AS
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Abhay Singh
              </h3>
              <p className="text-gray-600 text-sm mb-2">NIT Kurukshetra</p>
              <p className="text-gray-500 text-center">
                Passionate about full-stack development and building impactful
                solutions for campus communities.
              </p>
            </div>
            <div className="flex flex-col items-center bg-blue-50 rounded-lg p-6 shadow hover:shadow-xl transition">
              <div className="rounded-full bg-blue-200 h-28 w-28 flex items-center justify-center text-4xl font-extrabold text-blue-700 mb-4 border-4 border-blue-400 shadow">
                P
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Prince</h3>
              <p className="text-gray-600 text-sm mb-2">NIT Kurukshetra</p>
              <p className="text-gray-500 text-center">
                Enthusiastic about web technologies and dedicated to delivering
                seamless user experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Creator;
