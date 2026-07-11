import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "password-generator",
  name: "Random Password Generator",
  category: "Security",
  primary_keyword: "random password generator",
  meta_title: "Random Password Generator – Secure & Offline | DevMiniTools",
  meta_description: "Generate highly secure, cryptographically random passwords instantly in your browser. Your generated passwords are never uploaded.",
  direct_answer: "This tool generates highly secure, cryptographically random passwords directly on your device, ensuring maximum security with zero data transmission.",
  what_is: `A random password generator is a tool that creates complex, unpredictable sequences of characters to secure accounts and systems against brute-force and dictionary attacks. Instead of relying on predictable patterns or reused passwords, a strong generator uses cryptographically secure pseudorandom number generators (CSPRNG) — like the browser's native Crypto API — to ensure uniform distribution and high entropy. High entropy means the password has a vast number of possible combinations, making it mathematically infeasible to crack.`,
  how_to_steps: [
    "Select your desired password length using the slider.",
    "Toggle the character types you want to include: uppercase, lowercase, numbers, and symbols.",
    "The password generates automatically as you change settings.",
    "Click the 'Generate New' button to create another password with the same rules.",
    "Click 'Copy' to copy the secure password to your clipboard for your password manager."
  ],
  example: {
    input: "Length: 16, Include: Uppercase, Lowercase, Numbers, Symbols",
    output: "aB9#vL2$kP8*mN4@"
  },
  faqs: [
    { q: "Is it safe to generate passwords on a website?", a: "Usually no, but this tool is different. It uses JavaScript to generate the password entirely on your local machine using the Crypto API. No data is ever sent to a server." },
    { q: "What makes a password secure?", a: "Length and unpredictability. A 16-character password with mixed case, numbers, and symbols has over 70 bits of entropy, which would take modern supercomputers billions of years to crack." },
    { q: "Should I use a passphrase or a random password?", a: "Random passwords (e.g., k9#L2@p) are best for password managers. Passphrases (e.g., correct-horse-battery-staple) are better when you actually need to memorize the password." },
    { q: "Why shouldn't I just come up with my own password?", a: "Humans are terrible at randomness. Attackers use dictionaries of common words, keyboard walks (like qwerty), and leaked password databases. A machine-generated password avoids all human bias." },
    { q: "Does this tool store the generated passwords?", a: "Absolutely not. Once you refresh the page or generate a new password, the old one is completely destroyed from memory." }
  ],
  related_tools: ["generators/hash-generator", "generators/uuid-generator", "security/jwt-decoder"],
  related_articles: ["glossary-entropy", "how-to-choose-a-password-manager"],
  schema_type: "WebApplication",
  last_updated: "2026-07-11"
};
