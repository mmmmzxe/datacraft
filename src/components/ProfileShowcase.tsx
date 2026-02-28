'use client';


export default function ProfileShowcase() {
  return (
    <section className="relative bg-white  overflow-hidden">
      {/* Subtle background pattern */}
     
     
    

        {/* Tools Grid */}
  
<div className="flex flex-wrap justify-center items-center gap-12 py-8 bg-[#f7f8fa]">
  {[
    {
      name: "Databases",
      src: "https://cdn.simpleicons.org/mysql",
    },
    {
      name: "SQL",
      src: "https://cdn.simpleicons.org/postgresql",
    },
    {
      name: "Data Warehouse & ETL",
      src: "https://cdn.simpleicons.org/apacheairflow",
    },
    {
      name: "Linux & Bash",
      src: "https://cdn.simpleicons.org/linux",
    },
    {
      name: "Git & GitHub",
      src: "https://cdn.simpleicons.org/github",
    },
    {
      name: "Python",
      src: "https://cdn.simpleicons.org/python",
    },
    {
      name: "Google Cloud Platform",
      src: "https://cdn.simpleicons.org/googlecloud",
    },
  ].map((company) => (
    <div key={company.name} className="flex items-center justify-center h-16">
      <img
        src={company.src}
        alt={company.name}
        className="object-contain grayscale opacity-80 hover:grayscale-0 transition duration-300"
        style={{ width: 90, height: 40 }}
      />
    </div>
  ))}
</div>



    
    </section>
  );
}
