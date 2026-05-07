import { useMemo, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColors } from "@/hooks/use-theme";
import { WallpaperGrid } from "@/components/wallpaper-grid";
import { EmptyState } from "@/components/empty-state";
import { searchWallpapers, categories, wallpapers } from "@/data/mock-wallpapers";

const SUGGESTED = ["forest", "minimal", "neon", "anime", "galaxy", "city", "lion"];

export default function SearchScreen() {
  const c = useThemeColors();
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchWallpapers(query), [query]);
  const trending = useMemo(() => wallpapers.slice(0, 6), []);

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: c.background }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 }}>
        <Text
          style={{
            fontFamily: "Rubik_700Bold",
            fontSize: 26,
            color: c.textPrimary,
            marginBottom: 12,
          }}
        >
          Ara
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: c.surface,
            borderRadius: 14,
            paddingHorizontal: 14,
            height: 48,
            gap: 8,
          }}
        >
          <Ionicons name="search" size={18} color={c.iconMuted} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Duvar kağıdı, yazar veya etiket"
            placeholderTextColor={c.textTertiary}
            returnKeyType="search"
            onSubmitEditing={() => Keyboard.dismiss()}
            style={{
              flex: 1,
              fontFamily: "Rubik_400Regular",
              fontSize: 15,
              color: c.textPrimary,
              padding: 0,
            }}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Ionicons name="close-circle" size={18} color={c.iconMuted} />
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {query.length === 0 ? (
          <View>
            <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
              <Text
                style={{
                  fontFamily: "Rubik_600SemiBold",
                  fontSize: 15,
                  color: c.textPrimary,
                  marginBottom: 10,
                }}
              >
                Önerilenler
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                {SUGGESTED.map((s) => (
                  <Pressable
                    key={s}
                    onPress={() => setQuery(s)}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 9,
                      borderRadius: 999,
                      backgroundColor: c.surface,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Rubik_500Medium",
                        fontSize: 13,
                        color: c.textPrimary,
                      }}
                    >
                      #{s}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={{ paddingHorizontal: 16, marginTop: 24, marginBottom: 12 }}>
              <Text
                style={{
                  fontFamily: "Rubik_600SemiBold",
                  fontSize: 15,
                  color: c.textPrimary,
                }}
              >
                Trend olanlar
              </Text>
              <Text
                style={{
                  fontFamily: "Rubik_400Regular",
                  fontSize: 12,
                  color: c.textTertiary,
                  marginTop: 2,
                }}
              >
                Kullanıcıların en çok beğendikleri
              </Text>
            </View>
            <WallpaperGrid items={trending} />
          </View>
        ) : results.length === 0 ? (
          <EmptyState
            icon="search-outline"
            title="Sonuç bulunamadı"
            description={`"${query}" için bir şey bulamadık. Farklı bir kelime dene.`}
          />
        ) : (
          <View>
            <View style={{ paddingHorizontal: 16, marginBottom: 12 }}>
              <Text
                style={{
                  fontFamily: "Rubik_500Medium",
                  fontSize: 13,
                  color: c.textSecondary,
                }}
              >
                {results.length} sonuç bulundu
              </Text>
            </View>
            <WallpaperGrid items={results} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
