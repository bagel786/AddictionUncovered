document.addEventListener('DOMContentLoaded', function () {
    // Shared Chart Defaults
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#2D1B36';

    // Interactions Chart (Red)
    const interactionsCtx = document.getElementById('interactionsChart').getContext('2d');

    // Generating some realistic looking data based on the red graph image
    const labels = Array.from({ length: 100 }, (_, i) => i + 1);

    // Approximate data points trying to match the red graph visual
    // Baseline is low (~0-10), with periodic spikes
    const interactionsData = labels.map(i => {
        // Random baseline noise
        let val = Math.random() * 20;

        // Add specific spikes
        if (i === 30) val = 105; // Diwali Presentation
        if (i === 50) val = 45; // Mental Health Consultant
        if (i === 68) val = 80; // Bake Sale / Guest Speaker
        if (i === 70) val = 75; // Library Trifold
        if (i === 88) val = 145;
        if (i === 92) val = 75; // Hoops For Health
        if (i === 98) val = 215; // Affirmation Board

        return Math.round(Math.max(0, val));
    });

    const interactionsChart = new Chart(interactionsCtx, {
        type: 'line',
        data: {
            labels: labels, // Simplified time axis
            datasets: [{
                label: 'Interactions',
                data: interactionsData,
                borderColor: '#FF0000', // Red color as requested
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 4,
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                annotation: {
                    annotations: {
                        label1: {
                            type: 'label',
                            xValue: 30,
                            yValue: 105,
                            content: 'Diwali Presentation',
                            color: 'red',
                            font: { size: 12 },
                            position: 'top',
                            yAdjust: -10
                        },
                        label2: {
                            type: 'label',
                            xValue: 50,
                            yValue: 45,
                            content: ['Presentation With Mental', 'Health Consultant'],
                            color: 'red',
                            font: { size: 10 },
                            position: 'top',
                            yAdjust: -30,
                            xAdjust: 20
                        },
                        label3: {
                            type: 'label',
                            xValue: 68,
                            yValue: 80,
                            content: ['Bake Sale', 'Seminar With Guest Speaker'],
                            color: 'red',
                            font: { size: 10 },
                            position: 'top',
                            yAdjust: -20
                        },
                        label4: {
                            type: 'label',
                            xValue: 70,
                            yValue: 70,
                            content: 'Library Trifold Display',
                            color: 'red',
                            font: { size: 10 },
                            position: 'bottom',
                            yAdjust: 30
                        },
                        label5: {
                            type: 'label',
                            xValue: 92,
                            yValue: 75,
                            content: 'Hoops For Health',
                            color: 'red',
                            font: { size: 10 },
                            position: 'top',
                            yAdjust: -15
                        },
                        label6: {
                            type: 'label',
                            xValue: 98,
                            yValue: 215,
                            content: 'Affirmation Board',
                            color: 'red',
                            font: { size: 12 },
                            position: 'top',
                            yAdjust: 0,
                            xAdjust: -30
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 250,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });

    // Views Chart (Blue)
    const viewsCtx = document.getElementById('viewsChart').getContext('2d');

    // Approximate data for blue chart
    // Higher baseline, spikes up to ~2500
    const viewsData = labels.map(i => {
        // Random baseline noise higher
        let val = Math.random() * 500 + 100;

        // Add specific spikes matching the blue graph
        if (i === 30) val = 1850; // Diwali Presentation
        // if (i === 45) val = 1100; 
        if (i === 48) val = 1800; // Mental Health Consultant
        if (i === 70) val = 2400; // Bake Sale
        if (i === 72) val = 1500; // Guest Speaker
        if (i === 74) val = 1300; // Library Trifold
        // if (i === 85) val = 1100;
        if (i === 90) val = 1400; // Hoops For Health
        if (i === 95) val = 1900; // Affirmation Board

        return Math.round(val);
    });

    const viewsChart = new Chart(viewsCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Views',
                data: viewsData,
                borderColor: '#4285F4', // Google Blue/Standard Blue
                backgroundColor: 'rgba(66, 133, 244, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 4,
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                annotation: {
                    annotations: {
                        label1: {
                            type: 'label',
                            xValue: 30,
                            yValue: 1850,
                            content: 'Diwali Presentation',
                            color: '#4285F4',
                            font: { size: 11 },
                            position: 'top',
                            yAdjust: 10
                        },
                        label2: {
                            type: 'label',
                            xValue: 48,
                            yValue: 1800,
                            content: ['Presentation With Mental', 'Health Consultant'],
                            color: '#4285F4',
                            font: { size: 10 },
                            position: 'top',
                            yAdjust: -30,
                            xAdjust: 20
                        },
                        label3: {
                            type: 'label',
                            xValue: 70,
                            yValue: 2400,
                            content: 'Bake Sale',
                            color: '#4285F4',
                            font: { size: 10 },
                            position: 'top',
                            yAdjust: -20
                        },
                        label4: {
                            type: 'label',
                            xValue: 72,
                            yValue: 1500,
                            content: 'Seminar With Guest Speaker',
                            color: '#4285F4',
                            font: { size: 10 },
                            position: 'right',
                            xAdjust: 10,
                            yAdjust: -10
                        },
                        label5: {
                            type: 'label',
                            xValue: 74,
                            yValue: 1300,
                            content: 'Library Trifold Display',
                            color: '#4285F4',
                            font: { size: 10 },
                            position: 'bottom',
                            yAdjust: 20
                        },
                        label6: {
                            type: 'label',
                            xValue: 90,
                            yValue: 1400,
                            content: 'Hoops For Health',
                            color: '#4285F4',
                            font: { size: 10 },
                            position: 'top',
                            yAdjust: -15
                        },
                        label7: {
                            type: 'label',
                            xValue: 95,
                            yValue: 1900,
                            content: 'Affirmation Board',
                            color: '#4285F4',
                            font: { size: 12 },
                            position: 'top',
                            yAdjust: 0,
                            xAdjust: -30
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 3000,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
});
