/*  src/data/tag_categories.js  */
const userDefinedTagCategories = {
	"year": {
		"description": "Publication Year",
		"type": "selector",
		"values": [
			{ "key": "1987", "name": "1987", "color": "#fbb4ae" },
			{ "key": "2001", "name": "2001", "color": "#b3cde3" },
			{ "key": "2016", "name": "2016", "color": "#ccebc5" },
			{ "key": "2019", "name": "2019", "color": "#decbe4" },
			{ "key": "2021", "name": "2021", "color": "#fed9a6" },
			{ "key": "2023", "name": "2023", "color": "#ffffcc" },
			{ "key": "2024", "name": "2024", "color": "#e5d8bd" }
		]
	},

	"method_category": {
		"description": "Strategy Type",
		"type": "selector",
		"values": [
			{ "key": "metric-centric",   "name": "Metric-Centric",   "color": "#a6cee3" },
			{ "key": "visual-comparison","name": "Visual Comparison","color": "#b2df8a" },
			{ "key": "teaching-tool",    "name": "Teaching Tool",    "color": "#fb9a99" }
		]
	}
};