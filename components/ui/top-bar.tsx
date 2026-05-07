import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColors } from "@/hooks/use-theme";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface Props {
  title: string;
  onBack?: () => void;
  rightIcon?: IoniconName;
  onRightPress?: () => void;
  leftIcon?: IoniconName;
  onLeftPress?: () => void;
}

export function TopBar({
  title,
  onBack,
  rightIcon,
  onRightPress,
  leftIcon,
  onLeftPress,
}: Props) {
  const c = useThemeColors();
  const showLeft = !!(onBack || (leftIcon && onLeftPress));

  return (
    <View
      style={{
        height: 64,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: c.background,
      }}
    >
      <View style={{ width: 40, alignItems: "flex-start" }}>
        {onBack ? (
          <Pressable onPress={onBack} hitSlop={8}>
            <Ionicons name="chevron-back" size={26} color={c.textPrimary} />
          </Pressable>
        ) : leftIcon && onLeftPress ? (
          <Pressable onPress={onLeftPress} hitSlop={8}>
            <Ionicons name={leftIcon} size={24} color={c.textPrimary} />
          </Pressable>
        ) : null}
      </View>

      <View style={{ flex: 1, alignItems: showLeft ? "center" : "flex-start" }}>
        <Text
          style={{
            fontFamily: "Rubik_500Medium",
            fontSize: 20,
            color: c.textPrimary,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      <View style={{ width: 40, alignItems: "flex-end" }}>
        {rightIcon && onRightPress && (
          <Pressable onPress={onRightPress} hitSlop={8}>
            <Ionicons name={rightIcon} size={24} color={c.textPrimary} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
