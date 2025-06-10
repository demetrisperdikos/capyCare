export function getColorForValue(value) {
  if (value <= 3) {
    return shadeColor('#0000FF', value, 1); // Blue shades
  } else if (value <= 6) {
    return shadeColor('#FFFF00', value - 3, 2); // Yellow shades
  } else {
    return shadeColor('#00FF00', value - 6, 3); // Green shades
  }
}

function shadeColor(base, offset, range) {
  // Darker at lower values, lighter at higher values within range
  const factor = offset / range; // 0 to 1
  // Simple lighten formula
  const lighten = Math.round(255 * (1 - factor)).toString(16).padStart(2, '0');
  if (base === '#0000FF') {
    return `#0000${lighten}`;
  } else if (base === '#FFFF00') {
    return `#${lighten}${lighten}00`;
  } else {
    return `#00${lighten}00`;
  }
}

export function getAverageColor(values) {
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return getColorForValue(Math.round(avg));
}
