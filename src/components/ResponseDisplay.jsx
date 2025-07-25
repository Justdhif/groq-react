import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaCopy } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import LoadingIndicator from "./LoadingIndicator";

function ResponseDisplay({ data, isLoading }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const renderResponse = () => {
    if (!data) return null;

    const parts = [];
    let lastIndex = 0;
    const regex = /```(\w*)?\n([\s\S]*?)\n```|(\*\*[^*]+\*\*)/g;
    let match;

    while ((match = regex.exec(data)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          content: data.substring(lastIndex, match.index),
        });
      }

      if (match[0].startsWith("```")) {
        parts.push({
          type: "code",
          language: match[1] || "text",
          content: match[2],
        });
      } else {
        parts.push({
          type: "bold",
          content: match[0],
        });
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < data.length) {
      parts.push({
        type: "text",
        content: data.substring(lastIndex),
      });
    }

    return parts.map((part, index) => {
      if (part.type === "code") {
        return (
          <CodeBlock
            key={`code-${index}`}
            language={part.language}
            content={part.content}
            index={index}
            copiedIndex={copiedIndex}
            setCopiedIndex={setCopiedIndex}
          />
        );
      } else {
        return (
          <TextBlock
            key={`text-${index}`}
            type={part.type}
            content={part.content}
          />
        );
      }
    });
  };

  return (
    <div className="w-full transition-all duration-300">
      {isLoading && !data && <LoadingIndicator />}

      {data && (
        <div className="animate-fadeIn text-left">
          <div className="prose prose-invert max-w-none">
            {renderResponse()}
          </div>
        </div>
      )}
    </div>
  );
}

function CodeBlock({ language, content, index, copiedIndex, setCopiedIndex }) {
  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-gray-700">
      <div className="flex justify-between items-center bg-gray-700 px-4 py-2">
        <span className="text-xs text-gray-300 font-mono">
          {language || "code"}
        </span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(content);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
          }}
          className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors"
        >
          <FaCopy size={12} />
          {copiedIndex === index ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language || "text"}
        style={darcula}
        customStyle={{
          padding: "20px",
          margin: "0",
          fontSize: "14px",
          backgroundColor: "#1e1e1e",
          overflowX: "auto",
        }}
        showLineNumbers={true}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

function TextBlock({ type, content }) {
  return (
    <div
      className={
        type === "bold"
          ? "font-semibold text-indigo-300 mb-4"
          : "text-gray-100 mb-4 whitespace-pre-wrap"
      }
    >
      <ReactMarkdown
        components={{
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-indigo-300" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default ResponseDisplay;
