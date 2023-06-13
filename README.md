
Research Analysis with D3 Library
This repository contains the code and data for the research analysis conducted using the D3 library. The goal of this research was to visualize and analyze the data from the samples.json file obtained from the provided URL.

Dataset
The research analysis utilizes the samples.json dataset, which can be accessed from the following URL:
https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

The dataset contains information about OTUs (Operational Taxonomic Units) found in individuals. It includes various fields such as sample values, OTU IDs, OTU labels, and sample metadata.

Research Objectives
The research analysis aims to achieve the following objectives using the D3 library:

Read the samples.json file from the provided URL.
Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual.
Use sample_values as the values for the bar chart.
Use otu_ids as the labels for the bar chart.
Use otu_labels as the hovertext for the chart.
Create a bubble chart to display each sample.
Use otu_ids for the x values.
Use sample_values for the y values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.
Display the sample metadata, i.e., an individual's demographic information.
Display each key-value pair from the metadata JSON object somewhere on the page.
Update all the plots when a new sample is selected.
Create a visually appealing dashboard layout for the analysis.
