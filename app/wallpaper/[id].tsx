import { View, Text, Pressable, useWindowDimensions, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColors } from "@/hooks/use-theme";
import { useFavoritesStore } from "@/store/favorites";
import { getWallpaper, getCategory } from "@/data/mock-wallpapers";

export default function WallpaperDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const c = useThemeColors();
  const { width, height } = useWindowDimensions();
  const isFavorite = useFavoritesStore((s) => s.ids.includes(id));
  const toggleFavorite = useFavoritesStore((s) => s.toggle);

  const wallpaper = getWallpaper(id);
  if (!wallpaper) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: c.background }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontFamily: "Rubik_500Medium", color: c.textPrimary }}>
            Duvar kağıdı bulunamadı.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const category = getCategory(wallpaper.categoryId);

  const handleSetAs = () => {
    Alert.alert("Duvar kağıdı yap", "Bu özellik yakında eklenecek.", [{ text: "Tamam" }]);
  };
  const handleDownload = () => {
    Alert.alert("İndir", "İndirme özelliği yakında eklenecek.", [{ text: "Tamam" }]);
  };
  const handleShare = () => {
    Alert.alert("Paylaş", "Paylaşım özelliği yakında eklenecek.", [{ text: "Tamam" }]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Image
        source={{ uri: wallpaper.imageUrl }}
        style={{ width, height }}
        contentFit="cover"
        transition={200}
      />

      <View
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      />

      <SafeAreaView
        edges={["top", "bottom"]}
        style={{ position: "absolute", inset: 0 }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => router.back()}
            hitSlop={8}
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              backgroundColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </Pressable>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Pressable
              onPress={() => toggleFavorite(id)}
              hitSlop={8}
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
                backgroundColor: "rgba(0,0,0,0.4)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={22}
                color={isFavorite ? "#EF4444" : "#fff"}
              />
            </Pressable>
            <Pressable
              onPress={handleShare}
              hitSlop={8}
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
                backgroundColor: "rgba(0,0,0,0.4)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="share-outline" size={22} color="#fff" />
            </Pressable>
          </View>
        </View>

        <View style={{ flex: 1 }} />

        <View
          style={{
            margin: 16,
            padding: 20,
            borderRadius: 24,
            backgroundColor: "rgba(20,20,20,0.7)",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 }}>
            {category && (
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Rubik_500Medium",
                    fontSize: 11,
                    color: "#fff",
                  }}
                >
                  {category.emoji} {category.name}
                </Text>
              </View>
            )}
            {wallpaper.isPremium && (
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 999,
                  backgroundColor: "#EA580C",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Ionicons name="diamond" size={11} color="#fff" />
                <Text
                  style={{
                    fontFamily: "Rubik_600SemiBold",
                    fontSize: 11,
                    color: "#fff",
                  }}
                >
                  PRO
                </Text>
              </View>
            )}
          </View>

          <Text
            style={{
              fontFamily: "Rubik_700Bold",
              fontSize: 22,
              color: "#fff",
              marginTop: 8,
            }}
          >
            {wallpaper.title}
          </Text>
          <Text
            style={{
              fontFamily: "Rubik_400Regular",
              fontSize: 13,
              color: "rgba(255,255,255,0.7)",
              marginTop: 4,
            }}
          >
            {wallpaper.author} · {wallpaper.width} × {wallpaper.height} ·{" "}
            {wallpaper.downloads.toLocaleString()} indirme
          </Text>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 18 }}>
            <Pressable
              onPress={handleDownload}
              style={{
                flex: 1,
                height: 50,
                borderRadius: 14,
                backgroundColor: "rgba(255,255,255,0.15)",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 8,
              }}
            >
              <Ionicons name="download-outline" size={18} color="#fff" />
              <Text
                style={{
                  fontFamily: "Rubik_500Medium",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                İndir
              </Text>
            </Pressable>
            <Pressable
              onPress={handleSetAs}
              style={{
                flex: 1.5,
                height: 50,
                borderRadius: 14,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 8,
              }}
            >
              <Ionicons name="phone-portrait-outline" size={18} color="#000" />
              <Text
                style={{
                  fontFamily: "Rubik_600SemiBold",
                  fontSize: 15,
                  color: "#000",
                }}
              >
                Duvar kağıdı yap
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
