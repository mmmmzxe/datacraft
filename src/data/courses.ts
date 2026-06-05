export interface Course {
  slug: string;
  title: string;
  level: string;
  category: string;
  duration: string;
  image: string;
  description: string;
  outcome: string;
  keySkill: string;
  professionalStatement: string;
  rating: number;
  ratingCount: string;
}

export const courseLevels = [
  { id: 'beginner', name: 'Beginner', status: 'available' },
  { id: 'intermediate', name: 'Intermediate', status: 'available' },
  { id: 'advanced', name: 'Advanced', status: 'coming-soon' },
];

export const beginnerGraduationOutcome = {
  title: "Beginner Level Graduation Outcome",
  description: "Upon completion of the Beginner Track, graduates will have transitioned from data enthusiasts to Junior Data Engineering Associates. Students will possess a comprehensive 'Full-Stack Foundation,' moving beyond basic data manipulation to architecting robust data environments.",
  points: [
    {
      title: "Architectural Literacy",
      text: "Ability to design ERDs and Kimball-style Dimensional Models that align with specific business logic and 'Single Source of Truth' principles."
    },
    {
      title: "Programmatic Automation",
      text: "Mastery of Python, SQL, and Bash to build automated, end-to-end ETL/ELT workflows that bridge the gap between raw APIs and structured Data Warehouses."
    },
    {
      title: "Cloud Infrastructure",
      text: "Hands-on proficiency in provisioning and managing secure, high-availability data assets (Compute, Storage, and BigQuery) within the Google Cloud ecosystem."
    },
    {
      title: "Engineering Best Practices",
      text: "Adoption of industry-standard DevOps workflows, including Git version control, Linux system administration, and network troubleshooting."
    }
  ]
};

