import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "jwt-decoder",
  name: "JWT Decoder",
  category: "Security",
  primary_keyword: "jwt decoder online",
  meta_title: "JWT Decoder – Decode JSON Web Tokens Instantly | DevMiniTools",
  meta_description: "Decode and inspect JWT headers, payloads, and signatures instantly in your browser. No token is ever sent to a server.",
  direct_answer: "This tool decodes the header, payload, and signature of any JSON Web Token (JWT) instantly in your browser, with no server-side processing.",
  what_is: `A JSON Web Token (JWT, pronounced 'jot') is a compact, URL-safe means of representing claims securely between two parties, standardized in RFC 7519. A JWT consists of three Base64URL-encoded sections separated by dots: a Header (algorithm and token type), a Payload (claims like user ID, expiry, and roles), and a Signature (created by the server to verify the token has not been tampered with). JWTs are stateless — the server doesn't need to look them up in a database, as all the information (and the proof of its integrity) is embedded in the token itself. Critically, decoding a JWT is not the same as verifying it: anyone can decode the payload, as it is only Base64-encoded, not encrypted.`,
  how_to_steps: [
    "Paste your JWT token (the full xxxxxx.yyyyyyy.zzzzzz string) into the input field.",
    "The tool immediately splits and decodes the Header and Payload sections.",
    "Inspect the claims — look for 'exp' (expiry, as a Unix timestamp) and 'iat' (issued-at).",
    "Check the Algorithm field in the Header (e.g., HS256, RS256) to understand the signing method.",
    "Note: This tool decodes only. To verify the token's signature, you need the secret key on your backend."
  ],
  example: {
    input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    output: `Header: { "alg": "HS256", "typ": "JWT" }\nPayload: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }`
  },
  faqs: [
    { q: "Is it safe to paste my JWT token into this tool?", a: "Yes. The tool runs entirely in your browser — your token is never sent to our servers. However, as a general security practice, avoid pasting production tokens with sensitive user data into any online tool. Use a test token when possible." },
    { q: "What is the difference between decoding and verifying a JWT?", a: "Decoding reads the Base64URL-encoded contents (anyone can do this). Verifying checks that the signature was created with the correct secret key, confirming the token hasn't been tampered with. Verification requires the server's signing key." },
    { q: "Why is my JWT payload readable without a password?", a: "The JWT payload is encoded with Base64URL, not encrypted. This means the data is accessible to anyone who has the token. Never store sensitive secrets (passwords, credit card numbers) in a JWT payload." },
    { q: "What does the 'exp' claim mean?", a: "The 'exp' (expiration time) claim is a Unix timestamp (seconds since January 1, 1970 UTC) indicating when the token expires. Servers should reject tokens where the current time is past the 'exp' value." },
    { q: "What's the difference between HS256 and RS256?", a: "HS256 (HMAC-SHA256) uses a single shared secret for both signing and verification — simpler but requires sharing the secret. RS256 (RSA-SHA256) uses a private key to sign and a public key to verify — more secure for distributed systems since the public key can be shared without compromising the signing key." }
  ],
  related_tools: ["generators/hash-generator", "generators/password-generator", "encoders/base64-encoder-decoder"],
  related_articles: ["glossary-jwt", "compare-jwt-vs-session-cookies", "how-to-verify-jwt-nodejs"],
  schema_type: "WebApplication",
  last_updated: "2026-07-11"
};
