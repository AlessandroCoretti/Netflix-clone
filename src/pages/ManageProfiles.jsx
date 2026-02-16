import { Link, useNavigate } from "react-router";
import { AddReverse } from "../icons";
import { useProfile } from "../context/ProfileContext";

export default function ManageProfiles() {
    const { profiles, deleteProfile } = useProfile();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm("Sei sicuro di voler eliminare questo profilo?")) {
            deleteProfile(id);
        }
    };

    return (
        <section className="min-h-screen pt-20 flex flex-col items-center animate-fade-in bg-[#141414]">
            <h2 className="text-3xl md:text-5xl text-white font-normal mb-8 md:mb-12 text-center">Gestisci profili</h2>

            <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8 max-w-4xl px-4">
                {profiles.map((profile) => (
                    <div key={profile.id} className="group relative flex flex-col items-center gap-3 w-28 md:w-40">
                        <div className="w-full aspect-square rounded overflow-hidden border-2 border-transparent relative">
                            {/* Overlay per modifiche */}
                            <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-10">
                                <div
                                    className="bg-black/60 border border-gray-400 rounded-full p-2 cursor-pointer hover:border-white hover:bg-white/10 transition-all"
                                    onClick={() => handleDelete(profile.id)}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
                                        <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 6V4C8 3.46957 8.21071 3 8.58579 2.62513C8.96086 2.25026 9.46957 2.04167 10 2.04167H14C14.5304 2.04167 15.0391 2.25026 15.4142 2.62513C15.7893 3 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <img
                                src={profile.avatar?.image || profile.avatar}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                                style={profile.avatar?.style || {}}
                            />
                        </div>
                        <span className="text-gray-400 text-sm md:text-xl font-normal text-center truncate w-full">
                            {profile.name}
                        </span>
                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate("/")}
                className="mt-8 px-6 py-2 bg-white text-black font-semibold text-lg md:text-xl tracking-wide hover:bg-[#c00] hover:text-white transition-all duration-200 uppercase rounded-sm"
            >
                Fatto
            </button>
        </section>
    );
}
