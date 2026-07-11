export interface FAQ {
  q: string;
  a: string;
}

export interface Example {
  input: string;
  output: string;
}

export interface ToolContent {
  slug: string;
  name: string;
  category: string;
  primary_keyword: string;
  meta_title: string;
  meta_description: string;
  direct_answer: string;
  what_is: string;
  how_to_steps: string[];
  example: Example;
  faqs: FAQ[];
  related_tools: string[];
  related_articles: string[];
  schema_type: string;
  last_updated: string;
}
