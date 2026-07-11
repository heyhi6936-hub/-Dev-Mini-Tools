import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "hash-generator",
  name: "MD5 & SHA Hash Generator",
  category: "Security",
  primary_keyword: "md5 sha256 hash generator",
  meta_title: "MD5, SHA-1, SHA-256 & SHA-512 Hash Generator | DevMiniTools",
  meta_description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text instantly in your browser. Free, offline, and secure.",
  direct_answer: "This tool computes MD5, SHA-1, SHA-256, and SHA-512 cryptographic hashes from any input text entirely in your browser.",
  what_is: `A cryptographic hash function is a one-way mathematical algorithm that converts any input (text, files, data) into a fixed-size string of characters — called a digest or hash. The same input always produces the same hash, but even a single character change causes a completely different output (avalanche effect). SHA-256, part of the SHA-2 family, produces a 256-bit (64-character hex) digest and is considered cryptographically secure. MD5, while still widely used for checksums and data integrity verification, is no longer considered secure for password storage or digital signatures due to known collision vulnerabilities discovered in 2004.`,
  how_to_steps: [
    "Type or paste your input text into the input field.",
    "The MD5, SHA-1, SHA-256, and SHA-512 hashes are computed live as you type.",
    "Select the hash algorithm you need from the tabs.",
    "Click 'Copy' to copy the hash digest to your clipboard.",
    "Use for file integrity checks, data fingerprinting, or API signature generation."
  ],
  example: {
    input: "Hello, World!",
    output: "SHA-256: dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986d"
  },
  faqs: [
    { q: "Can I use MD5 for password hashing?", a: "No. MD5 (and SHA-1) are cryptographically broken for this purpose. Use bcrypt, scrypt, or Argon2id for password storage — they are slow by design to resist brute-force attacks." },
    { q: "What is the difference between MD5, SHA-1, SHA-256, and SHA-512?", a: "MD5 produces a 128-bit hash and is broken for security. SHA-1 produces 160 bits and is deprecated. SHA-256 (recommended) produces 256 bits and is currently secure. SHA-512 produces 512 bits for even higher security needs." },
    { q: "Is hashing the same as encryption?", a: "No. Encryption is reversible (you can decrypt with a key). Hashing is a one-way function — you cannot recover the original input from a hash. This is why hashes are used for password verification, not storage." },
    { q: "Why does my hash look different from another tool?", a: "Ensure you're using the same algorithm and that the input text is identical, including whitespace and line endings. A single extra space will produce a completely different hash." },
    { q: "Is this tool sending my data to a server?", a: "No. All hashing is performed in your browser using the native Web Crypto API (SHA family) or a pure JavaScript implementation (MD5). Nothing is transmitted." }
  ],
  related_tools: ["generators/password-generator", "generators/uuid-generator", "security/jwt-decoder"],
  related_articles: ["compare-md5-vs-sha256", "glossary-hash-functions", "how-to-verify-file-checksums"],
  schema_type: "WebApplication",
  last_updated: "2026-07-11"
};
