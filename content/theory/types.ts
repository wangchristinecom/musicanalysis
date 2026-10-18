export type TheoryExample = {
  title: string;
  abc: string;
  explanation: string;
};

export type TheorySection = {
  heading: string;
  paragraphs: string[];
  table?: { columns: string[]; rows: string[][] };
  falseFriend?: string;
  examples?: TheoryExample[];
};

export type Lesson = {
  slug: string;
  title: string;
  germanTitle: string;
  summary: string;
  sections: TheorySection[];
};
