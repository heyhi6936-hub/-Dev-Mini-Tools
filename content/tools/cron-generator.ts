import { ToolContent } from '../schema';

export const content: ToolContent = {
  slug: "cron-generator",
  name: "Cron Expression Generator",
  category: "Generators",
  primary_keyword: "cron expression generator",
  meta_title: "Cron Expression Generator & Explainer | DevMiniTools",
  meta_description: "Generate and decode Unix cron expressions easily. Visual builder with human-readable explanations. Free, visual, and offline.",
  direct_answer: "This visual builder generates Unix cron expressions and explains existing crontab schedules in clear, human-readable language.",
  what_is: `A cron expression is a string of five or six fields separated by white space that represents a schedule for executing task scripts (cron jobs) on Unix/Linux servers. The fields define execution times for minutes, hours, day of month, month, and day of week. Because raw syntax can be cryptic (e.g. '0 4 * * 1-5' for weekday mornings), a generator provides an interactive, selection-based UI that translates visual schedule selections into the exact cron expression needed, alongside an explicit English explanation of the schedule.`,
  how_to_steps: [
    "Select visual intervals (minutes, hours, days) using the visual form controls.",
    "The cron expression updates live in the output field at the bottom.",
    "Read the human-readable explanation below the expression to verify the schedule.",
    "Click 'Copy' to copy the generated cron string.",
    "Paste the string directly into your system's crontab file (crontab -e) or server configuration."
  ],
  example: {
    input: "Every Monday at 3:15 AM",
    output: "15 3 * * 1"
  },
  faqs: [
    { q: "What is the structure of a standard 5-field cron expression?", a: "The fields are: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12 or JAN-DEC), and Day of Week (0-6 or SUN-SAT)." },
    { q: "What do the special symbols (*, ?, L, W, #) mean?", a: "The asterisk (*) matches all values. The slash (/) denotes intervals (e.g., */5 for every 5 minutes). The comma (,) lists multiple values. The hyphen (-) specifies ranges." },
    { q: "Does this support 6-field Quartz cron expressions?", a: "This builder defaults to standard 5-field Unix/Linux crontab schedules. You can append the seconds field manually if your system (like Spring or Quartz scheduler) requires 6 fields." },
    { q: "What is the crontab command?", a: "On Unix systems, 'crontab -e' opens the editor to configure user cron jobs. 'crontab -l' lists currently active scheduled jobs." },
    { q: "Is the generator timezone aware?", a: "Cron jobs execute based on the system timezone of the hosting server. Ensure your server time matches your expected schedule parameters." }
  ],
  related_tools: ["generators/uuid-generator", "generators/password-generator", "converters/timestamp-converter"],
  related_articles: ["unix-crontab-syntax-reference", "how-to-log-cron-job-errors"],
  schema_type: "WebApplication",
  last_updated: "2026-07-12"
};
