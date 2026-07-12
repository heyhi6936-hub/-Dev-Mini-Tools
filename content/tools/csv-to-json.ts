import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "csv-to-json",
  name: "CSV to JSON Converter",
  category: "Converters",
  primary_keyword: "csv to json converter",
  meta_title: "CSV to JSON Converter – Convert Tables to JSON | DevMiniTools",
  meta_description: "Convert Comma-Separated Values (CSV) table data into structured JSON array format instantly. Secure, offline, and supports type inference.",
  direct_answer: "This tool parses CSV tabular data and converts it into structured JSON arrays instantly in your browser.",
  what_is: `CSV to JSON conversion translates tabular data (such as sheets exported from Microsoft Excel or Google Sheets) into structured JSON arrays. In modern web engineering, CSV exports from CRM or database systems must be converted to JSON objects to be consumed by APIs or client-side JavaScript. The converter parses rows (separated by newlines) and columns (separated by delimiters like commas or semicolons), using the first row as keys to construct an array of objects. It also attempts type inference, converting numeric strings into actual numbers and 'true'/'false' values into booleans.`,
  how_to_steps: [
    "Paste your raw CSV text into the input field.",
    "The first line is automatically treated as the header row containing keys.",
    "The tool parses columns and generates a formatted JSON array of objects.",
    "Toggle formatting options like pretty-print indentations if necessary.",
    "Click 'Copy' to copy the structured JSON payload to your clipboard."
  ],
  example: {
    input: "id,name,active\n1,Sophia,true\n2,Jacob,false",
    output: '[\n  {\n    "id": 1,\n    "name": "Sophia",\n    "active": true\n  },\n  {\n    "id": 2,\n    "name": "Jacob",\n    "active": false\n  }\n]'
  },
  faqs: [
    { q: "How are line breaks inside CSV cells handled?", a: "Standard CSV rules (RFC 4180) wrap cells with line breaks inside double quotes. This parser correctly respects quoted cell boundaries." },
    { q: "Does the tool automatically parse numbers and booleans?", a: "Yes. The parser detects numeric values and booleans and outputs them as unquoted numbers/booleans in JSON, rather than keeping them all as strings." },
    { q: "Does it support tabs or semicolons as separators?", a: "Yes. It scans the input to automatically detect comma, semicolon, or tab delimiters, ensuring clean parsing." },
    { q: "What happens to rows with missing cells?", a: "If a row has fewer values than the header, the missing values are mapped to empty strings or null keys in the output JSON object." },
    { q: "Is my table data uploaded to the internet?", a: "No. The parsing code runs entirely in your local browser window. No network requests are made." }
  ],
  related_tools: ["converters/json-to-csv", "converters/xml-to-json", "formatters/json-formatter"],
  related_articles: ["rfc-4180-csv-standard-guide", "how-to-import-csv-into-mongodb"],
  schema_type: "WebApplication",
  last_updated: "2026-07-12"
};
