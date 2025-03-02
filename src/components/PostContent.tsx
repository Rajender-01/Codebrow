"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";

interface PostContentProps {
  content: string;
}

const customStyle: SyntaxHighlighterProps["style"] = vscDarkPlus;

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose dark:prose-invert lg:prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const inline = className?.includes("inline");
            return !inline && match ? (
              <SyntaxHighlighter
                // @ts-ignore
                style={customStyle}
                language={match[1]}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
