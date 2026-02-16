import { createContext, useContext, useEffect, useState } from "react";
import Avatar from "../assets/Avatar-1.png";

const ProfileContext = createContext();

export function useProfile() {
    return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
    const [profiles, setProfiles] = useState(() => {
        const saved = localStorage.getItem("profiles");
        return saved ? JSON.parse(saved) : [];
    });

    const [activeProfile, setActiveProfile] = useState(() => {
        const saved = localStorage.getItem("activeProfile");
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        localStorage.setItem("profiles", JSON.stringify(profiles));
    }, [profiles]);

    useEffect(() => {
        if (activeProfile) {
            localStorage.setItem("activeProfile", JSON.stringify(activeProfile));
        } else {
            localStorage.removeItem("activeProfile");
        }
    }, [activeProfile]);

    function addProfile(name, avatar = { image: Avatar, style: {} }) {
        const newProfile = {
            id: Date.now(),
            name,
            avatar,
            myList: [],
        };
        setProfiles((prev) => [...prev, newProfile]);
    }

    function switchProfile(profileId) {
        const profile = profiles.find((p) => p.id === profileId);
        if (profile) {
            setActiveProfile(profile);
        }
    }

    function logout() {
        setActiveProfile(null);
    }

    function deleteProfile(profileId) {
        setProfiles((prev) => prev.filter((p) => p.id !== profileId));
        if (activeProfile && activeProfile.id === profileId) {
            setActiveProfile(null);
        }
    }

    function addToMyList(movie) {
        if (!activeProfile) return;

        const updatedProfile = { ...activeProfile };
        const exists = updatedProfile.myList.some((item) => item.id === movie.id);

        if (exists) {
            updatedProfile.myList = updatedProfile.myList.filter((item) => item.id !== movie.id);
        } else {
            updatedProfile.myList = [...updatedProfile.myList, movie];
        }

        setActiveProfile(updatedProfile);

        setProfiles((prev) =>
            prev.map((p) => (p.id === activeProfile.id ? updatedProfile : p))
        );
    }

    function isInMyList(movieId) {
        return activeProfile?.myList?.some((item) => item.id === movieId);
    }

    return (
        <ProfileContext.Provider
            value={{
                profiles,
                activeProfile,
                addProfile,
                switchProfile,
                logout,
                deleteProfile,
                addToMyList,
                isInMyList,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}
