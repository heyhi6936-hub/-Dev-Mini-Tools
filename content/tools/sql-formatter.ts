import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "sql-formatter",
  name: "SQL Formatter",
  category: "Code & Format",
  primary_keyword: "sql formatter online",
  meta_title: "SQL Formatter – Format SQL Queries Online | DevMiniTools",
  meta_description: "Format, beautify, and clean up SQL queries instantly in your browser. Supports MySQL, PostgreSQL, MS SQL, Oracle dialects.",
  direct_answer: "This SQL Formatter structures, indents, and capitalizes SQL queries locally in your browser for better readability and debugging.",
  what_is: `A SQL Formatter is a developer utility that reformats SQL (Structured Query Language) statements by standardizing indentations, wrapping clauses (like SELECT, FROM, JOIN, WHERE), and capitalizing keywords. Raw SQL code extracted from application logs, ORM queries, or manual scripts often looks like a long, unreadable single line. Beautifying these queries makes it significantly easier to review query logic, spot missing indexes, inspect complex JOIN operations, and identify performance bottlenecks before database deployment.`,
  how_to_steps: [
    "Paste your raw, messy, or minified SQL query into the editor.",
    "Select your preferred SQL dialect (e.g., standard SQL, MySQL, or PostgreSQL).",
    "Choose keyword capitalization preferences (e.g. UPPERCASE or lowercase).",
    "Click 'Format SQL' to restructure the query.",
    "Click 'Copy' to copy the beautified query to your clipboard."
  ],
  example: {
    input: "select id,name from users where status='active' join roles on roles.id=users.role_id",
    output: "SELECT\n  id,\n  name\nFROM\n  users\n  JOIN roles ON roles.id = users.role_id\nWHERE\n  status = 'active'"
  },
  faqs: [
    { q: "Does this formatter validate SQL query syntax?", a: "No. The tool is designed to format queries for readability. It does not validate syntax, check table existence, or verify column names against a schema." },
    { q: "Which SQL dialects are supported?", a: "It supports ANSI SQL, MySQL, PostgreSQL, SQL Server (T-SQL), Oracle, and SQLite formatting styles." },
    { q: "Will the formatter capitalize my custom column names?", a: "By default, the formatter capitalizes standard SQL keywords (like SELECT, JOIN, GROUP BY) but leaves your custom table and column names exactly as you typed them." },
    { q: "Is my SQL query secure from being leaked?", a: "Yes. The query is processed locally in your browser and is never sent over the internet or stored anywhere." },
    { q: "Can I customize the indentation size?", a: "Yes. You can toggle between 2 spaces, 4 spaces, or tab indentations to match your team's style guides." }
  ],
  related_tools: ["formatters/js-beautifier", "formatters/html-beautifier", "formatters/css-formatter"],
  related_articles: ["sql-best-practices-casing-indentation", "how-to-optimize-nested-sql-queries"],
  schema_type: "WebApplication",
  last_updated: "2026-07-12"
};
