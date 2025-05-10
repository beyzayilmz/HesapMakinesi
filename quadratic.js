document.getElementById('quadraticForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b * b - 4 * a * c;
    let result = '';

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Two Real Roots: x₁ = ${root1.toFixed(2)}, x₂ = ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result = `One Real Root: x = ${root.toFixed(2)}`;
    } else {
        result = `No Real Roots (Complex Roots).`;
    }

    document.getElementById('result').textContent = result;
});
