import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Avatar from "../assets/Avatar-1.png";
import { AddReverse } from "../icons";
import { useProfile } from "../context/ProfileContext";

export default function ProfileChoice() {
  const { profiles, addProfile, switchProfile } = useProfile();
  const [showAddProfile, setShowAddProfile] = useState(false);
  const [newProfileName, setNewProfileName] = useState("");
  const navigate = useNavigate();

  const handleProfileClick = (profileId) => {
    switchProfile(profileId);
    navigate("/home");
  };

  const [selectedAvatar, setSelectedAvatar] = useState({ image: Avatar, style: {} });

  const AVATARS = [
    { id: 1, image: Avatar, style: {} }, // Original Red
    { id: 2, image: Avatar, style: { filter: "hue-rotate(180deg)" } }, // Blue/Cyan
    { id: 3, image: Avatar, style: { filter: "hue-rotate(90deg)" } }, // Green
    { id: 4, image: Avatar, style: { filter: "hue-rotate(270deg)" } }, // Purple
  ];

  const handleAddProfile = (e) => {
    e.preventDefault();
    if (newProfileName.trim()) {
      addProfile(newProfileName, selectedAvatar);
      setNewProfileName("");
      setSelectedAvatar(AVATARS[0]);
      setShowAddProfile(false);
    }
  };

  if (showAddProfile) {
    return (
      <section className="h-[calc(100vh-50px)] flex flex-col justify-center items-center gap-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl text-white font-normal mb-4">Aggiungi Profilo</h2>
        <div className="flex flex-col items-center gap-6">

          <div className="flex gap-4">
            {AVATARS.map((avatar) => (
              <div
                key={avatar.id}
                className={`cursor-pointer rounded overflow-hidden border-2 ${selectedAvatar.id === avatar.id ? "border-white" : "border-transparent"} hover:border-gray-400 transition`}
                onClick={() => setSelectedAvatar(avatar)}
              >
                <img
                  src={avatar.image}
                  alt="Avatar option"
                  className="w-16 h-16 md:w-24 md:h-24 object-cover"
                  style={avatar.style}
                />
              </div>
            ))}
          </div>

          <form onSubmit={handleAddProfile} className="flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Nome"
              className="bg-[#333] text-white px-4 py-2 rounded border border-transparent focus:border-white outline-none w-64"
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              autoFocus
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-[#c00] hover:text-white transition"
              >
                Salva
              </button>
              <button
                type="button"
                className="border border-gray-400 text-gray-400 px-6 py-2 rounded hover:border-white hover:text-white transition"
                onClick={() => setShowAddProfile(false)}
              >
                Annulla
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="h-[calc(100vh-50px)] flex flex-col justify-center items-center gap-8 animate-fade-in">
      <h2 className="text-4xl md:text-5xl text-white font-normal mb-4">Chi vuole guardare Netflix?</h2>

      <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8">
        {/* User Profiles */}
        {profiles.map((profile) => (
          <div key={profile.id} className="group flex flex-col items-center gap-3 cursor-pointer" onClick={() => handleProfileClick(profile.id)}>
            <div className="w-24 h-24 md:w-40 md:h-40 rounded overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-200">
              <img
                src={profile.avatar?.image || profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
                style={profile.avatar?.style || {}}
              />
            </div>
            <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors duration-200">
              {profile.name}
            </span>
          </div>
        ))}

        {/* Add Profile */}
        <div className="group flex flex-col items-center gap-3 cursor-pointer" onClick={() => setShowAddProfile(true)}>
          <div className="w-24 h-24 md:w-40 md:h-40 flex justify-center items-center rounded bg-transparent border-2 border-transparent group-hover:bg-white/10 group-hover:border-white transition-all duration-200">
            <AddReverse className="w-12 h-12 md:w-20 md:h-20 text-gray-400 group-hover:text-white transition-colors duration-200" />
          </div>
          <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors duration-200">
            Aggiungi profilo
          </span>
        </div>
      </div>

      <button
        onClick={() => navigate("/manage-profiles")}
        className="mt-8 px-6 py-2 text-gray-400 border border-gray-400 text-lg tracking-widest hover:text-white hover:border-white transition-all duration-200"
      >
        GESTISCI I PROFILI
      </button>
    </section>
  );
}
