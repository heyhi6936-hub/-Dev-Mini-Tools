import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "base64-encoder-decoder",
  name: "Base64 Encoder / Decoder",
  category: "Encode / Decode",
  primary_keyword: "base64 encode decode online",
  meta_title: "Base64 Encoder & Decoder – Free Online Tool | DevMiniTools",
  meta_description: "Encode text to Base64 or decode Base64 back to plain text instantly in your browser. Free, no signup, nothing uploaded.",
  direct_answer: "This tool converts text to Base64 and Base64 back to text instantly, entirely in your browser.",
  what_is: `Base64 is a binary-to-text encoding scheme that represents binary data using 64 printable ASCII characters (A–Z, a–z, 0–9, +, /). It's commonly used to embed images in CSS/HTML (data URLs), encode credentials in HTTP Basic Auth headers, and safely transmit binary data through text-only channels like JSON or email. Base64 is not encryption — it's easily reversible and should never be used to protect sensitive data.`,
  how_to_steps: [
    "Paste plain text into the left panel to encode it to Base64.",
    "Or paste a Base64 string into the right panel to decode it back to text.",
    "Encoding/decoding happens live as you type.",
    "Click 'Copy' to copy either result to your clipboard."
  ],
  example: {
    input: "Hello, World!",
    output: "SGVsbG8sIFdvcmxkIQ=="
  },
  faqs: [
    { q: "Is Base64 encoding the same as encryption?", a: "No. Base64 is reversible by anyone — it provides encoding for safe transmission, not confidentiality. Use proper encryption (e.g., AES) if you need security." },
    { q: "Why does my Base64 string end with = or ==?", a: "The = characters are padding, added when the input length isn't a multiple of 3 bytes, so the output aligns to a multiple of 4 characters." },
    { q: "Can I encode an image to Base64 with this tool?", a: "This tool handles text. For images, use our dedicated Image to Base64 converter, which outputs a ready-to-use data URL." },
    { q: "Is my text uploaded when I use this tool?", a: "No — encoding and decoding both run locally in your browser using the native JavaScript atob()/btoa() functions." },
    { q: "Why does decoding fail with an error?", a: "This usually means the input isn't valid Base64 — check for missing padding, stray whitespace, or characters outside the Base64 alphabet." }
  ],
  related_tools: ["encoders/image-to-base64", "encoders/base64-to-image", "encoders/url-encoder", "encoders/html-encoder"],
  related_articles: ["glossary-base64", "compare-base64-vs-hex", "how-to-decode-base64-image"],
  schema_type: "WebApplication",
  last_updated: "2026-07-11"
};
