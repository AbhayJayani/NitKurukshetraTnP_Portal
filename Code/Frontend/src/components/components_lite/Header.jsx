import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <header className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-12 shadow-lg">
      <div
        className="absolute inset-0 opacity-10 bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: "url('/nitkkr_bg.jpg')" }}
      />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 bg-white/80 px-6 py-2 rounded-full shadow border border-blue-200">
          <img
            src="/nitkkr_logo.png"
            alt="NIT Kurukshetra Logo"
            className="w-10 h-10 object-contain rounded-full border border-blue-400 bg-white"
          />
          <span className="text-xl font-bold text-blue-800 tracking-wide">
            Training & Placement Portal, NIT Kurukshetra
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 drop-shadow-lg text-center">
          Empowering Your Future at{" "}
          <span className="text-blue-700">NIT Kurukshetra</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl">
          Discover opportunities, connect with recruiters, and launch your
          career journey with the official T&P portal of NIT Kurukshetra.
        </p>
        <div className="flex w-full max-w-xl shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 bg-white">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for jobs, companies, or roles..."
            className="outline-none border-none w-full text-base py-2 bg-transparent"
          />
          <Button
            onClick={searchjobHandler}
            className="rounded-r-full bg-blue-700 hover:bg-blue-800"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
