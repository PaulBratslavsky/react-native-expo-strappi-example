import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { StrapiImage } from "@/components/strapi-image";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/article/${article.slug}`);
  };

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Pressable
      onPress={handlePress}
      className="bg-white border-2 border-black rounded-lg overflow-hidden mb-4 active:opacity-80"
    >
      {/* Cover Image */}
      {article.cover && (
        <StrapiImage
          src={article.cover.url}
          alt={article.cover.alternativeText || article.title}
          style={{ width: "100%", height: 160 }}
          contentFit="cover"
        />
      )}

      {/* Content */}
      <View className="p-4">
        {/* Tags */}
        {article.contentTags && article.contentTags.length > 0 && (
          <View className="flex-row flex-wrap gap-2 mb-2">
            {article.contentTags.slice(0, 3).map((tag) => (
              <View
                key={tag.id}
                className="bg-[#e7f192] px-2 py-1 rounded border border-black"
              >
                <Text className="text-xs font-medium">{tag.title}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Title */}
        <Text className="text-lg font-bold text-gray-900 mb-2" numberOfLines={2}>
          {article.title}
        </Text>

        {/* Description */}
        <Text className="text-sm text-gray-600 mb-3" numberOfLines={2}>
          {article.description}
        </Text>

        {/* Footer */}
        <View className="flex-row items-center justify-between">
          {/* Author */}
          {article.author && (
            <Text className="text-xs text-gray-500">
              By {article.author.fullName}
            </Text>
          )}

          {/* Date */}
          <Text className="text-xs text-gray-400">{formattedDate}</Text>
        </View>
      </View>
    </Pressable>
  );
}
