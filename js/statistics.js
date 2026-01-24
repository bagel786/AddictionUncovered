document.addEventListener('DOMContentLoaded', function () {
    // Shared Chart Defaults
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#2D1B36';

    // Interactions Chart (Red)
    const interactionsCtx = document.getElementById('interactionsChart').getContext('2d');

    // Generating some realistic looking data based on the red graph image
    // The graph shows spikes corresponding to events
    const labels = Array.from({ length: 100 }, (_, i) => i + 1);

    // Approximate data points trying to match the red graph visual
    // Baseline is low (~0-10), with periodic spikes
    const interactionsData = labels.map(i => {
        // Random baseline noise
        let val = Math.random() * 20;

        // Add specific spikes
        if (i === 30) val = 105; // Diwali Presentation
        if (i === 50) val = 45; // Mental Health Consultant
        if (i === 70) val = 80; // Bake Sale / Guest Speaker
        if (i === 75) val = 75; // Library Trifold
        if (i === 88) val = 145;
        if (i === 92) val = 75; // Hoops For Health
        if (i === 96) val = 110;
        if (i === 98) val = 215; // Affirmation Board

        return Math.max(0, val);
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
                pointRadius: 0, // Hiding points for cleaner look like image
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
                        line1: {
                            type: 'line',
                            yMin: 105,
                            yMax: 105,
                            xMin: 30,
                            xMax: 30,
                            borderColor: 'rgba(0,0,0,0.1)',
                            borderWidth: 1,
                            label: {
                                content: 'Diwali Presentation',
                                enabled: true,
                                position: 'start'
                            }
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: false, // Hide x axis labels to match cleanup look
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
        if (i === 45) val = 1100;
        if (i === 55) val = 1800; // Mental Health Consultant
        if (i === 68) val = 2400; // Bake Sale
        if (i === 70) val = 1400; // Guest Speaker
        if (i === 72) val = 1300; // Library Trifold
        if (i === 85) val = 1100;
        if (i === 90) val = 1400; // Hoops For Health
        if (i === 95) val = 1900; // Affirmation Board

        return val;
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

    // Add custom annotations manually since we don't have the annotation plugin explicitly imported in HTML header
    // Ideally we would add chartjs-plugin-annotation but we can also just use the tooltips or labels
    // For now, let's leave it clean as per the basic Chart.js implementation. 
    // The requested graphs have text annotations directly on them. 
    // To achieve that perfectly we need the plugin, but standard tooltips on hover are a good start.
});
