import React from "react";
import { View, StyleSheet } from "react-native";
import { Cell } from "./Cell";
import * as sett from "../settings.json";

export const Row = ({row, rowIndex, colors}) => {
	return (
		<View style={styles.row} key={rowIndex}>
			{row.map((cell, cellIndex) => <Cell cell={cell} cellIndex={cellIndex} color={colors[cell]}/>)}
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
