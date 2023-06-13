// Import the D3 library
import * as d3 from 'd3';

// Use d3 to read samples
const sampleUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let samplesPromise = d3.json(sampleUrl);

// Print the json to the console
samplesPromise.then(data => console.log(data));

// Populate the Dropdown options
let samples = samplesPromise.then(data => data);
console.log(samples);

