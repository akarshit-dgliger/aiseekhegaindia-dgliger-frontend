import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

const generatedSource = docs.toFumadocsSource();
type SourceFiles = ReturnType<typeof docs.toFumadocsSource>['files'];

// fumadocs-mdx returns `files` as a function; fumadocs-core expects an array.
const filesInput = generatedSource.files as SourceFiles | (() => SourceFiles);
const files = typeof filesInput === 'function' ? filesInput() : filesInput;

export const source = loader({
  baseUrl: '/docs',
  source: { ...generatedSource, files },
});
