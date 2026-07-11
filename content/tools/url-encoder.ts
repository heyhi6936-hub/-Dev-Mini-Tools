import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "url-encoder",
  name: "URL Encoder / Decoder",
  category: "Encode / Decode",
  primary_keyword: "url encode decode online",
  meta_title: "URL Encoder & Decoder – Free Online Tool | DevMiniTools",
  meta_description: "Encode plain text into URL-safe percent-encoding or decode percent-encoded URLs back to plain text instantly in your browser.",
  direct_answer: "This tool encodes special characters in text to percent-encoded URL format and decodes percent-encoded strings back to plain text, all in your browser.",
  what_is: `URL encoding (also called percent-encoding) converts characters that are not allowed in a URL into a safe format. Characters like spaces, ampersands, and hash symbols carry special meaning in URLs, so they must be encoded as a percent sign followed by their two-digit hexadecimal ASCII code (e.g., a space becomes %20, & becomes %26). RFC 3986 defines the official URL character set. JavaScript provides two functions: encodeURIComponent() encodes everything except unreserved characters (A–Z, a–z, 0–9, -, _, ., ~), while encodeURI() preserves characters with structural URL meaning (like / and :) — a critical distinction that trips up even experienced developers.`,
  how_to_steps: [
    "Paste plain text or a URL string into the input field.",
    "Click 'Encode' to convert it to percent-encoded URL format.",
    "Or click 'Decode' to convert a percent-encoded string back to plain text.",
    "The result appears instantly in the output field below.",
    "Click 'Copy' to copy the encoded or decoded result to your clipboard."
  ],
  example: {
    input: "https://example.com/search?q=hello world&lang=en",
    output: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world%26lang%3Den"
  },
  faqs: [
    { q: "What is the difference between encodeURI and encodeURIComponent?", a: "encodeURI() encodes a complete URL, preserving structural characters like '/', ':', '?', '&', and '#'. encodeURIComponent() encodes a URI *component* (like a query value), converting those structural characters too. Use encodeURIComponent() for query parameter values." },
    { q: "Why does a space become %20 in URLs?", a: "Spaces are not allowed in URLs per RFC 3986. %20 is the percent-encoding of the ASCII code for space (decimal 32, hex 20). Some systems also use '+' for spaces in query strings (application/x-www-form-urlencoded format), which is slightly different." },
    { q: "My encoded URL looks wrong — some characters aren't encoded. Why?", a: "Unreserved characters (A–Z, a–z, 0–9, -, _, ., ~) are never encoded because they are safe in any URL context. This is correct behavior per the specification." },
    { q: "Can I decode a broken or truncated URL?", a: "You can decode partial URLs. The decoder processes each valid %XX sequence it finds and leaves any malformed sequences as-is, so truncated input is handled gracefully." },
    { q: "Is URL encoding the same as Base64 encoding?", a: "No. URL encoding replaces unsafe characters with %XX sequences and is still human-readable. Base64 transforms binary data into a 64-character alphanumeric format that is no longer human-readable, and is used for data transmission, not URL safety." }
  ],
  related_tools: ["encoders/base64-encoder-decoder", "encoders/html-encoder", "encoders/image-to-base64"],
  related_articles: ["compare-encodeuri-vs-encodeuricomponent", "glossary-percent-encoding", "how-to-build-query-strings"],
  schema_type: "WebApplication",
  last_updated: "2026-07-11"
};
