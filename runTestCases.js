export default runTestCases = (algFunction, testCases) => {
    const caseOutcomes = testCases.map(testCase => {
        const {given, expected } = testCase;
        const response = algFunction(given);
        return { given, expected, response, passed: response === expected }
    });

    const passed = cases.every((testCase) => testCase.passed)

    return {
        passed, caseOutcomes
    }
}