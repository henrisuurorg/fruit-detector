


const ErrorScreen = ({ navigation, route }) => {
    return (
        <View style={[styles.container, { flex: 1, backgroundColor:  "#2a2a2a"}]}>
            <View style={[styles.innerContainer, {alignSelf: 'center', marginTop: '50%', borderWidth: 1, borderColor: "#F4FFAE"}]}>
                <BaseText>Recieved invalid data from server!</BaseText>
                <BaseText style={{ marginTop: 10 }}>
                    Do you want to try again?
                </BaseText>
                <ResultButton
                    title="Back to Camera"
                    onPress={() => navigation.navigate("Camera")}
                    style={{ marginTop: 20 }}
                    icon={backToCameraIcon}
                />
                <ResultButton
                    title="Crop Again"
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: 10 }}
                    icon={cropAgainIcon}
                />
            </View>
        </View>
    )
}


import { StyleSheet } from "react-native"

const paddingVertical = Platform.OS === "ios" ? 60 : 40

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  innerContainer: {
    backgroundColor: "#404040",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  padding: {
    paddingVertical: paddingVertical,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    textTransform: "capitalize",
    fontWeight: "700",
    marginTop: 20,
  },
})

export default ErrorScreen