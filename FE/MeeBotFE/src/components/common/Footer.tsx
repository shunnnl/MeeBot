import MeeBotLogo from "../../assets/MeeBotLogo.svg";
import { Mn } from "./Typography";

interface TeamMember {
  name: string;
  github: string;
}

const Footer = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "seon207",
      github: "https://github.com/seon207"
    },
    {
      name: "BaeJihae",
      github: "https://github.com/BaeJihae"
    },
    {
      name: "shlee1103",
      github: "https://github.com/shlee1103"
    },
    {
      name: "shunnnl",
      github: "https://github.com/shunnnl"
    },
    {
      name: "zlb6030",
      github: "https://github.com/zlb6030"
    },
    {
      name: "jegyun",
      github: "https://github.com/jegyun"
    },
  ];

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 z-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src={MeeBotLogo} alt="MeeBot Logo" className="h-8 w-auto" />
              <span className="font-stunning text-xl font-bold bg-gradient-to-r from-[#1AEBB8] to-[#6CACEE] bg-clip-text text-transparent">
                AI 사회자 화상 채팅 서비스
              </span>
            </div>
            <div className="space-y-2">
              <Mn className="text-gray-400">
                SSAFY 삼성 청년 아카데미 프로젝트
              </Mn>
              <Mn className="text-gray-500">
                Copyright © 2025 MEEBOT. All rights reserved.
              </Mn>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 z-10">
            {teamMembers.map((member) => (
              <a
                key={member.name}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#1AEBB8] transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <Mn>{member.name}</Mn>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;