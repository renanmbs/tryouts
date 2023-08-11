import {data} from "./data.js";


let graphs = [];
let graph_index = 0;
let left_button = document.getElementById("left");
let right_button = document.getElementById("right");
let day = document.getElementById("day");
let player_space = document.getElementById("player");
let decision = document.getElementById("decision");

for (let index in data) {
    graphs.push(new Chart("myChart2", {
        type: "polarArea",
        data: data[index],
        options: {
            plugins: {
                legend: {
                    display: false // Remove the legend
                },
                tooltip: {
                    enabled: false // Disable tooltips
                }
            },
                scale: {
                    angleLines: {
                        display: true, // Display lines from the center
                        color: 'rgba(0, 0, 0, 0.1)' // Color of the angle lines
                    },
                    pointLabels: {
                        fontSize: 14, // Font size of the central scale labels
                        fontStyle: 'bold', // Font style of the central scale labels
                        fontColor: 'black', // Font color of the central scale labels
                        callback: function(value, index, values) {
                            // Customize how central scale labels are displayed
                            return value; // You can format the label here if needed
                        }
                    },
                    ticks: {
                        display: true, // Display the central scale ticks
                        min: 0, // Minimum value of the central scale
                        max: 10, // Maximum value of the central scale
                        stepSize: 1 // Interval between central scale ticks
                    },
                    events:[]
                }
        }
      }));
}

document.getElementById("left").addEventListener("click", () => {
    graph_index--;
    if(graph_index <= 0){
        left_button.disabled = true;
        if(graphs[graph_index].config.data.datasets[0].participate == "no"){
            player_space.innerHTML = `${graphs[graph_index].config.data.datasets[0].label} (Didn't Participate)`;
        }
        else{
            player_space.innerHTML = `${graphs[graph_index].config.data.datasets[0].label}`;
        }
        decision.innerHTML = `Process: ${graphs[graph_index].config.data.datasets[0].process}`;
        day.innerHTML = `Day: ${graphs[graph_index].config.data.datasets[0].date}`;
        fill();
    }
    else{
        left_button.disabled = false;
        if(graphs[graph_index].config.data.datasets[0].participate == "no"){
            player_space.innerHTML = `${graphs[graph_index].config.data.datasets[0].label} (Didn't Participate)`;
        }
        else{
            player_space.innerHTML = `${graphs[graph_index].config.data.datasets[0].label}`;
        }
        day.innerHTML = `Day: ${graphs[graph_index].config.data.datasets[0].date}`;
        decision.innerHTML = `Process: ${graphs[graph_index].config.data.datasets[0].process}`;
        fill();
    }
    if (graph_index >= graphs.length - 1) {
        right_button.disabled = true;
    } else {
        right_button.disabled = false;
    }
});

document.getElementById("right").addEventListener("click", () =>{
    graph_index++;
    left_button.disabled = false;
    if(graphs[graph_index].config.data.datasets[0].participate == "no"){
        player_space.innerHTML = `${graphs[graph_index].config.data.datasets[0].label} (Didn't Participate)`;
    }
    else{
        player_space.innerHTML = `${graphs[graph_index].config.data.datasets[0].label}`;
    }
    if (graph_index >= graphs.length - 1) {
        right_button.disabled = true;
    } else {
        right_button.disabled = false;
    }
    day.innerHTML = `Day: ${graphs[graph_index].config.data.datasets[0].date}`;
    decision.innerHTML = `Process: ${graphs[graph_index].config.data.datasets[0].process}`;
    fill();
});

let myChart = new Chart("myChart", {
    type: "polarArea",
    data: data[graph_index],
    options: {
        scale: {
            angleLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
            },
            pointLabels: {
                fontSize: 14,
                fontStyle: 'bold',
                fontColor: 'black',
                callback: function(value, index, values) {
                    return value;
                }
            },
            ticks: {
                display: true,
                min: 0,
                max: 10,
                stepSize: 1
            }
        },
    }
});

let fill = () => {
    myChart.data = data[graph_index];
    myChart.update();
}



player_space.innerHTML = `${graphs[graph_index].config.data.datasets[0].label}`;
day.innerHTML = `Day: ${graphs[graph_index].config.data.datasets[0].date}`;
decision.innerHTML = `Process: ${graphs[graph_index].config.data.datasets[0].process}`;
fill();