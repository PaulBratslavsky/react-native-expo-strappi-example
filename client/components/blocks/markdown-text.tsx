import { View, StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";
import type { IMarkdownText } from "@/types";

const markdownStyles = StyleSheet.create({
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#374151",
  },
  heading1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
    marginTop: 24,
  },
  heading2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
    marginTop: 20,
  },
  heading3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
    marginTop: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: "#4B5563",
    marginBottom: 16,
  },
  link: {
    color: "#7C3AED",
    textDecorationLine: "underline",
  },
  blockquote: {
    backgroundColor: "#F3F4F6",
    borderLeftWidth: 4,
    borderLeftColor: "#7C3AED",
    paddingLeft: 16,
    paddingVertical: 8,
    marginVertical: 16,
    fontStyle: "italic",
  },
  code_inline: {
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontFamily: "monospace",
    fontSize: 14,
  },
  code_block: {
    backgroundColor: "#1F2937",
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
  },
  fence: {
    backgroundColor: "#1F2937",
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    color: "#F9FAFB",
    fontFamily: "monospace",
    fontSize: 14,
  },
  bullet_list: {
    marginVertical: 8,
  },
  ordered_list: {
    marginVertical: 8,
  },
  list_item: {
    marginVertical: 4,
  },
  bullet_list_icon: {
    marginRight: 8,
  },
  hr: {
    backgroundColor: "#E5E7EB",
    height: 2,
    marginVertical: 24,
  },
  table: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginVertical: 16,
  },
  th: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    fontWeight: "bold",
  },
  td: {
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
  strong: {
    fontWeight: "bold",
  },
  em: {
    fontStyle: "italic",
  },
  image: {
    borderRadius: 8,
    marginVertical: 16,
  },
});

export function MarkdownText({ content }: Readonly<IMarkdownText>) {
  return (
    <View className="py-12 px-4">
      <View className="w-full max-w-4xl mx-auto">
        <Markdown style={markdownStyles}>{content}</Markdown>
      </View>
    </View>
  );
}
