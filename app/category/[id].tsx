import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { useThemeColors } from "@/hooks/use-theme";
import { TopBar } from "@/components/ui/top-bar";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { EmptyState } from "@/components/empty-state";
import { getCategory, getWallpapersByCategory } from "@/data/mock-wallpapers";

export default function CategoryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const c = useThemeColors();
  const category = getCategory(id);
  const items = getWallpapersByCategory(id);

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: c.background }}>
      <TopBar title={category?.name ?? "Kategori"} onBack={() => router.back()} />

      {category && (
        <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
          <Text
            style={{
              fontFamily: "Rubik_400Regular",
              fontSize: 13,
              color: c.textSecondary,
            }}
          >
            {category.emoji} {items.length} duvar kağıdı
          </Text>
        </View>
      )}

      {items.length === 0 ? (
        <EmptyState
          icon="image-outline"
          title="Henüz içerik yok"
          description="Bu kategoride şu an duvar kağıdı bulunmuyor."
        />
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
        >
          <WallpaperGrid items={items} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
