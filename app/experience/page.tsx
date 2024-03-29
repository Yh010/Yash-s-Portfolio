"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const experiences = [
  {
    companyName: "Full Stack Engineer Intern @Persana AI ( YCombinator W23 )",
    iconLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwAl71zX3_p4aQwSf5Io-ZV2KG9kR-Vh73JhLKmbPo6ecsEyz5Pi7MOa_Brb7aqDxa3o&usqp=CAU", // Replace with your Google Drive link
    description: `Extensively contributed to the frontend, migrating features from the legacy platform to the new one, and concurrently developed additional features for platform enhancement.
    
    Tech stacks: React with Typescript, Zustand,Tailwind, Chakra UI,MongoDb,Tanstack router`,
  },{
    companyName: "Sofware Developer Intern",
    iconLink: "https://corpwebstorage.blob.core.windows.net/media/46207/lnt-energy-hydrocarbon-logo.png", // Replace with your Google Drive link
    description: `Transformed operational efficiency through automated cable route extraction from AutoCAD .dxf files, reducing processing time from 25 days to 1 hour. Applied graph-based optimization with Dijkstra’s algorithm for plant layouts. Revolutionized LnT project documentation, implementing CRUD operations and SQL queries to cut manual user manual creation time from 1-2 days to 30 minutes. Streamlined data extraction, automating invoice and table information retrieval from PDFs, slashing processing time from 4-5 days to 15 minutes using Python libraries: Tabula, spaCy, Pdfplumber.`,
  },
  {
    companyName: "Open source contributor",
    iconLink: "https://boxboat.com/2021/12/06/secure-supply-chains-kyverno/featured.png", // Replace with your Google Drive link
    description: `◦ Kubernetes and Automation:
    Enhanced access control through the refinement of workflow tokens, yielding a 20% decrease in unauthorized access incidents. Implemented YAML field validation for specific policies, resulting in a 30% reduction in policy-related errors. Executed JMESPath validation, elevating data query accuracy by 40%.`,
  },
  {
    companyName: "Open source contributor @Internet Health Report",
    iconLink: "https://avatars.githubusercontent.com/u/40665700?s=200&v=4", // Replace with your Google Drive link
    description: `Developed a Vue.js front-end with IP address search, enhancing user experience and search functionality. Accomplished
    efficient back-end crawler scripts to fetch and link domain names to URLs, improving data retrieval. Increased data
    processing by retrieving information from a Kafka database, enabling real-time data aggregation. Achieved a 30%
    reduction in data retrieval time and a 20% increase in data aggregation efficiency`,
  },
];

// ... (previous code)

export default function Example() {
    return (
      <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 mt-20">
        <Navigation />
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {experiences.map((experience, index) => (
              <Card key={index}>
                <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 lg:pb-8 md:p-8"> {/* Adjusted padding classes */}
                  {/* Replace the social media icon with the company icon */}
                  <img
                    src={experience.iconLink}
                    alt={`Icon for ${experience.companyName}`}
                    className="w-30 h-20"
                  />
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 font-display">
                      {experience.companyName}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400">
                      {experience.description}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
  