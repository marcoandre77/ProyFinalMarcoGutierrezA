// Verifica si el estudiante es mayor de 18 años
export function isAdult(birthDate) {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    return age > 18 || (age === 18 && hasBirthdayPassed);
}

// Verifica que el documento de identidad sea solo numérico
export function isValidDocument(doc) {
    return /^[0-9]+$/.test(doc);
}

// Verifica que el nombre completo sea solo alfabético (incluye acentos y espacios)
export function isValidName(name) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(name);
}