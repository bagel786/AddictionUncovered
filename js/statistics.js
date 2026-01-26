document.addEventListener('DOMContentLoaded', function () {
    // Shared Chart Defaults
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#2D1B36';

    // Raw Data (Date, Impressions, Interactions, Events)
    const rawData = [
        { date: '2025-09-09', impressions: 967, interactions: 19, event: '' },
        { date: '2025-09-10', impressions: 857, interactions: 4, event: '' },
        { date: '2025-09-11', impressions: 8, interactions: 0, event: '' },
        { date: '2025-09-12', impressions: 373, interactions: 33, event: '' },
        { date: '2025-09-13', impressions: 109, interactions: 1, event: '' },
        { date: '2025-09-14', impressions: 57, interactions: 1, event: '' },
        { date: '2025-09-15', impressions: 164, interactions: 30, event: '' },
        { date: '2025-09-16', impressions: 669, interactions: 25, event: '' },
        { date: '2025-09-17', impressions: 511, interactions: 17, event: '' },
        { date: '2025-09-18', impressions: 298, interactions: 1, event: '' },
        { date: '2025-09-19', impressions: 111, interactions: 0, event: '' },
        { date: '2025-09-20', impressions: 76, interactions: 0, event: '' },
        { date: '2025-09-21', impressions: 84, interactions: 0, event: '' },
        { date: '2025-09-22', impressions: 66, interactions: 5, event: '' },
        { date: '2025-09-23', impressions: 39, interactions: 0, event: '' },
        { date: '2025-09-24', impressions: 34, interactions: 0, event: '' },
        { date: '2025-09-25', impressions: 506, interactions: 16, event: '' },
        { date: '2025-09-26', impressions: 127, interactions: 1, event: '' },
        { date: '2025-09-27', impressions: 40, interactions: 1, event: '' },
        { date: '2025-09-28', impressions: 69, interactions: 0, event: '' },
        { date: '2025-09-29', impressions: 38, interactions: 1, event: '' },
        { date: '2025-09-30', impressions: 456, interactions: 69, event: '' },
        { date: '2025-10-01', impressions: 483, interactions: 35, event: '' },
        { date: '2025-10-02', impressions: 436, interactions: 5, event: '' },
        { date: '2025-10-03', impressions: 70, interactions: 0, event: '' },
        { date: '2025-10-04', impressions: 45, interactions: 2, event: '' },
        { date: '2025-10-05', impressions: 40, interactions: 0, event: '' },
        { date: '2025-10-06', impressions: 490, interactions: 20, event: '' },
        { date: '2025-10-07', impressions: 259, interactions: 1, event: '' },
        { date: '2025-10-08', impressions: 72, interactions: 1, event: '' },
        { date: '2025-10-09', impressions: 43, interactions: 1, event: '' },
        { date: '2025-10-10', impressions: 61, interactions: 1, event: '' },
        { date: '2025-10-11', impressions: 20, interactions: 0, event: '' },
        { date: '2025-10-12', impressions: 156, interactions: 26, event: '' },
        { date: '2025-10-13', impressions: 684, interactions: 2, event: '' },
        { date: '2025-10-14', impressions: 147, interactions: 0, event: '' },
        { date: '2025-10-15', impressions: 32, interactions: 0, event: '' },
        { date: '2025-10-16', impressions: 96, interactions: 0, event: '' },
        { date: '2025-10-17', impressions: 22, interactions: 0, event: '' },
        { date: '2025-10-18', impressions: 169, interactions: 1, event: '' },
        { date: '2025-10-19', impressions: 98, interactions: 0, event: '' },
        { date: '2025-10-20', impressions: 3, interactions: 0, event: '' },
        { date: '2025-10-21', impressions: 1146, interactions: 104, event: '' },
        {
            date: '2025-10-22', impressions: 1863, interactions: 39, event: 'Diwali Presentation',
            style: { yAdjust: -60 }
        },
        { date: '2025-10-23', impressions: 98, interactions: 3, event: '' },
        { date: '2025-10-24', impressions: 81, interactions: 1, event: '' },
        { date: '2025-10-25', impressions: 181, interactions: 2, event: '' },
        { date: '2025-10-26', impressions: 1076, interactions: 42, event: '' },
        { date: '2025-10-27', impressions: 1171, interactions: 39, event: '' },
        { date: '2025-10-28', impressions: 275, interactions: 2, event: '' },
        { date: '2025-10-29', impressions: 306, interactions: 15, event: '' },
        { date: '2025-10-30', impressions: 400, interactions: 4, event: '' },
        { date: '2025-10-31', impressions: 96, interactions: 3, event: '' },
        { date: '2025-11-01', impressions: 228, interactions: 10, event: '' },
        { date: '2025-11-02', impressions: 269, interactions: 43, event: '' },
        { date: '2025-11-03', impressions: 288, interactions: 18, event: '' },
        { date: '2025-11-04', impressions: 175, interactions: 4, event: '' },
        { date: '2025-11-05', impressions: 333, interactions: 2, event: '' },
        { date: '2025-11-06', impressions: 841, interactions: 17, event: '' },
        { date: '2025-11-07', impressions: 1061, interactions: 29, event: '' },
        { date: '2025-11-08', impressions: 339, interactions: 1, event: '' },
        { date: '2025-11-09', impressions: 186, interactions: 2, event: '' },
        { date: '2025-11-10', impressions: 96, interactions: 1, event: '' },
        { date: '2025-11-11', impressions: 244, interactions: 24, event: '' },
        { date: '2025-11-12', impressions: 453, interactions: 42, event: '' },
        { date: '2025-11-13', impressions: 340, interactions: 4, event: '' },
        { date: '2025-11-14', impressions: 38, interactions: 2, event: '' },
        { date: '2025-11-15', impressions: 130, interactions: 0, event: '' },
        { date: '2025-11-16', impressions: 14, interactions: 0, event: '' },
        { date: '2025-11-17', impressions: 63, interactions: 0, event: '' },
        { date: '2025-11-18', impressions: 94, interactions: 0, event: '' },
        { date: '2025-11-19', impressions: 13, interactions: 0, event: '' },
        {
            date: '2025-11-20', impressions: 1842, interactions: 34, event: 'Presentation With Mental Health Consultant',
            style: { yAdjust: -80, xAdjust: 0 }
        },
        { date: '2025-11-21', impressions: 643, interactions: 10, event: '' },
        { date: '2025-11-22', impressions: 168, interactions: 5, event: '' },
        { date: '2025-11-23', impressions: 38, interactions: 1, event: '' },
        { date: '2025-11-24', impressions: 699, interactions: 19, event: '' },
        { date: '2025-11-25', impressions: 243, interactions: 3, event: '' },
        { date: '2025-11-26', impressions: 468, interactions: 8, event: '' },
        { date: '2025-11-27', impressions: 323, interactions: 20, event: '' },
        { date: '2025-11-28', impressions: 105, interactions: 1, event: '' },
        { date: '2025-11-29', impressions: 69, interactions: 2, event: '' },
        { date: '2025-11-30', impressions: 44, interactions: 1, event: '' },
        { date: '2025-12-01', impressions: 84, interactions: 0, event: '' },
        { date: '2025-12-02', impressions: 730, interactions: 14, event: '' },
        { date: '2025-12-03', impressions: 68, interactions: 2, event: '' },
        { date: '2025-12-04', impressions: 142, interactions: 3, event: '' },
        { date: '2025-12-05', impressions: 57, interactions: 0, event: '' },
        { date: '2025-12-06', impressions: 169, interactions: 0, event: '' },
        { date: '2025-12-07', impressions: 39, interactions: 0, event: '' },
        { date: '2025-12-08', impressions: 469, interactions: 32, event: '' },
        { date: '2025-12-09', impressions: 841, interactions: 10, event: '' },
        { date: '2025-12-10', impressions: 377, interactions: 11, event: '' },
        { date: '2025-12-11', impressions: 390, interactions: 9, event: '' },
        {
            date: '2025-12-12', impressions: 1171, interactions: 52, event: 'Library Trifold Display',
            style: { yAdjust: -50, xAdjust: -40, position: 'left' }
        },
        {
            date: '2025-12-13', impressions: 2407, interactions: 79, event: 'Bake Sale',
            style: { yAdjust: -60, xAdjust: 0 }
        },
        { date: '2025-12-14', impressions: 1927, interactions: 44, event: '' },
        { date: '2025-12-15', impressions: 487, interactions: 9, event: '' },
        {
            date: '2025-12-16', impressions: 1437, interactions: 72, event: 'Seminar With Guest Speaker',
            style: { yAdjust: -50, xAdjust: 40, position: 'right' }
        },
        { date: '2025-12-17', impressions: 228, interactions: 4, event: '' },
        { date: '2025-12-18', impressions: 164, interactions: 6, event: '' },
        { date: '2025-12-19', impressions: 80, interactions: 4, event: '' },
        { date: '2025-12-20', impressions: 76, interactions: 5, event: '' },
        { date: '2025-12-21', impressions: 456, interactions: 26, event: '' },
        { date: '2025-12-22', impressions: 165, interactions: 1, event: '' },
        { date: '2025-12-23', impressions: 122, interactions: 0, event: '' },
        { date: '2025-12-24', impressions: 90, interactions: 1, event: '' },
        { date: '2025-12-25', impressions: 492, interactions: 23, event: '' },
        { date: '2025-12-26', impressions: 277, interactions: 6, event: '' },
        { date: '2025-12-27', impressions: 157, interactions: 7, event: '' },
        { date: '2025-12-28', impressions: 297, interactions: 10, event: '' },
        { date: '2025-12-29', impressions: 184, interactions: 5, event: '' },
        { date: '2025-12-30', impressions: 452, interactions: 144, event: '' },
        { date: '2025-12-31', impressions: 598, interactions: 17, event: '' },
        { date: '2026-01-01', impressions: 911, interactions: 23, event: '' },
        { date: '2026-01-02', impressions: 841, interactions: 25, event: '' },
        { date: '2026-01-03', impressions: 362, interactions: 8, event: '' },
        { date: '2026-01-04', impressions: 685, interactions: 29, event: '' },
        { date: '2026-01-05', impressions: 168, interactions: 11, event: '' },
        { date: '2026-01-06', impressions: 1073, interactions: 43, event: '' },
        { date: '2026-01-07', impressions: 809, interactions: 39, event: '' },
        { date: '2026-01-08', impressions: 1362, interactions: 47, event: '' },
        { date: '2026-01-09', impressions: 486, interactions: 13, event: '' },
        { date: '2026-01-10', impressions: 259, interactions: 7, event: '' },
        {
            date: '2026-01-11', impressions: 1279, interactions: 73, event: 'Hoops For Health',
            style: { yAdjust: -40, xAdjust: -20 }
        },
        { date: '2026-01-12', impressions: 1010, interactions: 13, event: '' },
        { date: '2026-01-13', impressions: 97, interactions: 7, event: '' },
        { date: '2026-01-14', impressions: 365, interactions: 24, event: '' },
        { date: '2026-01-15', impressions: 1277, interactions: 69, event: '' },
        { date: '2026-01-16', impressions: 780, interactions: 32, event: '' },
        { date: '2026-01-17', impressions: 1741, interactions: 112, event: '' },
        {
            date: '2026-01-18', impressions: 1881, interactions: 54, event: 'Affirmation Board',
            style: { yAdjust: -50, xAdjust: -40 }
        },
        { date: '2026-01-19', impressions: 1802, interactions: 97, event: '' },
        { date: '2026-01-20', impressions: 1020, interactions: 25, event: '' },
        { date: '2026-01-21', impressions: 1185, interactions: 216, event: '' },
        { date: '2026-01-22', impressions: 866, interactions: 32, event: '' },
        { date: '2026-01-23', impressions: 968, interactions: 23, event: '' },
    ];

    // Process Data
    const labels = rawData.map(d => {
        const date = new Date(d.date);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });

    // Views Chart Data
    const viewsData = rawData.map(d => d.impressions);

    // Interactions Data
    const interactionsData = rawData.map(d => d.interactions);


    // --- Annotation Helper ---
    const createAnnotations = (data, valueKey, color) => {
        const annotations = {};
        let eventCount = 0;

        data.forEach((d, index) => {
            if (d.event) {
                // Stagger annotations to avoid overlap
                // We'll use 3 different levels of height
                const stagger = eventCount % 3;
                let yAdjust = -30;
                if (stagger === 1) yAdjust = -60;
                if (stagger === 2) yAdjust = -90;

                // Allow manual override
                const style = d.style || {};
                const finalYAdjust = style.yAdjust !== undefined ? style.yAdjust : yAdjust;

                annotations['event' + index] = {
                    type: 'label',
                    xValue: index,
                    yValue: d[valueKey],
                    content: d.event.split(' '),
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 6,
                    padding: {
                        top: 4,
                        bottom: 4,
                        left: 8,
                        right: 8
                    },
                    color: color,
                    font: {
                        size: 11,
                        weight: '600'
                    },
                    position: style.position || 'center',
                    yAdjust: finalYAdjust,
                    xAdjust: style.xAdjust || 0,
                    callout: {
                        display: true,
                        side: 'bottom',
                        borderWidth: 1,
                        borderColor: color,
                        margin: 0
                    }
                };
                eventCount++;
            }
        });
        return annotations;
    };

    // --- Interactions Chart (Red) ---
    const interactionsCtx = document.getElementById('interactionsChart').getContext('2d');

    // Use the helper for interactions with 'interactions' value key
    const interactionsAnnotations = createAnnotations(rawData, 'interactions', '#D93025');


    const interactionsChart = new Chart(interactionsCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Interactions',
                data: interactionsData,
                borderColor: '#D93025',
                backgroundColor: 'rgba(217, 48, 37, 0.1)',
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
            layout: {
                padding: {
                    top: 70,
                    left: 20,
                    right: 50
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false },
                annotation: {
                    annotations: interactionsAnnotations,
                    clip: false
                }
            },
            scales: {
                x: {
                    display: false, // Hide x-axis labels to look cleaner or set to true if needed
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    // Auto-scale
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                }
            },
            interaction: { mode: 'nearest', axis: 'x', intersect: false }
        }
    });


    // --- Views Chart (Blue) ---
    const viewsCtx = document.getElementById('viewsChart').getContext('2d');

    // Dynamic Annotations for Views (Manual Logic preserved/re-used or use helper? Manual logic has specific fallback for views)
    const viewsAnnotations = {};
    rawData.forEach((d, index) => {
        if (d.event) {
            const style = d.style || {};
            // Default stagger if no manual style
            let yAdj = -40;
            if (style.yAdjust === undefined) {
                // Simple stagger backup
                const stagger = index % 3;
                if (stagger === 1) yAdj = -70;
                if (stagger === 2) yAdj = -100;
            }

            viewsAnnotations['event' + index] = {
                type: 'label',
                xValue: index,
                yValue: d.impressions,
                content: d.event.split(' '),
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 6,
                padding: 6,
                borderColor: 'rgba(66, 133, 244, 0.2)',
                borderWidth: 1,
                color: '#1967D2', // Darker Blue
                font: { size: 11, weight: '600' },
                position: style.position || 'center',
                yAdjust: style.yAdjust !== undefined ? style.yAdjust : yAdj,
                xAdjust: style.xAdjust || 0,
                callout: {
                    display: true,
                    side: 'bottom',
                    borderColor: '#4285F4',
                    borderWidth: 1
                }
            };
        }
    });

    const viewsChart = new Chart(viewsCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Social Media Views',
                data: viewsData,
                borderColor: '#4285F4',
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
            layout: {
                padding: {
                    top: 70, // Reduced padding to remove gap
                    left: 20,
                    right: 50
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false },
                annotation: {
                    annotations: viewsAnnotations,
                    clip: false
                }
            },
            scales: {
                x: {
                    display: false,
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    // Auto-scale (removed suggestedMax)
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                }
            },
            interaction: { mode: 'nearest', axis: 'x', intersect: false }
        }
    });
    // --- Survey Data (New Section) ---

    const surveyLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    // Knowledge Data
    const prelimKnowledgeData = [5, 11, 9, 11, 8, 5, 1, 1, 0, 0];
    const checkpointKnowledgeData = [1, 1, 0, 2, 2, 5, 18, 15, 6, 1];

    // Confidence Data
    const prelimConfidenceData = [5, 7, 17, 8, 9, 4, 1, 0, 0, 0];
    const checkpointConfidenceData = [1, 1, 1, 5, 16, 19, 5, 3, 0, 0];

    // Colors
    // Knowledge: Gradient from Red (low) to Green (high)
    const knowledgeBackgroundColors = [
        '#FF4D4D', // 1 - Red
        '#FF4D4D', // 2
        '#FF944D', // 3 - Orange
        '#FF944D', // 4
        '#FFDA4D', // 5 - Yellow
        '#FFDA4D', // 6
        '#A0E04D', // 7 - Light Green
        '#57E04D', // 8 - Green
        '#57E04D', // 9
        '#57E04D'  // 10
    ];
    // Confidence: Brand Purple
    const confidenceBackgroundColor = '#7D4199';
    const confidenceHoverColor = '#5D2E73';


    // 1. Prelim Knowledge Chart
    const prelimKnowledgeCtx = document.getElementById('prelimKnowledgeChart').getContext('2d');
    new Chart(prelimKnowledgeCtx, {
        type: 'bar',
        data: {
            labels: surveyLabels,
            datasets: [{
                label: 'Number of Responses',
                data: prelimKnowledgeData,
                backgroundColor: knowledgeBackgroundColors,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => `Score: ${items[0].label}`,
                        label: (item) => `${item.raw} Participants`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    title: { display: true, text: 'Number of Responses' }
                },
                x: {
                    grid: { display: false },
                    title: { display: true, text: 'Score (1-10)' }
                }
            }
        }
    });

    // 2. Checkpoint Knowledge Chart
    const checkpointKnowledgeCtx = document.getElementById('checkpointKnowledgeChart').getContext('2d');
    new Chart(checkpointKnowledgeCtx, {
        type: 'bar',
        data: {
            labels: surveyLabels,
            datasets: [{
                label: 'Number of Responses',
                data: checkpointKnowledgeData,
                backgroundColor: knowledgeBackgroundColors,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => `Score: ${items[0].label}`,
                        label: (item) => `${item.raw} Participants`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    title: { display: true, text: 'Number of Responses' }
                },
                x: {
                    grid: { display: false },
                    title: { display: true, text: 'Score (1-10)' }
                }
            }
        }
    });

    // 3. Prelim Confidence Chart
    const prelimConfidenceCtx = document.getElementById('prelimConfidenceChart').getContext('2d');
    new Chart(prelimConfidenceCtx, {
        type: 'bar',
        data: {
            labels: surveyLabels,
            datasets: [{
                label: 'Generic Label', // Hidden
                data: prelimConfidenceData,
                backgroundColor: '#4285F4', // Blue as per reference, or brand logic? Let's use Blue to distinguish "Confidence" from "Knowledge" if we want to follow reference closely, OR use Brand. Original ref had blue. Brand has Teal. Let's use Brand Teal for Confidence to look good. Actually, let's use the Reference Blue shade but polished.
                // Re-reading user: "Put the preliminary confidence rating and checkpoint confidence rating side by side". 
                // Color preference: Premium.
                // Let's use #4AC2C2 (Uncovered Teal) for Confidence. It contrasts with the Rainbow Knowledge.
                backgroundColor: '#4AC2C2',
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => `Rating: ${items[0].label}`,
                        label: (item) => `${item.raw} Participants`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    title: { display: true, text: 'Number of Responses' }
                },
                x: {
                    grid: { display: false },
                    title: { display: true, text: 'Confidence Rating (1-10)' }
                }
            }
        }
    });

    // 4. Checkpoint Confidence Chart
    const checkpointConfidenceCtx = document.getElementById('checkpointConfidenceChart').getContext('2d');
    new Chart(checkpointConfidenceCtx, {
        type: 'bar',
        data: {
            labels: surveyLabels,
            datasets: [{
                label: 'Generic Label',
                data: checkpointConfidenceData,
                backgroundColor: '#4AC2C2', // Uncovered Teal
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => `Rating: ${items[0].label}`,
                        label: (item) => `${item.raw} Participants`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    title: { display: true, text: 'Number of Responses' }
                },
                x: {
                    grid: { display: false },
                    title: { display: true, text: 'Confidence Rating (1-10)' }
                }
            }
        }
    });
});


