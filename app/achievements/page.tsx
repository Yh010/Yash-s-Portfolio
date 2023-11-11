"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const experiences = [
  {
    companyName: "All over India Top 50",
    iconLink: "https://media.licdn.com/dms/image/D5622AQEHEH2Ql8hPIw/feedshare-shrink_800/0/1695975791730?e=1700092800&v=beta&t=mAQ0F525UlqBX_bnTPt7RHSorQUcKB_vB5tHyB1ikBs", // Replace with your Google Drive link
    Date: "October 2023",
    description: `Problem:

    Efficiently transfer diverse data between vehicles and external entities
    Demand for a secure, resilient, low-latency, and high-throughput software framework
    Essential mobile application for user access and control
    Solution:
    
    Introduce AI-Driven Networking and Processing Architecture (AIDA)
    Utilize IEEE 802.1 TSN for real-time communication
    Feature edge compute monitoring with Prometheus, Loki, Grafana
    Support pluggable ML pipelines for edge node data processing
    Ensure reliable communication and fine-grained performance monitoring
    Provide centralized management for industrial IoT networks`,
  },
  {
    companyName: "National Finalist",
    iconLink: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/64ca1d68357b4_dr-reddys-aspire-the-ultimate-case-study-challenge.jpg", // Replace with your Google Drive link
    Date: "September 2023",
    description: `Revolutionized pharmaceutical bead mill processes, vital in drug formulation, through strategic optimization. Addressed five technical challenges, enhancing particle size control, process efficiency, and equipment optimization. Overcame optimization hurdles by adjusting parameters and suggesting quality control improvements. Presented comprehensive solutions in a persuasive PowerPoint format, showcasing problem identification, proposed strategies, rationale, and supporting data. Achieved objectives by analyzing technical challenges, devising innovative solutions, and providing compelling evidence for feasibility and effectiveness.`,
  },

];

// ... (previous code)

// ... (previous code)

// ... (previous code)

export default function Example() {
    return (
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
          <div className="grid w-full grid-cols-3 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {experiences.map((experience, index) => (
              <Card key={index}>
                <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 lg:pb-8 md:p-8 max-h-full overflow-y-auto">
                  <img
                    src={experience.iconLink}
                    alt={`Icon for ${experience.companyName}`}
                    className="w-40 h-30"
                  />
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 font-display">
                      {experience.companyName}
                    </span>
                    <span className="text-zinc-400 mt-2">{experience.Date}</span>
                    <span className="mt-2 text-sm text-center duration-1000 text-zinc-400">
                      {experience.description}
                    </span>
                    {index === 0 && ( // Only show the link in the first card
                      <a
                        href="https://www.canva.com/design/DAFzSTUgQqo/56NdP4HaZmhwqG9vWhQovg/edit?utm_content=DAFzSTUgQqo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-700 mt-2"
                      >
                        View our work here
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
  