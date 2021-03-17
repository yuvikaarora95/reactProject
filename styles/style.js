import { Dimensions, StyleSheet } from "react-native"

const { width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        width: "100%",
        //height : "70%",
    },
    centerAlign: {
        justifyContent: "center",
        alignItems: "center",
    },

    inputContainer: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding:20,
        marginTop: -height / 1.6,
        borderRadius: 20,
        width: width / 1.1,
        height: height /2,
        // shadowColor: "#000",
        // shadowOpacity: 1.35,
        // elevation: 8,
    },
    input: {
        textAlign: "center",
        fontSize: 18,
        borderWidth: 1.5,
        borderColor: "#aaa",
        borderRadius: 30,
        width: width / 1.2,
        padding: 10,
        marginVertical: 15,
    },
    logo: {
        width: width / 1.2,
        height: height / 3,
    },
});

export { styles };