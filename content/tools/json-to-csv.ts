import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "json-to-csv",
  name: "JSON to CSV Converter",
  category: "Converters",
  primary_keyword: "json to csv converter",
  meta_title: "JSON to CSV Converter – Convert JSON to Excel | DevMiniTools",
  meta_description: "Convert JSON array data to CSV table format instantly. Fast, offline, and supports nested JSON flattening. Free to use.",
  direct_answer: "This converter translates JSON structured arrays into standard flat CSV table data, running entirely in your browser.",
  what_is: `JSON to CSV conversion transforms hierarchically structured JSON (JavaScript Object Notation) data into a flat, tabular format (Comma-Separated Values). While JSON is perfect for nested records and APIs, CSV is the universal format for spreadsheet software like Microsoft Excel, Google Sheets, or data import pipelines. The conversion process scans JSON arrays, extracts unique keys to serve as table headers, and maps object properties to row columns, dynamically flattening nested objects if required.`,
  how_to_steps: [
    "Paste your JSON array or object list into the input box.",
    "The tool automatically parses and detects the keys of your JSON structure.",
    "Nested JSON structures are flattened into dot-notation headers automatically.",
    "View the generated CSV in the output text area.",
    "Click 'Copy' or download the output as a .csv file."
  ],
  example: {
    input: '[\n  {"id": 1, "user": {"name": "Emma"}},\n  {"id": 2, "user": {"name": "Liam"}}\n]',
    output: "id,user.name\n1,Emma\n2,Liam"
  },
  faqs: [
    { q: "How are nested objects handled?", a: "This tool flattens nested objects using dot-notation. For example, { 'user': { 'name': 'John' } } becomes a column header named 'user.name'." },
    { q: "What happens to JSON arrays inside objects?", a: "Arrays are serialized into a string format (e.g., bracketed or comma-joined lists) to fit within a single CSV cell structure." },
    { q: "Is there a file size limit?", a: "The tool runs locally in your browser memory. While it handles large files (up to several megabytes) easily, extremely huge datasets may cause browser lag. For gigabyte-sized files, use a command-line parser like jq." },
    { q: "Can I choose a different delimiter?", a: "This tool produces standard comma-separated values. You can easily find and replace commas with semicolons or tabs in any editor if needed." },
    { q: "Is my JSON structure validated first?", a: "Yes. The input must be a valid JSON array or object. If there are syntax errors, they will be highlighted before conversion." }
  ],
  related_tools: ["converters/csv-to-json", "converters/xml-to-json", "formatters/json-formatter"],
  related_articles: ["how-to-flatten-nested-json-structures", "compare-json-vs-csv-format"],
  schema_type: "WebApplication",
  last_updated: "2026-07-12"
};
