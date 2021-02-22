import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as sett from "../settings.json";

export const Cell = ({cell, cellIndex, color}) => {
	console.log(color ? color : '-');
	return (
		<View style={{...styles.pixel, backgroundColor: color ? color : sett.colors.white}} key={cellIndex}>
			{/* <Text style={{fontSize: 10}}>{cell}</Text> */}
		</View>
	)
}

const styles = StyleSheet.create({
	pixel: {
		width: 30,
		height: 30,
		margin: 1,
		backgroundColor: sett.colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
	}
})
