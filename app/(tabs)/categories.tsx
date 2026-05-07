import { ScrollView, View, useWindowDimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useThemeColors } from "@/hooks/use-theme";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/data/mock-wallpapers";

export default function CategoriesScreen() {
  const c = useThemeColors();
  const { width } = useWindowDimensions();
  const padding = 16;
  const gap = 12;
  const cardWidth = (width - padding * 2 - gap) / 2;

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: c.background }}>
      <View style={{ paddingHorizontal: padding, paddingTop: 8, paddingBottom: 16 }}>
        <Text
          style={{
            fontFamily: "Rubik_700Bold",
            fontSize: 26,
            color: c.textPrimary,
          }}
        >
          Kategoriler
        </Text>
        <Text
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 13,
            color: c.textSecondary,
            marginTop: 2,
          }}
        >
          {categories.length} koleksiyon ·{" "}
          {categories.reduce((acc, cat) => acc + cat.count, 0)} duvar kağıdı
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: padding,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap }}>
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              width={cardWidth}
              onPress={() =>
                router.push({ pathname: "/category/[id]", params: { id: cat.id } })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
