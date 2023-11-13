'use client';

import { useEffect, useState } from 'react';

/* Lexical Design System */
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { TRANSFORMERS } from '@lexical/markdown';

/* Lexical Plugins Local */
import { ToolbarPlugin, CustomAutoLinkPlugin } from '@/plugins';

/* Lexical Plugins Remote */
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';

/* Lexical Others */
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorTheme } from '@/themes';

function PlaceHolder() {
  return <div className='bg-gray-300 overflow-hidden text-ellipsis inline-block pointer-events-none'>Enter some rich text...</div>;
}

const editorConfig = {
  theme: EditorTheme,
  namespace: 'Lexical-Editor-Sample',
  onError(error: unknown) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};
export const Editor = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='mt-5 mr-auto mb-5 ml-auto overflow-hidden w-1/2 max-w-2xl relative leading-5 text-left'>
        <ToolbarPlugin />
        <div className='bg- relative rounded-b-lg'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<PlaceHolder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <ListPlugin />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <LinkPlugin />
          <TabIndentationPlugin />
          <CustomAutoLinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
};
