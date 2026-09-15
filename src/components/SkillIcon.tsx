import React, { useState } from "react";
import { SiExpress } from "react-icons/si";
import { Cpu, Code } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface SkillIconProps {
  icon: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({
  icon,
  className = "w-5 h-5",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hasError, setHasError] = useState(false);

  const normalized = icon.toLowerCase().replace(/[^a-z0-9]/g, "");

  // 1. Explicit Component Overrides (User requirements)
  if (normalized === "express" || normalized === "expressjs") {
    return (
      <SiExpress className={`${className} text-zinc-900 dark:text-zinc-100`} />
    );
  }

  if (
    normalized === "sensor" ||
    normalized === "sensors" ||
    normalized === "sensorsactuators"
  ) {
    return (
      <Cpu className={`${className} text-emerald-600 dark:text-emerald-400`} />
    );
  }

  if (normalized === "mockoon") {
    return <Code className={`${className} text-zinc-500`} />;
  }

  // 2. Local SVG Map from public/icons/
  const getSvgPath = (): string | null => {
    switch (normalized) {
      // Languages
      case "javascript":
      case "js":
        return "./icons/languages/javascript.svg";
      case "typescript":
      case "ts":
        return "./icons/languages/typescript.svg";
      case "python":
      case "py":
        return "./icons/languages/python.svg";
      case "cpp":
      case "cplusplus":
      case "c":
        return "./icons/languages/cpp.svg";

      // Frontend
      case "html5":
      case "html":
        return "./icons/frontend/html5.svg";
      case "css3":
      case "css":
        return "./icons/frontend/css3.svg";
      case "react":
      case "reactjs":
        return "./icons/frontend/reactjs.svg";
      case "tailwindcss":
      case "tailwind":
        return "./icons/frontend/tailwind.svg";
      case "vite":
        return "./icons/frontend/vite.svg";
      case "tanstackquery":
      case "tanstack":
      case "reactquery":
        return isDark
          ? "./icons/frontend/tanstack-dark.svg"
          : "./icons/frontend/tanstack-light.svg";

      // Backend
      case "nodedotjs":
      case "node":
      case "nodejs":
        return "./icons/backend/nodejs.svg";
      case "prisma":
        return isDark
          ? "./icons/backend/prisma-dark.svg"
          : "./icons/backend/prisma-light.svg";

      // Database
      case "postgresql":
      case "postgres":
        return "./icons/database/postgresql.svg";
      case "mysql":
        return "./icons/database/mysql.svg";

      // AI & Machine Learning
      case "pytorch":
        return "./icons/aiml/pytorch.svg";
      case "tensorflow":
        return "./icons/aiml/tensorflow.svg";

      // Hardware & IoT
      case "arduino":
        return "./icons/hardware/arduino.svg";

      // Developer Tools
      case "git":
        return "./icons/tools/git.svg";
      case "github":
        return isDark
          ? "./icons/tools/github-dark.svg"
          : "./icons/tools/github-light.svg";
      case "postman":
        return "./icons/tools/postman.svg";

      // Agentic Tools
      case "antigravity":
        return "./icons/agentic/antigravity.svg";
      case "opencode":
        return isDark
          ? "./icons/agentic/opencode-dark.svg"
          : "./icons/agentic/opencode-light.svg";
      case "openrouter":
        return "./icons/agentic/openrouter.svg";

      default:
        return null;
    }
  };

  const svgPath = getSvgPath();

  if (!svgPath || hasError) {
    return <Code className={`${className} text-zinc-500`} />;
  }

  return (
    <img
      src={svgPath}
      alt={icon}
      className={`${className} object-contain`}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};

export default SkillIcon;
