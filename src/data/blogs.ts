export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string;
}

export const blogs: Post[] = [
  {
    slug: "reprocessing-vs-backfilling",
    title: "Reprocessing vs. Backfilling in Data Engineering",
    excerpt: "Understand the key differences between reprocessing and backfilling, when to use each, and how they address different needs in a data platform.",
    date: "2026-02-28",
    category: "Data Engineering",
    author: "DataCraft Team",
    image: "/assets/blog/reprocessing-backfilling.jpg",
    content: `
# Reprocessing vs. Backfilling in Data Engineering

In data engineering, two terms often appear when dealing with historical data corrections or pipeline updates: **reprocessing** and **backfilling**. Although they are related, they address different needs within a data platform.

## Reprocessing
Reprocessing refers to running an existing data pipeline again on data that already passed through it, usually to fix logic errors, apply new transformations, or correct issues caused by code defects.

### Key Characteristics:
- Uses the same input data but applies updated logic.
- Typically triggered by pipeline bugs, incorrect transformations, or updated business rules.
- May overwrite or update existing processed data.

### Example Use Case:
A data engineering team discovers that a transformation function applied an incorrect exchange rate for the last 7 days. After fixing the logic, they reprocess all affected data from the last 7 days to produce corrected outputs.

## Backfilling
Backfilling involves processing data for time periods that were never processed before—usually because of system downtime, late-arriving data, or the introduction of a new pipeline.

### Key Characteristics:
- Fills missing historical data.
- Usually triggered by gaps in data ingestion or introduction of new assets.
- May require running pipelines on dates or partitions that were previously empty.

### Example Use Case:
A new daily sales dashboard is introduced in February, but the business wants the dashboard populated with data starting from the beginning of the fiscal year. The data team runs a backfill to load missing data from January 1 to January 31.

## Sometimes Both Occur Together
**Example:** A pipeline was down for 3 days and the transformation logic was wrong. The team first backfills the missing 3 days, then reprocesses the last month with corrected logic.
    `
  }
];