export const courses: Course[] = [
  {
    slug: "databases-concepts",
    title: "Databases Concepts",
    level: "Beginner",
    category: "Data Engineering",
    duration: "2 weeks",
    image: "/assets/databases-course.png",
    description: "Master the foundations of relational database design, theory, and implementation.",
    outcome: "Students will transition from flat-file data management to relational systems. They will be able to translate complex business requirement documents into optimized Entity-Relationship Diagrams (ERDs).",
    keySkill: "Implementing Normalization to ensure data integrity and leveraging Indexing strategies to optimize query performance in production environments.",
    professionalStatement: "Design and normalize relational schemas from business docs.",
    rating: 4.8,
    ratingCount: "1,250"
  },
  {
    slug: "sql-mastery",
    title: "Structured Query Language (SQL)",
    level: "Beginner",
    category: "Data Engineering",
    duration: "3.5 weeks",
    image: "/assets/sql-course.png",
    description: "Go from basic CRUD to advanced analytical window functions and complex query optimization.",
    outcome: "Students will achieve full fluency in SQL, moving from basic CRUD operations to advanced analytical queries.",
    keySkill: "Writing high-performance queries that utilize window functions, complex joins, and CTEs (Common Table Expressions) to extract actionable insights from raw data.",
    professionalStatement: "Write expert-level queries for any data retrieval task.",
    rating: 4.9,
    ratingCount: "2,100"
  },
  {
    slug: "dwh-etl-concepts",
    title: "Data Warehouse & ETL Concepts",
    level: "Beginner",
    category: "Data Engineering",
    duration: "3 weeks",
    image: "/assets/dwh-course.png",
    description: "Architect scalable analytical environments using Kimball Dimensional Modeling.",
    outcome: "Students will be able to architect a scalable analytical environment. They will master Kimball Dimensional Modeling, including the design of Fact and Dimension tables derived from business logic.",
    keySkill: "Designing ETL/ELT workflows that incorporate Change Data Capture (CDC) and fundamental Data Governance practices to ensure 'single source of truth' reliability.",
    professionalStatement: "Build production-ready Dimensional Models (Star/Snowflake).",
    rating: 4.7,
    ratingCount: "850"
  },
  {
    slug: "python-data-engineering",
    title: "Python Programming Language",
    level: "Beginner",
    category: "Data Engineering",
    duration: "2.5 weeks",
    image: "/assets/2.png",
    description: "Build functional data scripts and automate data movement between systems.",
    outcome: "Students will develop the programming foundation necessary to automate data movement. They will go beyond basic syntax to build functional data scripts.",
    keySkill: "Programmatically interacting with the data ecosystem by using Pandas for transformation, connecting to Relational Databases, and consuming data from REST APIs.",
    professionalStatement: "Automate data ingestion from APIs and Databases.",
    rating: 4.9,
    ratingCount: "3,400"
  },
  {
    slug: "linux-bash-scripting",
    title: "Linux & Bash Scripting",
    level: "Beginner",
    category: "Infrastructure",
    duration: "1.5 weeks",
    image: "/assets/3.png",
    description: "Master the command line and automate system tasks in remote server environments.",
    outcome: "Students will transition from being GUI-dependent to command-line proficient. They will be able to manage remote servers, handle file permissions, and automate repetitive system tasks.",
    keySkill: "Writing Bash scripts to automate data ingestion tasks, monitor system resources, and manage cron jobs for scheduled data pipelines.",
    professionalStatement: "Automate data workflows and manage remote servers via CLI.",
    rating: 4.6,
    ratingCount: "1,100"
  },
  {
    slug: "networking-basics",
    title: "Networking Basics",
    level: "Beginner",
    category: "Infrastructure",
    duration: "1.5 weeks",
    image: "/assets/hero-main.png",
    description: "Understand the core protocols and infrastructure that power the internet and distributed systems.",
    outcome: "Students will understand what a network is, why it is important, and the different types and shapes of networks, as well as the difference between a network and the Internet. They will learn about network layers, IP addresses, MAC addresses, and common protocols.",
    keySkill: "Mastering IP addressing, DNS, and SSH, as well as understanding the role of Firewalls and Load Balancers in maintaining high-availability data infrastructure.",
    professionalStatement: "Configure secure communication between distributed data services.",
    rating: 4.5,
    ratingCount: "750"
  },
  {
    slug: "git-github-intro",
    title: "Introduction to Git & GitHub",
    level: "Beginner",
    category: "Development",
    duration: "1 week",
    image: "/assets/databases-course.png",
    description: "Adopt professional software engineering best practices for version control and collaboration.",
    outcome: "Students will adopt professional software engineering best practices for data projects. They will be able to collaborate in teams without code conflicts and maintain a history of all changes.",
    keySkill: "Utilizing Branching, Merging, and Pull Requests to manage code versioning, and using GitHub as a central repository for CI/CD foundations.",
    professionalStatement: "Collaborate on data engineering codebases using version control.",
    rating: 4.8,
    ratingCount: "1,500"
  },
  {
    slug: "gcp-fundamentals",
    title: "Google Cloud Platform (GCP)",
    level: "Beginner",
    category: "Cloud",
    duration: "1 week",
    image: "/assets/dwh-course.png",
    description: "Provision and manage essential cloud resources for modern data stacks.",
    outcome: "Students will move from local computing to scalable cloud environments. They will be able to provision and manage the essential cloud resources required for modern data stacks.",
    keySkill: "Deploying and configuring Compute Engine (VMs) for hosting scripts, Cloud Storage (GCS) for data lakes, and BigQuery for serverless data warehousing.",
    professionalStatement: "Provision and scale data infrastructure on a leading cloud provider.",
    rating: 4.7,
    ratingCount: "1,200"
  }
  ,
  {
    slug: "advanced-sql-tuning",
    title: "Advanced SQL Tuning",
    level: "Intermediate",
    category: "Data Engineering",
    duration: "3 weeks",
    image: "/assets/sql-course.png",
    description: "Deep-dive into database internals, execution plans, and indexing strategies to optimize analytical queries at scale.",
    outcome: "Students will master the internal mechanics of database engines to optimize query performance at scale, transitioning to engineering high-performance analytical workloads.",
    keySkill: "Analyzing execution plans and designing indexing strategies to remove performance bottlenecks and reduce cloud data warehouse costs.",
    professionalStatement: "Engineer high-performance SQL for production analytical workloads.",
    rating: 4.8,
    ratingCount: "320"
  },
  {
    slug: "analytics-engineering-dbt",
    title: "Analytics Engineering (dbt)",
    level: "Intermediate",
    category: "Analytics",
    duration: "3 weeks",
    image: "/assets/dwh-course.png",
    description: "Adopt the ELT paradigm using dbt to transform raw data into production-ready models with software engineering practices.",
    outcome: "Students will build modular, tested, and documented data models using dbt, applying version control and CI for reliable deployments.",
    keySkill: "Building modular data models with Jinja and macros to maintain a single source of truth across the Medallion architecture.",
    professionalStatement: "Produce production-ready, tested data models using dbt.",
    rating: 4.7,
    ratingCount: "210"
  },
  {
    slug: "docker-for-data-engineers",
    title: "Docker for Data Engineers",
    level: "Intermediate",
    category: "Infrastructure",
    duration: "2 weeks",
    image: "/assets/2.png",
    description: "Containerize data applications to achieve reproducible environments and portable deployments.",
    outcome: "Students will containerize data stacks and orchestrate multi-container setups to ensure consistency across environments.",
    keySkill: "Using Docker Compose to orchestrate Spark, databases, and custom Python services in isolated environments.",
    professionalStatement: "Deliver portable, reproducible data applications using containers.",
    rating: 4.6,
    ratingCount: "180"
  },
  {
    slug: "infrastructure-as-code-terraform",
    title: "Infrastructure as Code (Terraform)",
    level: "Intermediate",
    category: "Cloud",
    duration: "2.5 weeks",
    image: "/assets/3.png",
    description: "Provision cloud data platforms programmatically using Terraform modules and best practices.",
    outcome: "Students will define data lakes, warehouses, and IAM as version-controlled code to enable auditable, repeatable deployments.",
    keySkill: "Managing cloud state and modular infrastructure to deploy scalable data architectures quickly.",
    professionalStatement: "Provision production-grade cloud resources using Terraform modules.",
    rating: 4.7,
    ratingCount: "140"
  },
  {
    slug: "ci-cd-data-platforms",
    title: "CI/CD for Data Platforms",
    level: "Intermediate",
    category: "DevOps",
    duration: "2 weeks",
    image: "/assets/ci-cd-course.png",
    description: "Automate testing and deployment of data platform components using GitHub Actions and similar tooling.",
    outcome: "Students will implement automated pipelines that validate data quality and deploy changes safely to production.",
    keySkill: "Implementing GitHub Actions and automated workflows to trigger tests, data quality checks, and deployments.",
    professionalStatement: "Automate deployment pipelines for data engineering projects.",
    rating: 4.6,
    ratingCount: "130"
  },
  {
    slug: "airflow-data-orchestration",
    title: "Data Orchestration (Airflow)",
    level: "Intermediate",
    category: "Orchestration",
    duration: "3 weeks",
    image: "/assets/hero-main.png",
    description: "Design and operate resilient data pipelines using Apache Airflow, advanced DAG patterns, and custom operators.",
    outcome: "Students will architect complex, fault-tolerant pipelines with programmatic scheduling and advanced failure handling.",
    keySkill: "Designing advanced DAGs and custom operators to integrate Spark jobs, dbt models, and cloud services.",
    professionalStatement: "Build production-grade orchestrations for large-scale data workloads.",
    rating: 4.7,
    ratingCount: "150"
  },
  {
    slug: "capstone-project",
    title: "Capstone Project",
    level: "Intermediate",
    category: "Project",
    duration: "4 weeks",
    image: "/assets/databases-course.png",
    description: "A guided, hands-on project that brings together all intermediate skills into a production-ready pipeline.",
    outcome: "Students will design, implement, and deploy an end-to-end data pipeline incorporating SQL tuning, dbt models, containerized services, IaC, CI/CD, and orchestration.",
    keySkill: "Applying integrated platform skills to deliver a production-grade data solution from ingestion to serving.",
    professionalStatement: "Deliver a complete, production-ready data engineering project.",
    rating: 4.9,
    ratingCount: "95"
  }
];
