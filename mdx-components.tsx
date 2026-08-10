import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import LogisticRegressionTutorial from '@/components/LogisticRegression/LogisticRegressionTutorial';
import CurriculumTree from '@/components/CurriculumTree';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    LogisticRegressionTutorial,
    CurriculumTree,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
