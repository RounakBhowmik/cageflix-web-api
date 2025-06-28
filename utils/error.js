
exports.getErrorDetails = (err) => {
    const matches = err.stack.split('\n');
    const regex1 = /\((.*):(\d+):(\d+)\)$/;
    const regex2 = /(.*):(\d+):(\d+)$/;
    const errorArr1 = regex1.exec(matches[1]);
    const errorArr2 = regex2.exec(matches[1]);
    if (errorArr1 !== null || errorArr2 !== null) {
        const errorText = matches[0];
        if (errorArr1 !== null) {
            var errorFile = errorArr1[1];
            var errorLine = errorArr1[2];
        } else if (errorArr2 !== null) {
            var errorFile = errorArr2[1];
            var errorLine = errorArr2[2];
        }
        return ({
            errorText: errorText.replace("Error: Error:", "").trim(),
            errorFile: errorFile.replace('at', '').trim(),
            errorLine: errorLine,
            errorTime:  new Date()
        });
    }
}