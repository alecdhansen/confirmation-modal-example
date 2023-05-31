import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          title: "Card",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="address-card-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "School",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="institution" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}