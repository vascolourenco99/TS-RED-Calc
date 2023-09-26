import { useState } from "react";
import { StyleSheet, Text, View, Switch, SafeAreaView } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import MyKeyboard from "./src/components/MyKeyboard";

const app = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <View style={{
          marginTop: 30,
        }}>
          <Switch
            value={theme === "light"}
            onValueChange={(value) => setTheme(value ? "light" : "dark")}
          />
        </View>
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
