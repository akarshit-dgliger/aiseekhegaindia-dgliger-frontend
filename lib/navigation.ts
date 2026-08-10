export const docsNavigation = [
  {
    title: 'AI for Leaders',
    items: [
      { title: 'Intro', href: '/docs/ai-for-leaders/intro' },
      { title: 'Curriculum Tree', href: '/docs/ai-for-leaders/curriculum-tree' },
      { title: 'Curriculum Overview', href: '/docs/ai-for-leaders/curriculum-overview' },
      {
        title: 'Machine Learning Fundamentals',
        href: '/docs/ai-for-leaders/machine-learning-fundamentals',
      },
      {
        title: 'Classification & Regression',
        href: '/docs/ai-for-leaders/classification-regression-supervised-unsupervised',
      },
      {
        title: 'Algorithms Overview',
        href: '/docs/ai-for-leaders/algorithms-high-level-overview',
      },
      {
        title: 'Classical ML in Market',
        href: '/docs/ai-for-leaders/classical-ml-in-market',
      },
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      { title: 'Intro', href: '/docs/machine-learning/intro' },
      { title: 'Supervised Learning', href: '/docs/machine-learning/supervised-learning' },
      {
        title: 'Logistic Regression Tutorial',
        href: '/docs/machine-learning/logistic_regression_tutorial',
      },
    ],
  },
  {
    title: 'Deep Learning',
    items: [
      { title: 'Intro', href: '/docs/deep-learning/intro' },
      { title: 'Perceptron', href: '/docs/deep-learning/perceptron' },
      { title: 'CNNs', href: '/docs/deep-learning/CNNS' },
      { title: 'RNNs', href: '/docs/deep-learning/RNNs' },
    ],
  },
  {
    title: 'Language Models',
    items: [
      { title: 'Intro', href: '/docs/language-models/intro' },
      { title: 'Tokenization', href: '/docs/language-models/Tokenization' },
      { title: 'NN Training', href: '/docs/language-models/NNTraining' },
      { title: 'NN Inference', href: '/docs/language-models/NNInference' },
      { title: 'NN Internals', href: '/docs/language-models/NNInternals' },
      { title: 'Post Training', href: '/docs/language-models/PostTraining' },
      { title: 'Evolution GPT-2', href: '/docs/language-models/EvolutionGpt2' },
      { title: 'Base Models', href: '/docs/language-models/BaseModels' },
      { title: 'Hallucinations', href: '/docs/language-models/Hallucinations' },
      { title: 'LLM Identity', href: '/docs/language-models/LLMIdentity' },
      { title: 'Thinking in Tokens', href: '/docs/language-models/ThinkingInTokens' },
      { title: 'LLM Inconsistencies', href: '/docs/language-models/LLMInconsistencies' },
      {
        title: 'Post-Training RL',
        href: '/docs/language-models/PostTrainingReinforcementLearning',
      },
      { title: 'Thinking RL', href: '/docs/language-models/ThinkingRL' },
      {
        title: 'Reinforcement Learning',
        href: '/docs/language-models/ReinforcementLearning',
      },
      { title: 'LLM Judgement', href: '/docs/language-models/LLMJudgement' },
      { title: 'Multimodality', href: '/docs/language-models/Multimodality' },
      { title: 'Evaluation', href: '/docs/language-models/Evaluation' },
      { title: 'Accessing LLMs', href: '/docs/language-models/AccessingLLMs' },
      { title: 'Query to Response', href: '/docs/language-models/QueryToResponse' },
      {
        title: 'Handling Hallucination RAG LoRA',
        href: '/docs/language-models/HandlingHallucinationRAGLoRA',
      },
    ],
  },
  {
    title: 'Interactive Tutorials',
    items: [
      {
        title: 'Logistic Regression',
        href: '/docs/tutorials/logistic-regression',
      },
    ],
  },
  {
    title: 'Resources',
    items: [{ title: 'Intro', href: '/docs/resources/intro' }],
  },
] as const;

export const siteConfig = {
  title: 'AISeekhegaIndia',
  tagline:
    'Community-driven platform for Machine Learning, Deep Learning, and Language Models',
  url: 'https://ai-ml-docs.org',
  editUrl: 'https://github.com/ai-ml-community/ai-ml-docs/tree/main/',
  organizationName: 'ai-ml-community',
  projectName: 'ai-ml-docs',
  copyright: `Copyright © ${new Date().getFullYear()} Lex AI Technologies Pvt Ltd. 🌏❤️ Proudly built in India 🇮🇳`,
};

export const footerLinks = [
  {
    title: 'Docs',
    items: [
      { label: 'AI for Leaders', to: '/docs/ai-for-leaders/intro' },
      { label: 'Machine Learning', to: '/docs/machine-learning/intro' },
      { label: 'Deep Learning', to: '/docs/deep-learning/intro' },
      { label: 'Language Models', to: '/docs/language-models/intro' },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'GitHub Discussions',
        href: 'https://github.com/ai-ml-community/ai-ml-docs/discussions',
      },
      {
        label: 'Join our Discord community here',
        href: 'https://discord.gg/QtzYHmfw',
      },
      { label: 'Twitter', href: 'https://x.com/labs_ai80315' },
    ],
  },
  {
    title: 'More',
    items: [
      { label: 'Blog', to: '/blog' },
      {
        label: 'GitHub',
        href: 'https://github.com/ai-ml-community/ai-ml-docs',
      },
      { label: 'Contribute', to: '/contribute' },
    ],
  },
] as const;
