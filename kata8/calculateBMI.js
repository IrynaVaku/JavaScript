const bmi = (w, h) => {
  let a = w / h ** 2;
  if (a <= 18.5) return 'Underweight';
  if (a <= 25.0) return 'Normal';
  if (a <= 30.0) return 'Overweight';
  return 'Obese';
};
