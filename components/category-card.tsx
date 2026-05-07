import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useThemeColors } from "@/hooks/use-theme";
import type { Category } from "@/types/wallpaper";

interface Props {
  category: Category;
  width: number;
  height?: number;
  onPress?: () => void;
}

export function CategoryCard({ category, width, height, onPress }: Props) {
  const c = useThemeColors();
  const cardHeight = height ?? width * 0.85;

  return (
    <Pressable onPress={onPress} style={{ width, height: cardHeight }}>
      <View
        style={{
          flex: 1,
          borderRadius: 20,
          overflow: "hidden",
          backgroundColor: c.surfaceAlt,
        }}
      >
        <Image
          source={{ uri: category.coverUrl }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
          transition={200}
        />
        <View
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        />
        <View
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            bottom: 14,
          }}
        >
          <Text style={{ fontSize: 22 }}>{category.emoji}</Text>
          <Text
            style={{
              fontFamily: "Rubik_600SemiBold",
              fontSize: 17,
              color: "#ffffff",
              marginTop: 2,
            }}
            numberOfLines={1}
          >
            {category.name}
          </Text>
          <Text
            style={{
              fontFamily: "Rubik_400Regular",
              fontSize: 12,
              color: "rgba(255,255,255,0.85)",
              marginTop: 1,
            }}
          >
            {category.count} duvar kağıdı
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
