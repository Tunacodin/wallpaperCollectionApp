import { useMemo, useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColors } from "@/hooks/use-theme";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { wallpapers, categories } from "@/data/mock-wallpapers";

export default function HomeScreen() {
  const c = useThemeColors();
  const [activeChip, setActiveChip] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeChip === "all") return wallpapers;
    return wallpapers.filter((w) => w.categoryId === activeChip);
  }, [activeChip]);

  const chips = [{ id: "all", name: "Tümü", emoji: "✨" }, ...categories];

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: c.background }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Rubik_400Regular",
                fontSize: 13,
                color: c.textSecondary,
              }}
            >
              Hoş geldin 👋
            </Text>
            <Text
              style={{
                fontFamily: "Rubik_700Bold",
                fontSize: 26,
                color: c.textPrimary,
                marginTop: 2,
              }}
            >
              Keşfet
            </Text>
          </View>
          <Pressable
            onPress={() => router.push("/(tabs)/search")}
            hitSlop={8}
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              backgroundColor: c.surface,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="search" size={20} color={c.textPrimary} />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          style={{ marginBottom: 16 }}
        >
          {chips.map((chip) => {
            const active = activeChip === chip.id;
            return (
              <Pressable
                key={chip.id}
                onPress={() => setActiveChip(chip.id)}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 9,
                  borderRadius: 999,
                  backgroundColor: active ? c.buttonPrimary : c.surface,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Text style={{ fontSize: 14 }}>{chip.emoji}</Text>
                <Text
                  style={{
                    fontFamily: "Rubik_500Medium",
                    fontSize: 13,
                    color: active ? c.buttonPrimaryText : c.textPrimary,
                  }}
                >
                  {chip.name}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <WallpaperGrid items={filtered} />
      </ScrollView>
    </SafeAreaView>
  );
}
