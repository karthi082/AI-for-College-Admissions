document.getElementById('admission-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get values from the input fields
    let gpa = parseFloat(document.getElementById('gpa').value);
    let sat = parseInt(document.getElementById('sat').value);
    let extracurricular = parseInt(document.getElementById('extracurricular').value);

    // Basic logic for prediction (could be replaced with machine learning model)
    let admissionChance = calculateAdmissionChance(gpa, sat, extracurricular);

    // Display result
    let resultText = `Your predicted admission chance: ${admissionChance}%`;

    // Show result on the page
    document.getElementById('result').innerText = resultText;
});

function calculateAdmissionChance(gpa, sat, extracurricular) {
    // Example logic: You can create a more complex model based on data
    let score = 0;

    // GPA score (on a scale of 0-4)
    if (gpa >= 3.5) score += 40;
    else if (gpa >= 3.0) score += 30;
    else if (gpa >= 2.5) score += 20;
    else score += 10;

    // SAT score (on a scale of 400-1600)
    if (sat >= 1400) score += 40;
    else if (sat >= 1200) score += 30;
    else if (sat >= 1000) score += 20;
    else score += 10;

    // Extracurriculars (on a scale of 0-5)
    score += extracurricular * 5;

    // Calculate admission chance as a percentage
    let chance = Math.min(score, 100); // Cap it at 100%
    return chance;
}
