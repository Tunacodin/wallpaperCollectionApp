import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColors } from "@/hooks/use-theme";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface Props {
  icon: IoniconName;
  title: string;
  description?: string;
}

export function EmptyState({ icon, title, description }: Props) {
  const c = useThemeColors();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
        paddingVertical: 64,
      }}
    >
      <View
        style={{
          width: 72,
          height: 72,
          borderRadius: 999,
          backgroundColor: c.surface,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <Ionicons name={icon} size={32} color={c.iconMuted} />
      </View>
      <Text
        style={{
          fontFamily: "Rubik_600SemiBold",
          fontSize: 18,
          color: c.textPrimary,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      {description && (
        <Text
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 14,
            color: c.textSecondary,
            textAlign: "center",
            marginTop: 6,
            lineHeight: 20,
          }}
        >
          {description}
        </Text>
      )}
    </View>
  );
}
