import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColors } from "@/hooks/use-theme";
import { useFavoritesStore } from "@/store/favorites";
import type { Wallpaper } from "@/types/wallpaper";

interface Props {
  item: Wallpaper;
  width: number;
  onPress?: () => void;
  showAuthor?: boolean;
}

export function WallpaperCard({ item, width, onPress, showAuthor = true }: Props) {
  const c = useThemeColors();
  const isFavorite = useFavoritesStore((s) => s.ids.includes(item.id));
  const toggle = useFavoritesStore((s) => s.toggle);

  const aspectRatio = item.height / item.width;
  const imageHeight = Math.min(width * aspectRatio, width * 1.6);

  return (
    <Pressable onPress={onPress} style={{ width }}>
      <View
        style={{
          width,
          height: imageHeight,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: c.surfaceAlt,
        }}
      >
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
          transition={200}
        />

        {item.isPremium && (
          <View
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              backgroundColor: c.badgeBg,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 999,
            }}
          >
            <Ionicons name="diamond" size={12} color="#EA580C" />
            <Text
              style={{
                fontFamily: "Rubik_500Medium",
                fontSize: 11,
                color: c.textPrimary,
              }}
            >
              PRO
            </Text>
          </View>
        )}

        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            toggle(item.id);
          }}
          hitSlop={8}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 32,
            height: 32,
            borderRadius: 999,
            backgroundColor: c.badgeBg,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={18}
            color={isFavorite ? "#EF4444" : c.textPrimary}
          />
        </Pressable>
      </View>

      {showAuthor && (
        <View style={{ marginTop: 8, paddingHorizontal: 2 }}>
          <Text
            style={{
              fontFamily: "Rubik_500Medium",
              fontSize: 13,
              color: c.textPrimary,
              lineHeight: 18,
            }}
            numberOfLines={1}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "Rubik_400Regular",
              fontSize: 11,
              color: c.textTertiary,
              lineHeight: 14,
              marginTop: 2,
            }}
            numberOfLines={1}
          >
            {item.author}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
