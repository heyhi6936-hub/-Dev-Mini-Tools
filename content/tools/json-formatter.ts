import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "json-formatter",
  name: "JSON Formatter & Validator",
  category: "Code & Format",
  primary_keyword: "json formatter online",
  meta_title: "JSON Formatter & Validator – Free Online Tool | DevMiniTools",
  meta_description: "Format, validate, and minify JSON instantly in your browser. No upload, no signup — nothing leaves your device.",
  direct_answer: "DevMiniTools' JSON Formatter instantly indents, validates, and minifies JSON in your browser, with zero upload and zero signup.",
  what_is: `JSON (JavaScript Object Notation) is a lightweight, text-based data format used to exchange structured data between a server and a client, most commonly in REST APIs. A JSON formatter takes minified or messy JSON and re-indents it into a human-readable structure, while a validator checks that the syntax follows the JSON spec (RFC 8259) — catching missing commas, unquoted keys, or trailing commas before they break your code.`,
  how_to_steps: [
    "Paste or type your JSON into the input panel.",
    "The tool auto-formats and validates as you type — no button needed.",
    "Syntax errors are highlighted inline with the exact line number.",
    "Click 'Minify' to compress the same JSON for production use.",
    "Click 'Copy' to copy the formatted or minified output."
  ],
  example: {
    input: '{"name":"Alex","age":29,"skills":["JS","SQL"]}',
    output: `{\n  "name": "Alex",\n  "age": 29,\n  "skills": ["JS", "SQL"]\n}`
  },
  faqs: [
    { q: "Is this JSON formatter free to use?", a: "Yes, completely free with no signup, no usage limits, and no watermarking." },
    { q: "Does my JSON get uploaded to a server?", a: "No. All formatting and validation happens locally in your browser — your data never leaves your device." },
    { q: "Can I minify JSON with this tool?", a: "Yes — the same tool toggles between pretty-print (indented) and minified (single-line, whitespace-stripped) output." },
    { q: "Does it validate against JSON Schema?", a: "It validates syntax correctness (RFC 8259) but not against a custom JSON Schema — for schema validation use our JSON Schema Validator (planned) or a dedicated library." },
    { q: "What's the difference between formatting and minifying JSON?", a: "Formatting adds indentation and line breaks for readability during development; minifying strips all whitespace to reduce payload size for production APIs." }
  ],
  related_tools: ["formatters/html-beautifier", "converters/json-to-csv", "converters/csv-to-json", "converters/xml-to-json"],
  related_articles: ["glossary-json-schema", "compare-json-vs-yaml", "how-to-flatten-nested-json"],
  schema_type: "WebApplication",
  last_updated: "2026-07-11"
};
