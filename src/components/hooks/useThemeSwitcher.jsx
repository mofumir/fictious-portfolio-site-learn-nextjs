import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    if (mode === "") {
      if (userPref) setMode(userPref);
      else setMode(mediaQuery.matches ? "dark" : "light");
    }

    // this only runs when button is clicked so i need that if thing above, otherwise refresh will unset the theme
    // it works so its okay i guess, tho i kinda wanna hide that transition to dark theme on refresh
    // need to find a way to set the theme before the page loads
    // maybe i can use nextjs's getInitialProps or getServerSideProps < idk this is from copilot so i need to google it

    const handleThemeChange = () => {
      let check = null;
      if (userPref) check = userPref === "dark" ? "light" : "dark";
      else check = mediaQuery.matches ? "dark" : "light";
      setMode(check);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  });

  useEffect(() => {
    switch (mode) {
      case "dark":
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        break;
      case "light":
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        break;
    }
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwitcher;
