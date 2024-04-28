import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  console.log(resultData);
  return (
    <table id="results">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
