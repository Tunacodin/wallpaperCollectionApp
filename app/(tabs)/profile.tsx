import { ScrollView, View, Text, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColors } from "@/hooks/use-theme";
import { useThemeStore, type ThemeMode } from "@/store/theme";
import { useFavoritesStore } from "@/store/favorites";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface RowProps {
  icon: IoniconName;
  label: string;
  value?: string;
  onPress?: () => void;
  destructive?: boolean;
  showChevron?: boolean;
}

function Row({ icon, label, value, onPress, destructive, showChevron = true }: RowProps) {
  const c = useThemeColors();
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        paddingHorizontal: 16,
        paddingVertical: 14,
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: destructive ? "#FEE2E2" : c.surface,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name={icon}
          size={18}
          color={destructive ? c.error : c.textPrimary}
        />
      </View>
      <Text
        style={{
          flex: 1,
          fontFamily: "Rubik_500Medium",
          fontSize: 15,
          color: destructive ? c.error : c.textPrimary,
        }}
      >
        {label}
      </Text>
      {value && (
        <Text
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 14,
            color: c.textSecondary,
          }}
        >
          {value}
        </Text>
      )}
      {showChevron && (
        <Ionicons name="chevron-forward" size={18} color={c.iconMuted} />
      )}
    </Pressable>
  );
}

const themeLabel: Record<ThemeMode, string> = {
  light: "Açık",
  dark: "Koyu",
  system: "Sistem",
};

export default function ProfileScreen() {
  const c = useThemeColors();
  const mode = useThemeStore((s) => s.mode);
  const setMode = useThemeStore((s) => s.setMode);
  const favCount = useFavoritesStore((s) => s.ids.length);
  const clearFavorites = useFavoritesStore((s) => s.clear);

  const cycleTheme = () => {
    const next: ThemeMode =
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    setMode(next);
  };

  const confirmClear = () => {
    Alert.alert("Favorileri temizle", "Tüm favorilerini silmek istediğine emin misin?", [
      { text: "Vazgeç", style: "cancel" },
      { text: "Sil", style: "destructive", onPress: clearFavorites },
    ]);
  };

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: c.background }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16 }}>
          <Text
            style={{
              fontFamily: "Rubik_700Bold",
              fontSize: 26,
              color: c.textPrimary,
            }}
          >
            Profil
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 16,
            marginBottom: 24,
            padding: 18,
            borderRadius: 20,
            backgroundColor: c.surface,
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
          }}
        >
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              backgroundColor: c.buttonPrimary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Rubik_700Bold",
                fontSize: 22,
                color: c.buttonPrimaryText,
              }}
            >
              W
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Rubik_600SemiBold",
                fontSize: 17,
                color: c.textPrimary,
              }}
            >
              Misafir kullanıcı
            </Text>
            <Text
              style={{
                fontFamily: "Rubik_400Regular",
                fontSize: 13,
                color: c.textSecondary,
                marginTop: 2,
              }}
            >
              {favCount} favori · Standart üye
            </Text>
          </View>
        </View>

        <SectionTitle text="Görünüm" />
        <Row
          icon="contrast-outline"
          label="Tema"
          value={themeLabel[mode]}
          onPress={cycleTheme}
        />

        <SectionTitle text="İçerik" />
        <Row
          icon="heart-outline"
          label="Favorilerim"
          value={`${favCount}`}
          onPress={() => {}}
        />
        <Row
          icon="download-outline"
          label="İndirilenler"
          value="0"
          onPress={() => {}}
        />
        <Row
          icon="diamond-outline"
          label="Premium'a yükselt"
          onPress={() => {}}
        />

        <SectionTitle text="Uygulama" />
        <Row icon="notifications-outline" label="Bildirimler" onPress={() => {}} />
        <Row icon="language-outline" label="Dil" value="Türkçe" onPress={() => {}} />
        <Row icon="information-circle-outline" label="Hakkında" value="v1.0.0" onPress={() => {}} />

        {favCount > 0 && (
          <>
            <SectionTitle text="Tehlikeli alan" />
            <Row
              icon="trash-outline"
              label="Favorileri temizle"
              destructive
              showChevron={false}
              onPress={confirmClear}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionTitle({ text }: { text: string }) {
  const c = useThemeColors();
  return (
    <Text
      style={{
        fontFamily: "Rubik_500Medium",
        fontSize: 12,
        color: c.textTertiary,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        paddingHorizontal: 16,
        marginTop: 12,
        marginBottom: 4,
      }}
    >
      {text}
    </Text>
  );
}
