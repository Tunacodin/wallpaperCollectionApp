import { View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { WallpaperCard } from "@/components/wallpaper-card";
import type { Wallpaper } from "@/types/wallpaper";

interface Props {
  items: Wallpaper[];
  padding?: number;
  gap?: number;
  showAuthor?: boolean;
}

export function WallpaperGrid({ items, padding = 16, gap = 12, showAuthor = true }: Props) {
  const { width } = useWindowDimensions();
  const cardWidth = (width - padding * 2 - gap) / 2;

  const left: Wallpaper[] = [];
  const right: Wallpaper[] = [];
  let leftHeight = 0;
  let rightHeight = 0;

  items.forEach((item) => {
    const ratio = item.height / item.width;
    const itemHeight = Math.min(cardWidth * ratio, cardWidth * 1.6) + (showAuthor ? 40 : 0);
    if (leftHeight <= rightHeight) {
      left.push(item);
      leftHeight += itemHeight + gap;
    } else {
      right.push(item);
      rightHeight += itemHeight + gap;
    }
  });

  const handlePress = (id: string) => {
    router.push({ pathname: "/wallpaper/[id]", params: { id } });
  };

  return (
    <View style={{ flexDirection: "row", paddingHorizontal: padding, gap }}>
      <View style={{ flex: 1, gap }}>
        {left.map((item) => (
          <WallpaperCard
            key={item.id}
            item={item}
            width={cardWidth}
            onPress={() => handlePress(item.id)}
            showAuthor={showAuthor}
          />
        ))}
      </View>
      <View style={{ flex: 1, gap }}>
        {right.map((item) => (
          <WallpaperCard
            key={item.id}
            item={item}
            width={cardWidth}
            onPress={() => handlePress(item.id)}
            showAuthor={showAuthor}
          />
        ))}
      </View>
    </View>
  );
}
