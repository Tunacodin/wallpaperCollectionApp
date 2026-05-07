import { useMemo } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/use-theme";
import { useFavoritesStore } from "@/store/favorites";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { EmptyState } from "@/components/empty-state";
import { wallpapers } from "@/data/mock-wallpapers";

export default function FavoritesScreen() {
  const c = useThemeColors();
  const ids = useFavoritesStore((s) => s.ids);

  const items = useMemo(
    () => ids.map((id) => wallpapers.find((w) => w.id === id)).filter(Boolean) as typeof wallpapers,
    [ids]
  );

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: c.background }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16 }}>
        <Text
          style={{
            fontFamily: "Rubik_700Bold",
            fontSize: 26,
            color: c.textPrimary,
          }}
        >
          Favoriler
        </Text>
        <Text
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 13,
            color: c.textSecondary,
            marginTop: 2,
          }}
        >
          {items.length === 0
            ? "Henüz hiçbir şey kaydetmedin"
            : `${items.length} duvar kağıdı kaydedildi`}
        </Text>
      </View>

      {items.length === 0 ? (
        <EmptyState
          icon="heart-outline"
          title="Favori listen boş"
          description="Beğendiğin duvar kağıtlarının üzerindeki kalp ikonuna dokun, burada görünsünler."
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
