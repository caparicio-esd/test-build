import '../assets/sass/main.scss'
import Chart from 'chart.js/auto';

const chart01: Chart = new Chart("chart01", {
    type: "bar", 
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: {
                January: 10,
                February: 20
            }
        }], 
    },
    options: {
        layout: {
            padding: 20
        }
    }
})
